const users = [
    {name: 'sushil', age: 24, games_played: 129},
    {name: 'Jana Kushal', age: 21, games_played: 1300},
    {name: 'Rakesh', age: 19, games_played: 143},
    {name: 'Ragav', age: 26, games_played: 219},
]

const user = users[Math.floor(Math.random()* users.length)]
console.log(user);