import { Text, StyleSheet, View, Pressable } from "react-native";

export default function Carrito({ carrito = [], removeFromCarrito, total }) {
  const computedTotal =
    total ??
    carrito.reduce(
      (a, i) => a + (i.lineTotal ?? (i.price || 0) * (i.qty || 0)),
      0
    );

  return (
    <View style={styles.carrito}>
      <Text style={styles.h2}>Cuenta</Text>
      <View style={styles.cartItems}>
        {carrito.length === 0 ? (
          <Text style={styles.p}>Carrito vacío</Text>
        ) : (
          carrito.map((item) => (
            <View key={item.id} style={styles.row}>
              <Text style={styles.span}>
                {item.emoji ?? "🧺"} {item.name} x {item.qty}
              </Text>
              <Pressable
                style={styles.remove}
                onPress={() => removeFromCarrito(item.id)}
              >
                <Text style={styles.priceText}>
                  ${item.lineTotal ?? (item.price || 0) * (item.qty || 0)} ❌
                </Text>
              </Pressable>
            </View>
          ))
        )}
      </View>
      <Text style={styles.h3}>Total: ${computedTotal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 22,
    fontWeight: "600",
    marginVertical: 8,
    color: "#222",
  },
  h3: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginVertical: 6,
  },
  carrito: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 16,
    borderRadius: 8,
    width: "100%",
  },
  cartItems: {
    width: "100%",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  p: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  span: {
    fontWeight: "bold",
    color: "#e91e63",
  },
  remove: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  priceText: {
    color: "#111",
  },
});
