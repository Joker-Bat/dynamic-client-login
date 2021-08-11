const defaultPreference = {
  loginAs: 'login',
  usernameAs: 'username',
  passwordAs: 'password',
  signinAs: 'sign in',
  logo: 'default.png',
};

const data = [
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
        username: 'Jack',
        password: 'jack',
        email: 'jack@jack.com',
      },
      {
        id: 1,
        username: 'Beatrice',
        password: 'beatrice',
        email: 'beatrice@beatrice.com',
      },
      {
        id: 2,
        username: 'Harvey',
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
      signinAs: 'Login in',
      logo: 'client2.png',
    },
    clientUsers: [
      {
        id: 0,
        username: 'Benjamin',
        password: 'benjamin',
        email: 'benjamin@benjamin.com',
      },
      {
        id: 1,
        username: 'Jack',
        password: 'jack',
        email: 'jack@jack.com',
      },
      {
        id: 2,
        username: 'William',
        password: 'william',
        email: 'william@william.com',
      },
    ],
  },
  {
    id: 2,
    clientId: 'client2',
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
        username: 'Owen',
        password: 'owen',
        email: 'owen@owen.com',
      },
      {
        id: 1,
        username: 'Ramona',
        password: 'ramona',
        email: 'ramona@ramona.com',
      },
      {
        id: 2,
        username: 'Jack',
        password: 'jack',
        email: 'jack@jack.com',
      },
    ],
  },
];

export default data;
