const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const app = express();

dotenv.config()

const userSchema = new mongoose.Schema({
    name: String
});

const user = mongoose.model('User', userSchema);

const PORT = 666;

app.get('/', (req,res) => {
    res.send('<h1> hello !! </h1>');
})

app.get('/get', async (req,res) => {
    const users = await user.find();
    res.send(users);
})

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@docker.pbkim0e.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {console.log('connected to mongodb')})
    .catch()

app.listen(PORT, ()=> {
    console.log('listening on port 666');
})
