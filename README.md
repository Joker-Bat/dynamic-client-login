# Dynamic Client Login

A simple app that let user login to their registered clients.

## Tech used

- React
- Redux
- Node & Express (With hard coded data)

## Getting started

<hr />

To test this application clone this repo in your system and navigate to that directory in terminal.

> run this command

```js
  npm install
```

After this command to run this app

```js
  npm run dev
```

this command will start both frontend and backend server.

- To Access login page of client navigate to
  ( /app/login/{clientId} ) [list of clients](#clientslist)

## Features or work i've done on this app

<br />

- In this we have only 3 clients and each client have 3 users. (By Adding clients and users data it can scale upto N).

<br />

- User can login to their respective clients and see their details.

<br />

- Text like signin, username is rendered as per clients preference.

<br />

- If user put incorrect credential they get error message, if user from another client try to login for different client they get error message.

<br />

- If you try to get a login page for clients that have not registered, you'll get error message as (No client with that clientId)

## List of client and user details.

You can found all client and users details in (server/data/data.js) file.

Here is a shore reference

### Clients and users list<a name="clientslist"></a>

### For users there username and password is same

like

```
  username: 'jack',
  password: 'jack'
```

<br />

- client1
  - jack
  - beatrice
  - harvey
- client2
  - benjamin
  - jack
  - william
- client3
  - owen
  - ramona
  - jack

<br />

Note that user (jack) is in all three clients, in this case jack is considered as seperate user for each client, there is no data sharing between clients.
