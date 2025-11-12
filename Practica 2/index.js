import express from "express";
import rutaProducto from "./rutas/productoRuta.js";
import rutaCategoria from "./rutas/categoriaRuta.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/', rutaProducto);
app.use('/', rutaCategoria);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});