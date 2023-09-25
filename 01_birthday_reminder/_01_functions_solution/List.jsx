import { Button, Image, StyleSheet, Text, View, FlatList } from "react-native";

export default function FriendsList({ people, handleRemoveOnePerson }) {
  return (
    <>
      {people.map((person) => (
        <View key={person.id} style={styles.person}>
          <Image
            source={{ uri: person.image }}
            alt={person.name}
            style={styles.picture}
          />
          <View style={styles.personData}>
            <View>
              <Text style={styles.name}>{person.name}</Text>
              <Text style={styles.age}>{person.age} years</Text>
            </View>
            <Button
              onPress={() => handleRemoveOnePerson(person.id)}
              className="btn_styled"
              title="Event Finished"
              color={"#1f7a1f"}
            />
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  person: {
    // flex: 1,
    flexDirection: "row",
    // paddingVertical: 15,
    justifyContent: "space-between",
    alignContent: "center",
    borderBottomWidth: 1,
    borderWidth: 1,
    // borderColor: "#1f7a1f",
    borderColor: "#d4d4d4",
    borderRadius: 8,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  personData: {
    flexDirection: "column",
    justifyContent: "space-around",
  },

  personInfo: {},

  picture: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
  },
  age: {
    fontSize: 16,
    margin: 5,
  },
});
