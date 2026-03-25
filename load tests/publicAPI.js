import http from 'k6/http'
import { check, sleep, group } from 'k6'

export const options = {
    vus: __ENV.VUS || 10,  // environment variables, either entered in terminal or select from the code.
    duration: __ENV.DURATION || '5s',
    gracefulStop: '0s',
    thresholds: {
        checks: ['rate>0.99'],
        http_reqs: ['count>50'],
        http_req_duration: ['p(90)<1000']
    }
}
let new_user = {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
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
    },
}


export default function () {
    let url = 'https://jsonplaceholder.typicode.com/users'
    const getres = http.get(url)
    check(getres, {
        'Response status is 200': (r) => r.status == 200,
    })

    const getresp = http.post(url, payload)
    check(getresp, {
        "Post request returns 201": (r) => r.status == 201,
    })
    sleep(0.5)

    const patchreq = http.patch(`${url}/1`, new_user)
    check(patchreq, {
        'Patch request returns 200': (r) => r.status == (200),
    })

}



