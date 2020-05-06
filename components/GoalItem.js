import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

/**
 * Lo basico en cualquier componente:
 *  - Import react from react
 *  - const NombreComponente
 *  - export default NombreComponente
 *
 *
 * TouchableOpacity es un componente que no agrega nada visual, pero permite envoler a otro componente para agregarle la funcionalidad
 * de cuando es tocado. Aca se usa para envolver un view y saber si fue tocado o no con onPress. El opacity da un feedback
 * visual cuando se toca el elemento. Hay muchos touchable distintos que dan distintos efectos.
 */

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onDelete.bind(this, props.id)}
      activeOpacity={0.7}
    >
      <View style={styles.listItem} on>
        <Text>
          {props.unNombre} , {props.id}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GoalItem;
