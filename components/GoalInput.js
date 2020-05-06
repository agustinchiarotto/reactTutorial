import React, { useState } from "react";
import { TextInput, Button, StyleSheet, View, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  // Anotacion de funcion flecha, const  a = (parametro1,parametro2...,) => {codigo}
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  //genero esta funcion que llama al onAddGoal del componente app.js, le manda enteredGoal por parametro y resetea el valor con enteredeGoal
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.open} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.internalInput}>
          <View style={styles.button}>
            <Button title="add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="reset"
              onPress={props.reset}
              style={styles.buttonInput}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={props.onClose.bind(this)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  //Una view solo ocupa el tamaño que tienen sus elementos internos, como el div, por eso se le da width de 60%
  internalInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },

  button: {
    width: 70,
  },
});

export default GoalInput;
