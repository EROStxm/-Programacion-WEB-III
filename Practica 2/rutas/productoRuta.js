import express from 'express';
import { crearProducto, listarProductos, obtenerProductoControlador, modificarProducto, modificarStockProducto} from '../controladores/productoControlador.js';

const rutaProducto = express.Router();

rutaProducto.post('/productos/enviar', crearProducto);
rutaProducto.get('/productos', listarProductos);
rutaProducto.get('/productos/:id', obtenerProductoControlador);
rutaProducto.put('/productos/:id', modificarProducto);
rutaProducto.patch('/productos/:id/stock', modificarStockProducto);

export default rutaProducto;