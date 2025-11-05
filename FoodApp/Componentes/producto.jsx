import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useCart } from "../context/cartContext";

export default function Producto({ producto }) {
  const { addToCart } = useCart(); 

  const sinStock = producto.stock === 0;

  return (
    <TouchableOpacity
      style={[styles.card, sinStock && styles.disabled]}
      onPress={() => !sinStock && addToCart(producto.id)}
      disabled={sinStock}
      activeOpacity={0.8}
    >
      <View style={styles.center}>
        <Text style={styles.emoji}>{producto.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.price}>${producto.price}</Text>
        <Text style={styles.stock}>
          {sinStock ? "Stock: 0" : `Stock: ${producto.stock}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "20%",                 
    aspectRatio: 1,            
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,          
    paddingHorizontal: 12,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    justifyContent: "space-around",
    alignItems: "center",
  },  
  disabled: {
    backgroundColor: "#f3f3f3",
    borderColor: "#ececec",
    opacity: 0.7,
  },
  center: { alignItems: "center", justifyContent: "center" },
  emoji: { fontSize: 56 },
  info: { alignItems: "center" },
  price: { fontSize: 28, fontWeight: "700", marginTop: 8 },
  stock: { fontSize: 18, color: "#444", marginTop: 4 },
});
