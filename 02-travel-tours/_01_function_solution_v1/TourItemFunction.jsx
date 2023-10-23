import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";

export default function TourItemFunction({
  id,
  image,
  info,
  price,
  name,
  removeTourItem,
}) {
  const [readMore, setReadMore] = useState(false);

  return (
    <View style={styles.singleTour}>
      <Image
        style={styles.image}
        source={{ uri: image }}
        alt={`${name} description`}
      />
      <View style={styles.footer}>
        <View style={styles.tourInfo}>
          <Text style={styles.h4}>{name}</Text>
          <Text style={styles.tourPrice}>${price}</Text>
        </View>
        <Text>
          {readMore ? info : info.substring(0, 100) + " ..."}
          <Pressable onPress={() => setReadMore(!readMore)}>
            <Text>{readMore ? "show less" : "read more"}</Text>
          </Pressable>
        </Text>
        <Button
          style={styles.deleteBtn}
          title=" remove this tour"
          onPress={() => removeTourItem(id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  singleTour: {},
  image: {
    width: 370,
    height: 200,
  },
  footer: {},
  tourInfo: {},
  h4: {},
  tourPrice: {},
  deleteBtn: {},
});
