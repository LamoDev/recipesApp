import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";

import ContainerShadow  from "../components/ContainerShadow";
import { useNavigation } from "@react-navigation/native";
import AboutMeal from "./AboutMeal";


function MealItem({ id , title, imgUrl, duration, complexity, affordability }) {


const navigation=useNavigation()

function pressHandler(){
navigation.navigate('Meal' ,{
    mealId : id 
})
}

  return (
    <ContainerShadow>
      <View style={styles.mealItem}>
        <Pressable android_ripple={{ color: "#ccc" }}
            style={({pressed})=> pressed ? styles.pressedCard : null }
            onPress={pressHandler}>
          <View>
            <Image source={{ uri: imgUrl }} style={styles.image} />
            <Text style={styles.title} >{title}</Text>
          </View>
                <AboutMeal duration={duration} complexity={complexity}  affordability={affordability}/>
        </Pressable>
      </View>
    </ContainerShadow>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "#d0dfd6",
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    margin: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#556e58",
    textAlign: "center",
    marginBottom: 10,
  },
 
  pressedCard:{
    opacity:0.5,
  }
});
