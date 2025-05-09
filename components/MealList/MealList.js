import { View, FlatList , StyleSheet} from "react-native";
import MealItem from "./MealItem";

function MealsList({items}){
    
    function renderMealItem(itemData) {
        const item = itemData.item;
    
        const mealItemProps = {
          id : item.id,
          title: item.title,
          imgUrl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        };
    
        // to distribute all the properties inside this object as props to the component
        return <MealItem {...mealItemProps}  />;
      }
    
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }



export default MealsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  