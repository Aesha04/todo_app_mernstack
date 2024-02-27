const express = require('express');
const routes = require('./Routes/ToDoRoute');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); 
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then( () => console.log("successfully connected"))
.catch( (err) => console.log(err));

app.use(routes);

app.listen(5000, () => console.log(`Listening on port 5000`))