import express from 'express'
import{ControladorHabitaciones} from '../controllers/ControladorHabitaciones'
import{ControladorReserva} from '../controllers/ControladorReserva'


let controladorHabitacion =new ControladorHabitaciones()
let controladorReserva= new ControladorReserva()

export let rutas = express.Router()

rutas.get('/hotelesroxy/buscartodashabitaciones',controladorHabitacion.buscandoTodasHabitaciones)
rutas.get('/hotelesroxy/habitacion/:idhabitacion',controladorHabitacion.buscandoHabitacion)
rutas.post('/hotelesroxy/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.put('/hotelesroxy/editarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)
  
rutas.get('/hotelesroxy/buscartodasreservas',controladorReserva.buscandotodasReservas)
rutas.get('/hotelesroxy/reserva/:id',controladorReserva.buscandoReserva)
rutas.put('/hotelesroxy/editarreserva',controladorReserva.editandoReserva)
rutas.post('/hotelesroxy/registrarreserva',controladorReserva.registrandoReserva)
rutas.delete('/hotelesroxy/eliminarreserva',controladorReserva.eliminarReserva)
  
        