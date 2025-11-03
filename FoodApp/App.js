import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import Carrito from "./Componentes/carrito";
import ListaProductos from "./Componentes/listaproducto";
import Boton from "./Componentes/boton";
import { addProducto, getProductos } from "./Servicios/servicioProducto";

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
    <View style={styles.screen}>
      <Text style={styles.h1}>Food App</Text>

      <View style={styles.actions}>
        <Button title="Agregar nueva comida" onPress={() => setBoton(true)} />
      </View>

      <View style={styles.container}>
        <ScrollView style={styles.left} contentContainerStyle={styles.listContent}>
          <ListaProductos productos={productos} addToCarrito={addToCarrito} />
        </ScrollView>

        <View style={styles.right}>
          <Carrito carrito={carrito} removeFromCarrito={removeFromCarrito} />
        </View>
      </View>

      {boton && (
        <Boton
          guardar={botonAgregarProducto}
          cancelar={() => setBoton(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  h1: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
    color: "#222",
  },
  actions: {
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 16, // RN 0.71+ soporta gap; si no, usar margin
  },
  left: {
    flex: 2,
  },
  listContent: {
    paddingRight: 8,
    paddingBottom: 24,
  },
  right: {
    flex: 1,
  },
});

export default App;
