const defaultPreference = {
  loginAs: 'login',
  usernameAs: 'username',
  passwordAs: 'password',
  signinAs: 'sign in',
  logo: 'default.png',
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
      logo: 'client1.png',
    },
    clientUsers: [
      {
        id: 0,
        username: 'jack',
        password: 'jack',
        email: 'jack@jack.com',
      },
      {
        id: 1,
        username: 'beatrice',
        password: 'beatrice',
        email: 'beatrice@beatrice.com',
      },
      {
        id: 2,
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
      logo: 'client2.png',
    },
    clientUsers: [
      {
        id: 0,
        username: 'benjamin',
        password: 'benjamin',
        email: 'benjamin@benjamin.com',
      },
      {
        id: 1,
        username: 'jack',
        password: 'jack',
        email: 'jack@jack.com',
      },
      {
        id: 2,
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
      logo: 'client3.png',
    },
    clientUsers: [
      {
        id: 0,
        username: 'owen',
        password: 'owen',
        email: 'owen@owen.com',
      },
      {
        id: 1,
        username: 'ramona',
        password: 'ramona',
        email: 'ramona@ramona.com',
      },
      {
        id: 2,
        username: 'jack',
        password: 'jack',
        email: 'jack@jack.com',
      },
    ],
  },
];
