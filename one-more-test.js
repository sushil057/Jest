import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    vus: 10,
    duration: '5s',
    thresholds: {
        'http_req_duration{name: GetGamers}': ['p(95)<200'],
        'http_req_duration{name: PostGamers}': ['p(95)<500']
    }
}

export default function () {
    const getReq = http.get('http://localhost:3000/gamers', {
        tags: { name: 'GetGamers' }

    });
    check(getReq, {
        'Get resquest has status 200': (r) => (r).status == 200
    })

    const payload = (JSON.stringify({ name: 'suresh', age: 32, games_played: 1129 }))
    const postReq = http.post('http://localhost:3000/gamers', payload, {
        tags: { name: 'PostGamers' }
    });

    check(postReq, {
        'Post resquest has status 201': (r) => (r).status == 201
    })
    sleep(0.5)
}