'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userCtrl = require('./controllers/user')
const companyCtrl = require('./controllers/company')
const pug = require('pug')


app.use(bodyParser.urlencoded({extended: false})) // llamada del middleware bodyParser que busca las rutas y las interpreta

app.use(bodyParser.json()) // para poder utilizar y leer objetos tipo json


app.set('view engine', 'pug') // configuracion de motor de pantillas    

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/signup', userCtrl.signUp) // ruta para el registro de usuarios
app.get('/users', userCtrl.getUsers)
app.get('/users/:userId', userCtrl.getUser) // petion get para mostrar un producto especificado por su ID
app.post('/login', userCtrl.signIn)
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/signup', (req, res) => {
  res.render('registro')
})
app.put('/users/:userId', userCtrl.updateUser)
app.delete('/user/:userId', userCtrl.deleteUser)



app.post('/sign', companyCtrl.signUp)
app.get('/companys', companyCtrl.getCompanys)
app.get('/company/:companyId', companyCtrl.getCompany)
app.post('/logini', companyCtrl.signIn)
app.get('/logini', (req, res) => {
  res.render('loginCompany')
})
app.get('/sign', (req, res) => {
  res.render('registroCompany')
})
app.put('/company/:companyId', companyCtrl.updateCompany)
app.delete('/company/:companyId', companyCtrl.deleteCompany)




module.exports = app

/*
  APIRESTFULL
  GET = Peticion para pedirle algo al servidor
  POST = Peticion para enviarle lo que sea al servidor
  PUT = Peticion para sobrescribir o editar cualquier informacion en el servidor
  DELETE = Peticion para borrar algo que este en el servidor
*/
/*
  codigos de estado
  200 = la respuesta son correctas y la peticion ha sido procesada correctamente
  300 = respuestas de redireccion el cliente necesita mas acciones para finalizar la Peticion
  400 = Errores por el cliente en el servidor
  500 = Errores por el servidor quiere decir que el servidor esta fallando
*/
