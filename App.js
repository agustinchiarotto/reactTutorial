import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  /**esta es la definicion de una constante "hook" que tiene bindeados dos elementos. El primero del arreglo indica
   * una variable cualquiera, y el segundo una funcion por la cual esa variable va a cambiar al mandarle un valor nuevo por parametro.
   * Ademas eso se iguala a useState con un parametro que indica el valor inicial de la variable
   * Tener cuidado ahi con el tipo de dato que se le pasa como valor inicial para no generar problemas.
   * */

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMod, setIsAddMod] = useState(false);
  console.log("renderizando")
  console.log(courseGoals)

  const addGoalHandler = (parametro1) => {
    // los ... hace que concatenee todo lo anterior
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      { key: Math.random().toString(), value: parametro1 },
    ]);
    setIsAddMod(false);
  };

  const resetGoalHandler = () => {
    setCourseGoals((currentGoals) => []);
  };

  const deleteItem = (id) => {
    setCourseGoals((currentGoals) => {
      //Busco el elemento con filter, que rearma una coleccion en base a una caracteristica dada por una funcion
      console.log("id al eliminar es " + id);
      return currentGoals.filter((goal) => {
        goal.key !== id;
      });
    });
  };

  const openModal = () => {
    setIsAddMod(true);
  };

  const closeModal = () => {
    setIsAddMod(false);
  };

  /**Shift + Alt + F. para identar
   * 
   * 
   * courseGoals.map((goal) =>  <Text></Text> hace un mapeo de elementos del array a componentes. Llama goal a cada elemnto y
   * es como un forEach.
   * Despues se actualizo por una mejor que usa el flatlist, funciona igual. ItemData en este caso es el elemento del arreglo, al
   * cual le podemos hacer varias preguntas, como index o directamente item para acceder a sus variables.
   * Text component no permite el style, entonces se lo envuelve en un view component para poder darle estilo
   * ScrollView es escensial para cuando el elemento no entra en la pantalla. Depende donde se coloque es el elemento que va a ser
   * scrolleable. Es muy usado en elementos dinamicos, que no sabemos el tamaño de antemano
   * Para llamar funciones entre componentes se pasan por parametro. Se puede usar cualqueir nombre en el parametro, aca es
   * onAddGoal y reset, ambas tienen asignadas la funcion correspondiente
   */
  return (
    <View style={styles.screen}>
      <Button title="Open" onPress={openModal} />
      <GoalInput
        onAddGoal={addGoalHandler}
        reset={resetGoalHandler}
        open={isAddMod}
        onClose={closeModal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            unNombre={itemData.item.value}
            id={itemData.item.key}
            onDelete={deleteItem}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  boton: {
    height: 300,
  },
});
