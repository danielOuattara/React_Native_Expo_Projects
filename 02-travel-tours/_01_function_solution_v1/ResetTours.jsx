import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function ResetTours({ fetchTours }) {
  return (
    <View style={styles.refresh}>
      <Text>functions solution</Text>
      <Text style={styles.h2}>no tour left</Text>
      <Pressable style={styles.refresh_btn} onPress={fetchTours}>
        <Text>refresh</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  refresh: {
    alignContent: "center",
    justifyContent: "center",
  },
  h2: {},
  refresh_btn: {},
});
