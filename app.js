// * Crear un nuevo proyecto de node
// * Vas a poner los siguientes middlewares
// * morgan con formato tiny, express.json()
// * y tu servidor debe atender las siguietnes peticiones
// ? GET en la ruta /users y debe responder 'Esto es un GET a users desde mi servidor'
// ? POST en la ruta /users ( enviar un json en el body ) responder el mismo objeto
// TODO tienen que investigar como responder un json en express

// ! Necesario tener tu archivo app.js
// ! crear una carpeta para las rutas con un archivo llamado user.routes.js

const express = require('express');
const morgan = require('morgan');
const { exampleRouter } = require('./routes/example.routes');
const app = express();
const PORT = 4000


app.use(morgan('tiny'));
app.use(express.json());
app.use(exampleRouter)



app.listen(PORT , () => {
    console.log('====================================');
    console.log('SERVER RUNNING');
    console.log('====================================');
})