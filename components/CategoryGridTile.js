import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
} from "react-native";

import {useNavigation} from '@react-navigation/native'
import ContainerShadow from "./ContainerShadow";

function CategoryGridTile({ title, onPress }) {
    
  const navigation=useNavigation();

  let imageUrl = null;

  if (title == "Breakfast") {
    imageUrl = require("../assets/images/BreackFast.png");
  } else if (title == "Lunch") {
    imageUrl = require("../assets/images/Lunch.png");
  } else if (title == "Dinner") {
    imageUrl = require("../assets/images/dinner.png");
  } else {
    imageUrl = require("../assets/images/desserts.png");
  }

  return (
    <ContainerShadow>
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageUrl} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
    </ContainerShadow>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 200,
    borderRadius: 8,
    // elevation: 4,
    // shadowColor: "black",
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    // // the ripple effect goes out of the container a little bit
    // overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#d0dfd6",
    // backgroundColor:'white',
    padding: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#556e58",
  },
  imageContainer: {},
  image: {
    width: 180,
    height: 150,
    borderRadius: 20,
  },
});
