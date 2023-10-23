import TourItemFunction from "./TourItemFunction";
import { StyleSheet, Text, View } from "react-native";

export default function ToursFunction({ tours, removeTourItem }) {
  return (
    <View style={styles.section}>
      <View style={styles.title}>
        <Text>functions solution</Text>
        <Text style={styles.h2}>our tours</Text>
        <View style={styles.underline}></View>
        <View>
          {tours.map((item) => (
            <TourItemFunction
              key={item.id}
              {...item}
              removeTourItem={removeTourItem}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 30,
    borderRadius: 6,
    backgroundColor: "#aed",
    padding: 20,
  },
  title: {},
  h2: {},
  underline: {},
});
