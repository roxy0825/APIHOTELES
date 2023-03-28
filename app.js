
import {API} from './API.js'

let sevidorHotel = new API()
sevidorHotel.levantarServidor()

//traigo librerias que controla variables de entorno
import * as dotenv from 'dotenv' 
dotenv.config()
console.log(process.env.PORT) // remove this after you've confirmed it is working




