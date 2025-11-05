import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Componentes/Screens/HomeScreen.jsx";
import CartScreen from "./Componentes/Screens/CartScreen.jsx";
import Landing from "./Componentes/Screens/LandingScreen.jsx";
import { CartProvider } from "./context/cartContext"; // ← contexto

const Stack = createNativeStackNavigator();
const PRIMARY = "#1E88E5";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: "FoodApp",
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
            component={CartScreen} // ← sin props
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
