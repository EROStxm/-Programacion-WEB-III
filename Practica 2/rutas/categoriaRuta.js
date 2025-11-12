import express from 'express';
import { crearCategoriaControlador, listarCategoriasControlador, obtenerCategoriaControlador, modificarCategoriaControlador, eliminaCategoriaControlador } from '../controladores/categoriaControlador.js';

const rutaCategoria = express.Router();

rutaCategoria.post('/categorias/enviar', crearCategoriaControlador);
rutaCategoria.get('/categorias', listarCategoriasControlador);
rutaCategoria.get('/categorias/:id', obtenerCategoriaControlador);
rutaCategoria.put('/categorias/:id', modificarCategoriaControlador);
rutaCategoria.delete('/categorias/:id', eliminaCategoriaControlador);

export default rutaCategoria;