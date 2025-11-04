import { View, ScrollView, Button, Text, StyleSheet } from "react-native";
import ListaProductos from "../listaproducto";
import Boton from "../boton";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({
  productos,
  addToCarrito,
  boton,
  setBoton,
  botonAgregarProducto,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text style={styles.h1}>Food App</Text>

      <ScrollView contentContainerStyle={styles.listContent}>
        <ListaProductos productos={productos} addToCarrito={addToCarrito} />
      </ScrollView>

      {boton && (
        <Boton
          guardar={botonAgregarProducto}
          cancelar={() => setBoton(false)}
        />
      )}
      <Button title="Agregar nueva comida" onPress={() => setBoton(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  h1: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 24,
  }
});
