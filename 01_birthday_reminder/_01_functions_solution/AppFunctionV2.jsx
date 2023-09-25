import { useState } from "react";
import data from "../data";
import List from "./List";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Image,
  Button,
} from "react-native";

//--------------------------------------------------------------------
export default function AppFunction() {
  const [people, setPeople] = useState(data);

  const handleRemoveOnePerson = (id) =>
    setPeople(() => people.filter((person) => person.id !== id));
  const handleEmpty = () => setPeople(() => []);
  const handleRefresh = () => setPeople(() => data);

  return (
    <View style={styles.appFunctionContainer}>
      <FlatList
        data={people}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.header}>functional component</Text>

            {people.length > 1 && (
              <Text style={styles.title}>
                {people.length} friends to contact
              </Text>
            )}

            {(people.length === 1 || people.length === 0) && (
              <Text style={styles.title}>
                {people.length} friend to contact
              </Text>
            )}
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            {people.length !== 0 && (
              <Pressable onPress={handleEmpty}>
                <Text style={styles.action}>Clear All</Text>
              </Pressable>
            )}
          </View>
        )}
        ListEmptyComponent={() => (
          <Pressable onPress={handleRefresh}>
            <Text style={styles.action}>Refresh</Text>
          </Pressable>
        )}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.singlePerson}>
              <Image
                source={{ uri: item.image }}
                alt={item.name}
                style={styles.picture}
              />
              <View style={styles.singlePersonData}>
                <Text>{item.name}</Text>
                <Text>{item.age} years</Text>
                <Button
                  onPress={() => handleRemoveOnePerson(item.id)}
                  className="btn_styled"
                  title="Event Finished"
                />
              </View>
            </View>
          );
        }}
      />

      {/* <List people={people} handleRemoveOnePerson={handleRemoveOnePerson} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appFunctionContainer: {
    padding: 25,
    margin: 20,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "red",
    // flex: 1,
  },

  header: {
    textTransform: "capitalize",
    borderLeftWidth: 15,
    paddingLeft: 25,
    borderLeftColor: "#1f7a1f",
    fontSize: 22,
    color: "#4e4e4e",
  },
  // header_info: {
  //   color: "#1f7a1f",
  //   textTransform: "capitalize",
  //   fontSize: 18,
  //   marginVertical: 10,
  // },

  title: {
    color: "#1f7a1f",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 20,
    textTransform: "capitalize",
  },

  action: {
    backgroundColor: "#1f7a1f",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    borderRadius: 6,
  },
  singlePerson: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
    alignContent: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
  },

  singlePersonData: {
    flexDirection: "column",
  },

  picture: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
});
