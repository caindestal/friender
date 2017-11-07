'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/, 'Email Not validate']
/* const password_validation = {
  validator: function (p) {
    return this.password_confirmation === p
  },
  message: 'Las Contraseñas no son iguales'
}
*/
const CompanySchema = new Schema({
  name: String, // nombre o razon social de la compañia
  username: {type: 'String', maxlength: [50, 'Your username is extensive'], minlength: [3, 'Your username is short']}, // nombre de usuario con el que el se registrar
  password: {type: 'String', minlength: [7, 'Password must be greater than 7 characters']}, //   contraseña con la cual el usuario se registrara
  typeOfCompany: String,  // tipo de compañia
  province: String, // Provincia
  town: String, //Municipio
  //birthdate: { type: Date, required: 'birthdate is obligatory' }, // colocar fecha fundacion empresa
  email: { type: 'String', unique: true, lowercase: true, required: 'Email is obligatory' }, // correo con el usuario se registro total mente obligario y tiene que ser unico
  tel: {type: Number, unique: true, required: 'Number Celphone is obligatory'}, // telefono obligatorio de la compañia
  //tel_Opc: Number, // telefono opcional
  permision_level: {type: Number, default: 1}, // Crea un nivel de permiso al usuario para saber asi cuanto es el poder que tiene este en la app
  singUpDate: {type: Date, default: Date.now()} // el dia que se unio al sistema
})

module.exports = mongoose.model('Company', CompanySchema)// crea un export para el modelo company y la base de datos
