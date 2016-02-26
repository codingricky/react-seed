import * as mockedData from '../data/index';
let baseUrl = '/api/v1/users';

let get = {
  '123': {
    url: baseUrl + '/123',
    httpCode: 200,
    response: {
      httpCode: 200,
      data: {
        users: [
          mockedData.users.oneTwoThree
        ]
      },
      errors: []
    }
  },
  '124': {
    url: baseUrl + '/124',
    httpCode: 200,
    response: {
      httpCode: 200,
      data: {
        users: [
          mockedData.users.oneTwoFour
        ]
      },
      errors: []
    },
    delay: 1000
  }
};

export {
  get
};
