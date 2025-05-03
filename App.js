import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from "./screen/CategoryScreen";
import MealsScreen from "./screen/MealsScreen";
import MealDetailsScreen from "./screen/MealDetailsScreen";
import {createDrawerNavigator} from '@react-navigation/drawer'
import FavoriteScreen from "./screen/FavoriteScreen";
import IconButton from "./components/IconButton";
import {Ionicons} from '@expo/vector-icons'

// object with two properties , each holds a object that acts as component
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator() ;

function DrawerNavigator(){
  return <Drawer.Navigator screenOptions=
    {{
      headerTintColor:"#d0dfd6"   ,
       headerStyle:{ 
        backgroundColor: "#556e58",   
    },
    drawerStyle:{
    backgroundColor:'#d0dfd6',
    },
     drawerActiveTintColor:"#d0dfd6",
    drawerActiveBackgroundColor:'#556e58'
  }}
 >
    <Drawer.Screen name="Categories" component={CategoryScreen}
    options={{
      drawerIcon:({color , size})=>(
        <Ionicons color={color} size={size} name="list"/> 
     
      )

      
    }} />
    <Drawer.Screen name="Favorite" component={FavoriteScreen}
        options={{
          drawerIcon:({color , size})=>(
            <Ionicons color={color} size={size} name="heart"/> 
         
          )}}
     />

  </Drawer.Navigator>
}


export default function App() {
  return (
    <ImageBackground style={styles.container} resizeMode='cover' source={require("./assets/images/RecipeBookCover.png")}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor:"#d0dfd6"   ,
           headerStyle:{ 
            backgroundColor: "#556e58",   
        }}}>
          <Stack.Screen  name="Drawer" component={DrawerNavigator} 
           options={{
            headerShown:false
           }}/>
          <Stack.Screen  name="Meals" component={MealsScreen}/>
          <Stack.Screen  name="Meal"  component={MealDetailsScreen} options={{
            title:'About the Meal',
            headerRight: ()=>{
             return <Button title='tap me !' />
            }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
