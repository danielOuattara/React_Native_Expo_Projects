import { StyleSheet, Text, View } from "react-native";

export default function Error({ errorMessage }) {
  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Text style={styles.h2}>{errorMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {},
  title: {},
  h2: {},
});
