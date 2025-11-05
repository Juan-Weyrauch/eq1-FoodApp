import { Text, StyleSheet, View, Pressable } from "react-native";


export default function Carrito({ carrito, removeFromCarrito }) {
  const total = carrito.reduce((a, i) => a + i.price * i.q, 0);

  return (
    <View style={styles.carrito}>
      <Text style={styles.h2}>Cuenta</Text>
      <View style={styles.cartItems}>
        {carrito.length === 0 ? (
          <Text style={styles.p}>Carrito vacío</Text>
        ) : (
          carrito.map((item) => (
            <View key={item.id} style={styles.cartItems}>
              <Text style={styles.span}>
                {item.emoji} {item.name}   x {item.q} {/* No se pq no funciona el item.emoji */}
              </Text>
              <Pressable
                style={styles.remove}
                onPress={() => removeFromCarrito(item.id)}
              >
                <Text>${item.price * item.q}   ❌</Text>
              </Pressable>
            </View>
          ))
        )}
      </View>
      <Text style={styles.h3}>Total: ${total}</Text>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  p: {
    fontSize: 16,
    lineHeight: 22,
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
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});