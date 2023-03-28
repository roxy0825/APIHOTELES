import express from 'express'

// VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO DEL API REST
export let rutas = express.Router()

            //SE ESTAN ATENDIENDO PETICIONES
//1. PETICION DE TIPO GET para buscar todas las habitaciones
rutas.get('/hotelesroxy/habitaciones', function (req, res) {
    res.send('ESTOY BUSCANDO TODAS LAS HABITACIONES')
  })
  
  //2. peticion de tipo get para buscar habitacion por id
  rutas.get('/hotelesroxy/habitacion/:id', function (req, res) {
      res.send('ESTOY BUSCANDO HABITACION POR ID')
    })
  
    //3.peticion de tipo post para agregar habitacion en DB
    rutas.post('/hotelesroxy/modificarhabitacion', function (req, res) {
      res.send('ESTOY AGREGANDO UNA HABITACION')
    })
  
    //4. peticion de tipo put para editar una habitacion
    rutas.put('/hotelesroxy/modificarhabitacion', function (req, res) {
      res.send('ESTOY ACTUALIZANDO UNA HABITACION')
    })
  
  
    //5.
    rutas.get('/hotelesroxy/buscarreservas', function (req, res) {
      res.send('ESTOY BUSCANDO TODAS LAS RESERVAS')
    })
  
    //6.
    rutas.get('/hotelesroxy/reserva/:id', function (req, res) {
      res.send('ESTOY BUSCANDO RESERVA POR ID')
    })
  
    //7.
    rutas.put('/hotelesroxy/modificarreserva', function (req, res) {
      res.send('ESTOY MODIFICANDO RESERVA')
    })
  
    //8.
    rutas.post('/hotelesroxy/registrarreserva', function (req, res) {
      res.send('ESTOY REGISTRADO RESERVA')
    })
  
    //9.
    rutas.delete('/hotelesroxy/eliminarreserva', function (req, res) {
      res.send('ESTOY ELIMINANDO RESERVA')
    })
  
        