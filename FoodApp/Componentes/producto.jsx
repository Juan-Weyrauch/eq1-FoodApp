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
      <View style={styles.header}>
        <Text style={styles.emoji}>{producto.emoji}</Text>
        <Text style={styles.nombre}>{producto.name}</Text>
      </View>

      <Text style={styles.stock}>
        {sinStock ? "No stock" : `Stock: ${producto.stock}`}
      </Text>
      <Text style={styles.precio}>💲{producto.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  producto: {
    backgroundColor: "#fffaf0",
    padding: 16,
    margin: 8,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  disabled: {
    opacity: 0.4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  emoji: {
    fontSize: 28,
    marginRight: 6,
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
