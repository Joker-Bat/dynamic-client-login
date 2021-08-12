const defaultPreference = {
  loginAs: 'login',
  usernameAs: 'username',
  passwordAs: 'password',
  signinAs: 'sign in',
};

module.exports = [
  {
    id: 0,
    clientId: 'client1',
    preference: {
      ...defaultPreference,
      loginAs: 'sign in',
      usernameAs: 'account name',
      passwordAs: 'key',
      logo: 'client1.jpg',
    },
    users: [
      {
        id: 0,
        name: 'jack',
        username: 'jack',
        password: 'jack',
        email: 'jack@jack.com',
      },
      {
        id: 1,
        name: 'beatrice',
        username: 'beatrice',
        password: 'beatrice',
        email: 'beatrice@beatrice.com',
      },
      {
        id: 2,
        name: 'harvey',
        username: 'harvey',
        password: 'harvey',
        email: 'harvey@harvey.com',
      },
    ],
  },
  {
    id: 1,
    clientId: 'client2',
    preference: {
      ...defaultPreference,
      loginAs: 'login please',
      signinAs: 'login',
      logo: 'client2.jpg',
    },
    users: [
      {
        id: 0,
        name: 'benjamin',
        username: 'benjamin',
        password: 'benjamin',
        email: 'benjamin@benjamin.com',
      },
      {
        id: 1,
        name: 'jack',
        username: 'jack',
        password: 'jack',
        email: 'jack@jack.com',
      },
      {
        id: 2,
        name: 'william',
        username: 'william',
        password: 'william',
        email: 'william@william.com',
      },
    ],
  },
  {
    id: 2,
    clientId: 'client3',
    preference: {
      ...defaultPreference,
      loginAs: 'get in',
      usernameAs: 'unique id',
      signinAs: 'submit',
      logo: 'client3.jpg',
    },
    users: [
      {
        id: 0,
        name: 'owen',
        username: 'owen',
        password: 'owen',
        email: 'owen@owen.com',
      },
      {
        id: 1,
        name: 'ramona',
        username: 'ramona',
        password: 'ramona',
        email: 'ramona@ramona.com',
      },
      {
        id: 2,
        name: 'jack',
        username: 'jack',
        password: 'jack',
        email: 'jack@jack.com',
      },
    ],
  },
];
