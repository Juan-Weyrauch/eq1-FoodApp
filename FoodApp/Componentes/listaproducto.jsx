import { ScrollView, StyleSheet, Text, View } from "react-native";
import Producto from "./producto";

export default function ListaProductos({ categoria }) {
  const { products, addToCart } = useCart();
  const filtrados = categoria
    ? products.filter((p) => p.category === categoria)
    : products;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🍴 Menú de Productos</Text>

      <View style={styles.grid}>
        {filtrados.map((p) => (
          <Producto key={p.id} producto={p} addToCarrito={addToCart} />
        ))}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f2f2f2",
    padding: 16,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#222",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
});
