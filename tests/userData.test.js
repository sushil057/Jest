const {getUserProfile, getUserData} = require('./userData');

describe('User Profile Snapshot', () => {
  test('should match the initial snapshot', () => {
    const profile = getUserProfile(101, 'Alex Miller');
    // 💡 THE MAGIC: This tells Jest to save the current 
    // structure of 'profile' as a snapshot file.
    expect(profile).toMatchSnapshot('one');
  });
});


describe("User Data from snapshot", ()=>{
    test("must match the given user data", ()=> {
        const user = getUserData(110, 'Sushil Tiwari', 9763249991, 'Pokhara-31');
        expect(user).toMatchSnapshot('two');
    })
})