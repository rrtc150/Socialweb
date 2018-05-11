const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMessage = require('./configMessage'); 

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {});
app.listen(300, ()=>{
	console.log('Servidor running'); 
}); 