const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const secretKey = 'asdfghjkl';

app.use(bodyParser.json());

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    
    jwt.verify(bearerToken, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: 'Token not provided' });
  }
}

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Access granted to protected route', user: req.user });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));