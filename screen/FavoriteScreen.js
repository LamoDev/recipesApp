import { StyleSheet , View ,Text } from "react-native"
import { useContext } from "react";
import MealsList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";


function FavoriteScreen(){
   
    const favoriteMealsCtx=useContext(FavoritesContext);

    const favoriteMeal = MEALS.filter((meal)=> favoriteMealsCtx.ids.includes(meal.id))
   
    if(favoriteMeal.length=== 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet! </Text>
        </View>
    }
   
    return <MealsList items={favoriteMeal} />

}

export default FavoriteScreen ;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1 ,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        color:"#556e58",
        fontWeight:'bold'
    }
    



})