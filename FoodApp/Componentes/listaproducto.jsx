import { StyleSheet, View } from "react-native";
import Producto from "./producto";
import { useCart } from "../context/cartContext";

export default function ListaProductos({ categoria }) {
  const { products, addToCart } = useCart();
  const filtrados = categoria
    ? products.filter((p) => p.category === categoria)
    : products;

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {filtrados.map((p) => (
          <Producto key={p.id} producto={p} addToCarrito={addToCart} />
        ))}
      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
    color: "#444",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
