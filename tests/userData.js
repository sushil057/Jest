// userData.js

// function getUserProfile(id, name) {
//   return {
//     id: id,
//     name: name,
//     timestamp: new Date().getFullYear(), // This will change every year!
//     settings: {
//       theme: 'dark',
//       notifications: true
//     }
//   };
// }

// module.exports = getUserProfile;


function getUserData(id, name, contact, address){
    return{
        id: id,
        name: name,
        contact: contact,
        address: address,
        otherDetails: {
            employee: true,
            status: 'full time'
        }
    }
}

module.exports = getUserData;