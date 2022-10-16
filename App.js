import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import Welcome from "./Homepage/Welcomescreen";

export default function App() {
  return (
    <View>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
  entirepage: {
    backgroundColor: "red",
  },
});
