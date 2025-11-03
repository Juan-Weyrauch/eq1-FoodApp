import { useEffect, useState } from "react";
import Boton from "./Componentes/Boton";
import Carrito from "./Componentes/Carrito";
import ListaProductos from "./Componentes/ListaProductos";
import { addProducto, getProductos } from "./Servicios/servicioProducto";
import Producto from "./Componentes/producto";
import "./styles.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [boton, setBoton] = useState(false);

  useEffect(() => {
    getProductos().then(setProductos);
  }, []);

  const addToCarrito = (id) => {
    const producto = productos.find((p) => p.id === id);
    if (!producto || producto.stock === 0) return;

    setProductos((prev) =>
      prev.map((p) =>
        p.id === id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
      )
    );

    setCarrito((prev) => {
      const buscar = prev.find((item) => item.id === id);
      if (buscar) {
        return prev.map((item) =>
          item.id === id ? { ...item, q: item.q + 1 } : item
        );
      }
      return [
        ...prev,
        { id: producto.id, name: producto.name, price: producto.price, q: 1 },
      ];
    });
  };

  const removeFromCarrito = (id) => {
    const item = carrito.find((i) => i.id === id);
    if (!item) return;

    setProductos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock + item.q } : p))
    );
    setCarrito((prev) => prev.filter((i) => i.id !== id));
  };

  const botonAgregarProducto = async (nuevoProducto) => {
    const productoCreado = await addProducto(nuevoProducto);
    setProductos((prev) => [...prev, productoCreado]);
    setBoton(false);
  };

  return (
    <div>
      <h1>Food App</h1>
      <button onClick={() => setBoton(true)}>Agregar nueva comida</button>

      <div className="container">
        <ListaProductos productos={productos} addToCarrito={addToCarrito} />
        <Carrito carrito={carrito} removeFromCarrito={removeFromCarrito} />
      </div>

      {boton && (
        <Boton
          guardar={botonAgregarProducto}
          cancelar={() => setBoton(false)}
        />
      )}
    </div>
  );
}

export default App;