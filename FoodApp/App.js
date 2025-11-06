import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "./Componentes/Screens/HomeScreen.jsx";
import CartScreen from "./Componentes/Screens/CartScreen.jsx";
import Landing from "./Componentes/Screens/LandingScreen.jsx";
import { CartProvider } from "./context/cartContext";

const Stack = createNativeStackNavigator();
const PRIMARY = "#1E88E5";

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null); // null -> still loading

  useEffect(() => {
    const checkStoredUser = async () => {
      try {
        const storedName = await AsyncStorage.getItem("name");
        if (storedName) {
          setInitialRoute("Home");
        } else {
          setInitialRoute("Landing");
        }
      } catch (err) {
        console.error("Error reading storage:", err);
        setInitialRoute("Landing");
      }
    };

    checkStoredUser();
  }, []);

  // Show a loading screen while checking storage
  if (initialRoute === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={PRIMARY} />
        <Text style={{ color: PRIMARY, marginTop: 8 }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
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
            component={CartScreen}
            options={{ title: "Carrito" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
