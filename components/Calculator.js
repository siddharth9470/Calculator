import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");

  const handleNumber = (num) => {
    setDisplay(display + num);
  };

  const handleOperation = (op) => {
    if (op == "Clear") {
      setDisplay("");
      return;
    }
    if (op === "=") {
      calculate();
    } else {
      setFirstNumber(display);
      setOperation(op);
      setDisplay("");
    }
  };

  const calculate = () => {
    const first = parseFloat(firstNumber);
    const second = parseFloat(display);
    let result = 0;

    switch (operation) {
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case "*":
        result = first * second;
        break;
      case "/":
        result = first / second;
        break;
    }

    setDisplay(result.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.display}
        value={display}
        testID="display"
        editable={false}
      />
      <View style={styles.buttonContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handleNumber(num.toString())}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        {["+", "-", "*", "/", "=", "Clear"].map((op) => (
          <TouchableOpacity
            key={op}
            style={[styles.button, styles.operationButton]}
            onPress={() => handleOperation(op)}
          >
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 20,
  },
  display: {
    height: 60,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    fontSize: 24,
    marginBottom: 20,
    textAlign: "right",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  button: {
    width: "22%",
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  operationButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ccc",
  },
  buttonText: {
    fontSize: 15,
  },
});
