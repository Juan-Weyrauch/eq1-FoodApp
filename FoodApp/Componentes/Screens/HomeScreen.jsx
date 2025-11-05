import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../context/cartContext";
import ListaProductos from "../listaproducto";

const Tab = createBottomTabNavigator();
const PRIMARY = "#1E88E5";

export default function HomeScreen() {
  const { userName } = useCart();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (userName) {
      navigation.setOptions({
        title: "FoodApp",
      });
    }
  }, [navigation, userName]);

  return (
    <View style={styles.screen}>
      <Text style={styles.h1}>
        Bienvenido, {userName || "Invitado"} 👋
      </Text>

      {/* Tabs go here */}
      <View style={styles.tabsContainer}>
        <ProductosTabs />
      </View>
    </View>
  );
}

function ProductosTabs() {
  const { addToCart } = useCart();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY,
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarLabelStyle: { fontSize: 10, fontWeight: "600" },
      }}
    >
      <Tab.Screen name="Comidas">
        {() => <ListaProductos categoria="comida" addToCarrito={addToCart} />}
      </Tab.Screen>
      <Tab.Screen name="Meriendas">
        {() => <ListaProductos categoria="meriendas" addToCarrito={addToCart} />}
      </Tab.Screen>
      <Tab.Screen name="Bebidas">
        {() => <ListaProductos categoria="bebidas" addToCarrito={addToCart} />}
      </Tab.Screen>
      <Tab.Screen name="Postres">
        {() => <ListaProductos categoria="postres" addToCarrito={addToCart} />}
      </Tab.Screen>
      <Tab.Screen name="Todos">
        {() => <ListaProductos addToCarrito={addToCart} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111",
    padding: 16,
  },
  h1: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginVertical: 12,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  tabsContainer: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 18,
    marginTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
});
