import { db } from "../config/db.js";
//1.
export const insertarCategoria = async (categoria) => {
    const { nombre, descripcion } = categoria;
    const [resultado] = await db.execute(
        'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
        [nombre, descripcion]
    );
    return resultado;
};
//2. 
export const obtenerCategorias = async () => {
    const [filas] = await db.execute('SELECT * FROM categorias');
    return filas;
}

//3.
export const obtenerCategoriaPorId = async (id) => {
    const [filas] = await db.execute('SELECT * FROM categorias WHERE id = ?', [id]);
    return filas;
}
//4.
export const actualizarCategoria = async (id, categoria) => {
    const { nombre, descripcion } = categoria;
    const [resultado] = await db.execute(
        'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
        [nombre, descripcion, id]
    );
    return resultado;
}
//5.
export const eliminarCategoria = async (id) => {
    const [resultado] = await db.execute('DELETE FROM categorias WHERE id = ?', [id]);
    return resultado;
}
