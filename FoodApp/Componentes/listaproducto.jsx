import Producto from "./producto";
import { View, StyleSheet } from "react-native";

export default function ListaProductos({ productos, addToCarrito }) {
  return (
    <View style={styles.ListaProductos}>
      {productos.map((p) => (
        <Producto
          key={p.id}
          producto={p}
          addToCarrito={addToCarrito}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ListaProductos: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 0,
  },
});
