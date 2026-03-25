const axios = require('axios')

describe('Albums', () => {
    let url = 'https://jsonplaceholder.typicode.com/'

    test('Get the list of albumns available', async () => {
        const response = await axios.get(`${url}/albums`)

        expect(response.status).toBe(200);
        expect(response.data[0]).toHaveProperty('userId')
        expect(response.data[0]).toHaveProperty('id')
        expect(response.data[0]).toHaveProperty('title')
        expect(typeof (response.data[0].userId)).toBe('number')
        expect(typeof (response.data[0].id)).toBe('number')
        expect(typeof (response.data[0].title)).toBe('string')
        console.log('Sample output:', response.data[0])
    });

    test('Post a new album to the API', async () => {
        const payload = {
            userId: 1,
            title: 'new test album'
        }
        const response = await axios.post(`${url}/albums`, payload)

        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('userId')
        expect(response.data).toHaveProperty('id')
        expect(response.data).toHaveProperty('title')
        expect(typeof (response.data.userId)).toBe('number')
        expect(typeof (response.data.id)).toBe('number')
        expect(typeof (response.data.title)).toBe('string')
        console.log('New Test data:', response.data)
    });

    test('Update an existing album', async () => {
        const payload = {
            title: 'updated test album'
        }
        const response = await axios.patch(`${url}/albums/12`, payload)

        expect(response.status).toBe(200);
        expect(response.data.title).toBe('updated test album')
        expect(response.data).toHaveProperty('userId')
        expect(response.data).toHaveProperty('id')
        expect(response.data).toHaveProperty('title')
        expect(typeof (response.data.userId)).toBe('number')
        expect(typeof (response.data.id)).toBe('number')
        expect(typeof (response.data.title)).toBe('string')
        console.log('Updted Test data:', response.data)
    });

})