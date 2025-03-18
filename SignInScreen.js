import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";

const SignInScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password here!"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>For got password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => login(email, password)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require("../assets/gg.png")} style={styles.icon} />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.fbButton]}>
          <Image source={require("../assets/fb2.png")} style={styles.icon} />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signupText}>
        Not yet a member? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  inputContainer: { width: "100%", marginBottom: 10 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { width: "100%", padding: 12, borderWidth: 1, borderColor: "#ccc", borderRadius: 5 },
  forgot: { color: "orange", marginTop: 5, alignItems: "flex-end",left:135 },
  button: { backgroundColor: "orange", padding: 15, borderRadius: 5, width: "100%", alignItems: "center", marginTop: 15 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  orText: { marginVertical: 15, fontSize: 14, fontWeight: "bold" },
  socialButtons: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
  },
  fbButton: { backgroundColor: "rgb(55 103 255)", borderColor: "#3b5998" },
  icon: { width: 20, height: 20, marginRight: 8 },
  socialText: { color: "#000", fontSize: 14 },
  signupText: { marginTop: 20 },
  signupLink: { color: "orange", fontWeight: "bold" },
});

export default SignInScreen;
