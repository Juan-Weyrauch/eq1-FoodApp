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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.emoji}>{producto.emoji}</Text>
          <Text style={styles.nombre} numberOfLines={2} adjustsFontSizeToFit>
            {producto.name}
          </Text>
        </View>
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
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
    width: "45%", // Takes up slightly less than half to account for margins
    aspectRatio: 1, // Makes it a perfect square
  },
  disabled: {
    opacity: 0.4,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 8,
    flexWrap: "wrap",
  },
  emoji: {
    fontSize: 24,
    marginRight: 4,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
    textAlign: "center",
    flexWrap: "wrap",
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
