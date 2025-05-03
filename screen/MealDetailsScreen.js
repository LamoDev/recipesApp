import { View, Text, Image, StyleSheet, ScrollView , Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import AboutMeal from "../components/AboutMeal";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";


// route props gives access to params that were set for this route
function MealDetailsScreen({ route , navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => mealId === meal.id);


  function headerButtonPressHandler(){
    console.log('hello ')
  }



  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: ()=>{
            return <IconButton onPress={headerButtonPressHandler} icon="heart" color="#fcd5ce"/>
        }
    })

  }, [headerButtonPressHandler ,navigation])

  return (
    
   <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <AboutMeal
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
        <Subtitle>Ingredients :</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Ingredients :</Subtitle>
        <List data={selectedMeal.steps} />
        </View>
        </View>

      </View>
    </ScrollView>
 
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
rootContainer:{
    backgroundColor: "#d0dfd6",
    flex:1,
    marginBottom:24
},

// Add some bottom raduis
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#556e58",
  },
  listOuterContainer:{
    alignItems:'center'


  },

  listContainer:{
    width:'80%',

  }
});
