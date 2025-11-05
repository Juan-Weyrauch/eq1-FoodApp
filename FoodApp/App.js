import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Componentes/Screens/HomeScreen.jsx";
import CartScreen from "./Componentes/Screens/CartScreen.jsx";
import { CartProvider } from "./context/cartContext";
import ListaProductos from "./Componentes/listaProductos";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PRIMARY = "#1E88E5";


function ProductosTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Comidas">
        {() => <ListaProductos categoria="comidas" />}
      </Tab.Screen>
      <Tab.Screen name="Meriendas">
        {() => <ListaProductos categoria="meriendas" />}
      </Tab.Screen>
      <Tab.Screen name="Bebidas">
        {() => <ListaProductos categoria="bebidas" />}
      </Tab.Screen>
      <Tab.Screen name="Postres">
        {() => <ListaProductos categoria="postres" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            // component={HomeScreen}
            component={ProductosTabs}
            options={({ navigation }) => ({
              title: "Home",
              headerStyle: { backgroundColor: PRIMARY },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold", color: "#fff" },
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Cart")}
                  style={styles.cartBtn}
                  activeOpacity={0.8}
                >
                  <Text style={styles.cartEmoji}>🛒</Text>
                </TouchableOpacity>
              ),
            })}
          />

          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: "Carrito" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  cartBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cartEmoji: { fontSize: 18 },
});
