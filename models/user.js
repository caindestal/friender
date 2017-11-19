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

//Colección user moongose

const UserSchema = new Schema({
  name: String, // Nombres
  last_name: String, // Apellidos
  idcc: {type: Number, unique: true, required: 'CC is obligatory'} // Cedula de identidad                           
  place_birth: String,  // lugar de nacimiento
  email: { type: 'String', unique: true, lowercase: true, required: 'Email is obligatory' }, // correo, campo unico y requerido.
  tel: {type: Number, unique: true, required: 'Number Celphone is obligatory'}, // telefono, campo requerido
  username: {type: 'String', maxlength: [50, 'Your username is extensive'], minlength: [4, 'Your username is short']}, // nombre de logeo
  nickname: {type: 'String', maxlength: [20, 'Your nickname is extensive'], minlength: [4, 'Your nickname is short']}, // nombre de perfil
  password: {type: 'String', minlength: [7, 'Password must be greater than 7 characters']}, // contraseña del usuario, minimo 8 caracteres
  birthdate: { type: Date, required: 'birthdate is obligatory' }, // Fecha de nacimiento, campo requerido
  sex: { type: String, enum: ['male', 'female']}, // tipo de sexo
  place_residence: String, // lugar de residencia 
  profile_img: String, // imagen de perfíl
  banner: String, //imagen de portada
  tel_home: Number, // Teléfono fijo 
  permision_level: {type: Number, default: 1}, // Nivel autorización de usuario
  singUpDate: {type: Date, default: Date.now()} // Fech registro
})

module.exports = mongoose.model('User', UserSchema)// se exporta coleccion User
