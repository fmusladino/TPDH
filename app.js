const { executionAsyncResource } = require('async_hooks');
const express = require('express');
const app = express();
const path = require('path');
const public_User = path.resolve('public');
app.use(express.static(public_User))

const app_port = 1234;
app.listen(app_port, ()=> {
console.log('Servidor en el puerto ' + app_port);
})

app.get('/', (req,res) => {
    res.sendFile(path.resolve('views/home.html'))
})

app.get('/contacto', (req,res) => {
    res.sendFile(path.resolve('views/contacto.html'))
})