import http from 'k6/http';
import { check } from 'k6';

export function setup() {
    // Create a user 
    const payload = JSON.stringify({
        name: 'Sushil Tiwari',
        email: 'sushil@test.com'
    });

    const res = http.post('https://jsonplaceholder.typicode.com/users', payload);

    check(res, {
        'New user has been created': (r) => r.status === 201
    });
    
    // Return user id 
    return res.json().id;

}

export default function (userId) {
    // Use the returned id, but this will fail as the API doesnot really create new users.
    const res = http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

    check(res, {
        'Failed, cause the API doesnot really create new users': (r) => r.status === 200
    });
}

export function teardown(userId) {
    // Delete user (won’t actually delete, fake API)
    const res = http.del(`https://jsonplaceholder.typicode.com/users/${userId}`);

    check(res, {
        'The newly created user is deleted': (r) => r.status === 200
    });
}