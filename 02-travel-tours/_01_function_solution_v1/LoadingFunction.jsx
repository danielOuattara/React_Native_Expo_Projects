import { StyleSheet, Text, View } from "react-native";

export default function LoadingFunction() {
  return (
    <View style={styles.loading}>
      <Text style={styles.h1}>loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {},
  loading: {
    padding: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  h1: {
    fontSize: 30,
  },
});
