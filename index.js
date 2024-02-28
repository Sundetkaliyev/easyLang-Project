require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { createUser, getAllUsers, login, getUserById, updateUserById,deleteUserById} = require('./Controllers/UserController');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());

app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', async (req, res) => {
  return res.send({message:'fasfasfas'})
})



app.post('/register', createUser);

app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUserById);
app.delete('/users/:id',deleteUserById);







app.post('/login', login);


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};


app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).send("Access to protected data");
});


app.post('/token', (req, res) => {
    const { token } = req.body;
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        res.json({ accessToken });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
