import axios from 'axios';
import User from './User';

jest.mock('axios');

test('This should return users', () => {
  const users = [{ name: 'Sushil' }];
  const resp = { data: users };

  axios.get.mockResolvedValue(resp);

  return User.all().then(data => {
    expect(data).toEqual(users);
  });
});
