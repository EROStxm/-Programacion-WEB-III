import { insertarProducto, obtenerProductos , obtenerProductoPorId, actualizarProducto, actualizarStockProducto } from "../modulos/productoModelo.js";

//6.
export const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = req.body;
        const resultado = await insertarProducto(nuevoProducto);
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

//7.
export const listarProductos = async (req, res) => {
    try {
        const productos = await obtenerProductos();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

//8.
export const obtenerProductoControlador = async (req, res) => {
    try {
        const  id  = req.params;
        const producto = await obtenerProductoPorId(id);
        if (producto) {
            res.status(200).json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

//9.
export const modificarProducto = async (req, res) => {
    try {
        const  id  = req.params;
        const productoActualizado = req.body;
        const resultado = await actualizarProducto(id, productoActualizado);
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

//10.
export const modificarStockProducto = async (req, res) => {
    try {
        const  id  = req.params;
        const { cantidad } = req.body;
        const resultado = await actualizarStockProducto(id, cantidad);
        if (resultado) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el stock del producto' });
    }
};
