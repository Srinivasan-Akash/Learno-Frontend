import { StyleSheet, Text, View, Image, Animated, Button } from "react-native";
import React from "react";
import learno from "./learno.jpeg";
const Welcomescreen = () => {
  return (
    <View style={styles.welcome}>
      <Text style={styles.text}>Welcome to Learno </Text>

      <Image source={learno} style={styles.image} blurRadius={4}></Image>
      <Text
        style={{
          position: "absolute",
          fontSize: 20,
          backgroundColor: "lightblue",
          padding: "5%",
          borderRadius: 10,
        }}
      >
        One Stop destination for quiz battle
      </Text>
      <View style={styles.cta}>
        <Text style={styles.button1}>Login</Text>
        <Text style={styles.button2}>Signup</Text>
      </View>
    </View>
  );
};

export default Welcomescreen;

const styles = StyleSheet.create({
  button1: {
    height: "100%",
    width: "25%",
    backgroundColor: "skyblue",
    margin: "1%",
    borderRadius: 10,
    padding: 5,
  },
  button2: {
    height: "100%",
    width: "25%",
    backgroundColor: "lightblue",
    margin: "1%",
    borderRadius: 10,
    padding: 5,
  },
  cta: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "5%",
  },
  image: {
    height: "60%",
    width: "100%",
  },
  text: {
    fontSize: 40,
    backgroundColor: "yellowgreen",
    color: "black",
    padding: "4%",
  },
  info: { backgroundColor: "#00000070" },
  welcome: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
  },
});
