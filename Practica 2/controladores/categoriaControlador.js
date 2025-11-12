import { insertarCategoria, obtenerCategorias, obtenerCategoriaPorId, actualizarCategoria, eliminarCategoria } from "../modulos/categoriaModelo.js";

//1.
export const crearCategoriaControlador = async (req, res) => {
    try {
        const nuevaCategoria = req.body;
        const resultado = await insertarCategoria(nuevaCategoria);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la categoría' });
    }
};
//2.
export const listarCategoriasControlador = async (req, res) => {
    try {
        const categorias = await obtenerCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las categorías' });
    }
};

//3.
export const obtenerCategoriaControlador = async (req, res) => {
    try {
        const id = req.params.id;
        const categoria = await obtenerCategoriaPorId(id);
        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ error: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la categoría' });
    }
};

//4.
export const modificarCategoriaControlador = async (req, res) => {
    try {
        const  id  = req.params;
        const categoriaActualizada = req.body;
        const resultado = await actualizarCategoria(id, categoriaActualizada);
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({ error: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
};

//5.
export const eliminaCategoriaControlador = async (req, res) => {
    try {
        const  id  = req.params;
        const resultado = await eliminarCategoria(id);
        if (resultado) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
};
