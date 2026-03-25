import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    scenarios: {
        get_gamers: {
            executor: 'constant-vus',
            vus: 10,
            duration: '5s',
            exec: 'get_gamers' // calling the scenario function
        },

        post_gamers: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '5s', target: 5 },
                { duration: '5s', target: 15 },

            ],
            exec: 'post_gamers' // calling the scenario function
        }
    }
};

// Exporting the scenario functions 

export function get_gamers() {
    const res = http.get('http://localhost:3000/gamers')
    check(res, {
        'Get response is 200': (r)=> (r).status == 200
    })
}

export function post_gamers() {
    const payload = JSON.stringify({name: 'sushil', age: 24, games_played: 129})
    const res = http.post('http://localhost:3000/gamers', payload)
    check(res, {
        'Post response is 201': (r)=> (r).status == 201
    })
}


export default function () {
    sleep(1)
}


