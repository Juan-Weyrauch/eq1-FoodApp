import { Text, TextInput, StyleSheet, View, Button } from "react-native";
import { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { useNavigation } from "@react-navigation/native";

// by using onSubmitEditing the value is only stored when the user submits the input.

export default function LandingScreen() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const { setUserName } = useCart();
  

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(inputValue));
  }, [inputValue]);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setUserName(inputValue);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bienvenido a FoodApp</Text>
      <Text style={styles.formsText}>Por favor, ingrese su nombre:</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={handleSubmit}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  forms: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
