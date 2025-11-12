import { db } from "../config/db.js";
//6.
export const insertarProducto = async (producto) => {
    const { nombre, precio, stock, categoria_id } = producto;
    const [resultado] = await db.execute(
        'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)',
        [nombre, precio, stock, categoria_id]
    );
    return resultado;
};
//7.
export const obtenerProductos = async () => {
    const [filas] = await db.execute(
        `SELECT P.*, C.nombre as categoria_nombre
         FROM productos P, categorias C
         WHERE P.categoria_id = C.id`
    );
    return filas;
};
//8.
export const obtenerProductoPorId = async (id) => {
    const [filas] = await db.execute(
        `SELECT P.*, C.nombre as categoria_nombre
         FROM productos P, categorias C
         WHERE P.categoria_id = C.id AND P.id = ?`,
        [id]
    );
    return filas;
};
//9.
export const actualizarProducto = async (id, producto) => {
    const { nombre, precio, stock, categoria_id } = producto;
    const [resultado] = await db.execute(
        'UPDATE productos SET nombre = ?, precio = ?, stock = ?, categoria_id = ? WHERE id = ?',
        [nombre, precio, stock, categoria_id, id]
    );
    return resultado;
};
//10.
export const actualizarStockProducto = async (id, cantidad) => {
    const [resultado] = await db.execute(
        'UPDATE productos SET stock = stock + ? WHERE id = ?',
        [cantidad, id]
    );
    return resultado;
};
