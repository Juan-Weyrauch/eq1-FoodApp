import { ScrollView, StyleSheet, Text, View } from "react-native";
import Producto from "./producto";

export default function ListaProductos({ productos, addToCarrito }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🍴 Menú de Productos</Text>

      <View style={styles.grid}>
        {productos.map((p) => (
          <Producto key={p.id} producto={p} addToCarrito={addToCarrito} />
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
