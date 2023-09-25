import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import AppFunction from "./_01_functions_solution/AppFunction";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.globalTitle}>Birthdays Reminder</Text>
        <AppFunction />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1f7a1f",
    backgroundColor: "#dfdfdf",
  },

  globalTitle: {
    marginTop: 50,
    marginHorizontal: 15,
    textAlign: "center",
    fontSize: 24,
    color: "#1f7a1f",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
});
