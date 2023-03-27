//const express = require('express') forma vieja de importar
import express from 'express'

//traigo librerias que controla variables de entorno
import * as dotenv from 'dotenv' 
dotenv.config()
console.log(process.env.PORT) // remove this after you've confirmed it is working

//app es la variable que almacena toda la funcionalidad de express
const app = express()

//SE ESTAN ATENDIENDO PETICIONES
//1. PETICION DE TIPO GET para buscar todas las habitaciones
app.get('/hotelesroxy/habitaciones', function (req, res) {
  res.send('ESTOY BUSCANDO TODAS LAS HABITACIONES')
})

//2. peticion de tipo get para buscar habitacion por id
app.get('/hotelesroxy/habitacion/:id', function (req, res) {
    res.send('ESTOY BUSCANDO HABITACION POR ID')
  })

  //3.peticion de tipo post para agregar habitacion en DB
  app.post('/hotelesroxy/habitacion', function (req, res) {
    res.send('ESTOY AGREGANDO UNA HABITACION')
  })

  //4. peticion de tipo put para editar una habitacion
  app.put('/hotelesroxy/modificarhabitacion', function (req, res) {
    res.send('ESTOY ACTUALIZANDO UNA')
  })

 

//ENCENDIENDO EL SERVIDOR EN EL PUERTO 3000
app.listen(process.env.PORT,function(){
    console.log("SERVIDOR ENCENDIDO")
})