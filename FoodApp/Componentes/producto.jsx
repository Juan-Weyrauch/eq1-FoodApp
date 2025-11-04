import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Producto({ producto, addToCarrito }) {
  const sinStock = producto.stock === 0;

  return (
    <TouchableOpacity
      style={[styles.producto, sinStock && styles.disabled]}
      onPress={() => !sinStock && addToCarrito(producto.id)}
      disabled={sinStock}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{producto.name}</Text>
        <Text style={styles.stock}>
          {sinStock ? "No stock" : `Stock: ${producto.stock}`}
        </Text>
        <Text style={styles.precio}>💲{producto.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  producto: {
    backgroundColor: "#b0aeaeff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  disabled: {
    opacity: 0.4,
  },
  infoContainer: {
    alignItems: "center", 
    justifyContent: "center", 
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  stock: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  precio: {
    fontSize: 18,
    color: "green",
    marginTop: 4,
    textAlign: "center",
  },
});
