const express = require('express');
const data = require('./data/data');

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());

app.use(express.static('server/public'));

app.get('/api/login/:clientId', (req, res) => {
  const { clientId } = req.params;
  const currentClient = data.find((client) => client.clientId === clientId);
  if (currentClient) {
    res.status(200).json({
      status: 'success',
      data: {
        preference: currentClient.preference,
      },
    });
  } else {
    res.status(404).json({
      status: 'failed',
      message: `No client record found for ${clientId}`,
    });
  }
});

app.post('/api/login/:clientId', (req, res) => {
  const { clientId } = req.params;
  const { username, password } = req.body;
  const currentClient = data.find((client) => client.clientId === clientId);
  if (!currentClient) {
    res.status(404).json({
      status: 'failed',
      message: `No client record found for ${clientId}`,
    });
  }
  const currentUser = currentClient.users.find(
    (user) => user.username === username && user.password === password
  );

  if (currentUser) {
    res.status(200).json({
      status: 'success',
      data: {
        user: {
          username: currentUser.username,
          email: currentUser.email,
        },
      },
    });
  } else {
    res.status(200).json({
      status: 'failed',
      message:
        'Email and password does not match or no matching user for this client',
    });
  }
});

const port = 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
