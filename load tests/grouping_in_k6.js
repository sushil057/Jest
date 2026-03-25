import http from 'k6/http'
import { check, sleep, group } from 'k6'

let payload = {
    "id": 1,
    "name": "Shushil Tiwari",
    "username": "sush",
    "email": "sushil@april.biz",
    "address": {
        "street": "Lake-Side",
        "suite": "Apt. 556",
        "city": "Pokhara",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

let new_comment = {
    name: "comment",
    email: "sushil@comment.post",
    body: "this is a test comment"
}

export const options = {
    vus: 10,
    duration: '5s'
}

export default function () {
    group('Users API', function () {

        // Get user request
        const getuser = http.get('https://jsonplaceholder.typicode.com/users')

        check(getuser, {
            'Get users is passed sucessfully': (r) => r.status == 200,
        })

        // Post user
        const postuser = http.post('https://jsonplaceholder.typicode.com/users', payload)
        check(postuser, {
            'Post users is passed successfully': (r) => r.status == 201,
        })

    })

    group('Coments API', function () {
        // Get Comments
        const getcomments = http.get('https://jsonplaceholder.typicode.com/comments')
        check(getcomments, {
            'Get comments is passed successfully': (r) => r.status == 200,
        })

        const postcomment = http.post('https://jsonplaceholder.typicode.com/comments', new_comment)
        check(postcomment, {
            'Post comments is passed successfully': (r)=>r.status ==201,
        })

    })


    sleep(0.5)

}