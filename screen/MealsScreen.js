import { View, Text, FlatList, StyleSheet } from "react-native";
import {useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsScreen({ route, navigation }) {

  const catId = route.params.CategoryId;

  const displayedMeals = MEALS.filter((MealItem) => {
    return MealItem.categoryId == catId;
  });


  useLayoutEffect(() => {
    const catName = CATEGORIES.find((Category) => catId === Category.id).title;

    navigation.setOptions({
      title: catName,
    });
  }, [catId,navigation]);

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
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
