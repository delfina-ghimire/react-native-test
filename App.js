import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { useTailwind } from "tailwind-rn";

import {
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [todos, setToDos] = useState([]);
  const [todo, setToDo] = useState("");
  const renderItem = ({ item }) => <Text style={styles.listItem}>{item}</Text>;

  const handlePress = () => {
    setToDos((prev) => [...prev, todo]);
    setToDo("");
  };

  const handleClear = () => {
    setToDos("");
  };

  const TailwindTest = () => {
    const tailwind = useTailwind();
    return (
      <View style={tailwind("text-blue-600 border  mt-12 ")}>
        <Text
          style={tailwind(
            "text-blue-600 py-12 items-center justify-center pl-20"
          )}
        >
          This is tailwind test Footer.
        </Text>
      </View>
    );
  };

  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={[styles.container, styles.main]}>
          <Text style={styles.headerText}>Hi Rupesh!</Text>
          <TextInput
            placeholder="Enter TODO +"
            value={todo}
            style={styles.input}
            onChangeText={(e) => {
              setToDo(e);
            }}
          />
          <View style={styles.addButtonContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.addButton}>
              <Text style={styles.btnText}>Add new todo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClear} style={styles.addButton}>
              <Text style={styles.btnText}>Clear All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            style={styles.listContainer}
            data={todos}
            renderItem={renderItem}
          />
        </View>
        <TailwindTest />
      </SafeAreaView>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: "#fefefe",
    padding: 20,
  },
  headerText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    // height: 40,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 20,
    padding: 10,
  },
  listContainer: {
    // borderColor: "red",
    // borderWidth: 2,
    marginTop: 20,
  },
  listItem: {
    borderColor: "#999",
    borderWidth: 2,
    marginTop: 10,
    padding: 10,
  },
  addButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    borderColor: "blue",
    backgroundColor: "blue",

    borderWidth: 2,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 40,
    width: 120,
    marginTop: 20,
    textAlign: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: 500,
  },
});
