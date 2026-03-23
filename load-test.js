import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

const users = new SharedArray('users', function () {
    return (open('./users.csv')     // opens the csv file where the user data is saved.s
        .split('\n')      // checks each data and moves to the next line.
        .slice(1)         // skips the header
        .map(line => {
            const [name, age, games_played] = line.split(',');   
            return {name, age, games_played: parseInt(games_played)};
        }));
});

// [
//     {name: 'sushil', age: 24, games_played: 129},
//     {name: 'Jana Kushal', age: 21, games_played: 1300},
//     {name: 'Rakesh', age: 19, games_played: 143},
//     {name: 'Ragav', age: 26, games_played: 219},
// ]

const user = users[Math.floor(Math.random() * users.length)]; // selects a random user details to send as a playlaod for post request.

export const options = {
    vus: 10,
    duration: '2s',
    thresholds: {
        http_req_duration: ['p(95)<100'], // 95% of the requests must be completed under 100 ms.
        http_req_failed: ['rate<0.01'], // Less than 1% request may fail.
        http_reqs: ['count>30'], // Total number of request must be more than 30
        checks: ['rate>0.99'], //Almost every request must pass.
    }
}

export default function () {
    //  --- Get Request ---
    const getRes = http.get('http://localhost:3000/gamers');

    check(getRes, {
        'Get status is 200': (r) => r.status == 200,
        'Get response time is less than 200': (r) => r.timings.duration < 200
    });

    // --- Post request ---
    const payload = JSON.stringify(user);  // get the user details to send as paylaod in the post request
    const postRes = http.post('http://localhost:3000/gamers', payload)

    check(postRes, {
        'Post status is 201': (r) => r.status == 201,
        'Post response time is less than 200': (r) => r.timings.duration < 200

    })
    sleep(0.5);
}


