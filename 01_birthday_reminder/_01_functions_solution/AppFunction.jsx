import { useState } from "react";
import data from "../data";
import List from "./List";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function AppFunction() {
  const [people, setPeople] = useState(data);

  const handleRemoveOnePerson = (id) =>
    setPeople(() => people.filter((person) => person.id !== id));
  const handleEmpty = () => setPeople(() => []);
  const handleRefresh = () => setPeople(() => data);

  return (
    <View style={styles.appFunction}>
      <Text style={styles.header}>functional component</Text>

      {people.length > 1 && (
        <Text style={styles.title}>{people.length} friends to contact</Text>
      )}

      {(people.length === 1 || people.length === 0) && (
        <Text style={styles.title}>{people.length} friend to contact</Text>
      )}

      <List
        people={people}
        handleRemoveOnePerson={handleRemoveOnePerson}
        style={styles.list}
      />

      {people.length !== 0 && (
        <Pressable onPress={handleEmpty}>
          <Text style={styles.action}>Clear All</Text>
        </Pressable>
      )}

      {people.length === 0 && (
        <Pressable onPress={handleRefresh}>
          <Text style={styles.action}>Refresh</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appFunction: {
    padding: 30,
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "#fff",
  },

  header: {
    textTransform: "capitalize",
    borderLeftWidth: 10,
    paddingLeft: 15,
    borderLeftColor: "#1f7a1f",
    fontSize: 22,
    color: "#1f7a1f",
  },

  title: {
    color: "#1f7a1f",
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    textTransform: "capitalize",
  },
  action: {
    backgroundColor: "#1f7a1f",
    color: "#fff",
    textAlign: "center",
    padding: 8,
    borderRadius: 6,
    fontSize: 18,
    marginTop: 30,
  },
});
