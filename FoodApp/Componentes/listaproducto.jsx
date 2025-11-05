import { StyleSheet, Text, View } from "react-native";
import Producto from "./producto";

export default function ListaProductos({ productos, addToCarrito }) {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {productos.map((p) => (
          <Producto key={p.id} producto={p} addToCarrito={addToCarrito} />
        ))}
      </View>
    </View>
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
