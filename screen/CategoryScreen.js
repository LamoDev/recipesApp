import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/category";


function CategoryScreen({navigation}) {

    function renderCategoryItem(itemData) {

        function pressHandler(){
            navigation.navigate("Meals" , {
                CategoryId: itemData.item.id,
            });
        }
      return <CategoryGridTile title={itemData.item.title} onPress={pressHandler} />;
    }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}

    />
  );
}

export default CategoryScreen;
