import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Producto({ producto, addToCarrito }) {
  const sinStock = producto.stock === 0;

  return (
    <TouchableOpacity
      style={[styles.producto, sinStock && styles.disabled]}
      onPress={() => !sinStock && addToCarrito(producto.id)}
      disabled={sinStock}
    >
      <View>
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
    backgroundColor: "#f9f9f9",
    padding: 16,
    margin: 8,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  disabled: {
    opacity: 0.4,
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
  },
  stock: {
    fontSize: 16,
    color: "#555",
  },
  precio: {
    fontSize: 18,
    color: "green",
    marginTop: 4,
  },
});
