import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.ar_PRMgFqmdkcOnbofmAoQHaFj&pid=Api&P=0&h=180" }} style={styles.avatar} />
      <Text style={styles.name}>{"Tuấn Long"}</Text>
      <Text style={styles.role}>Mobile developer</Text>
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development, now I am learning React Native
      </Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#fff" },
  header: { width: "100%", height: 100, backgroundColor: "blue" },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginTop: -50, 
    borderWidth: 3, 
    borderColor: "#fff" 
  },
  name: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  role: { color: "blue", marginBottom: 10 },
  description: { textAlign: "center", paddingHorizontal: 20 },
  button: { backgroundColor: "orange", padding: 10, borderRadius: 5, marginTop: 20 },
  buttonText: { color: "#fff" }
});

export default AccountScreen;
