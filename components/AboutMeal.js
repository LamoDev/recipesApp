import { View, Text , StyleSheet } from "react-native";
import IconButton from "./IconButton";
import {Ionicons} from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
function AboutMeal({ duration , complexity , affordability}) {
  return (
    <View style={styles.details}>
      <View  style={styles.detailContainer}>
      <MaterialCommunityIcons name="timetable" size={16} color="#556e58" />
      <Text style={styles.detailsItem}>
        {duration}m </Text>
      </View>

      <View  style={styles.detailContainer}>
      <Foundation name="clipboard-notes" size={16} color="#556e58"/>
      <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>

      </View>
      <View style={styles.detailContainer}>
      <FontAwesome name="money" size={16} color="#556e58"/>
      <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
}

export default AboutMeal;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,

     
      },
      detailsItem: {
        fontSize: 14,
        color: "#556e58",
        marginHorizontal: 4,
       
      },
      detailContainer:{
        flexDirection:'row',
        alignItems: "center",
        justifyContent:'space-between',
        marginHorizontal: 10,

      }

})


