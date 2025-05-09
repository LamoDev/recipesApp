import {useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealList/MealList";

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

  return <MealsList items={displayedMeals} />

}



export default MealsScreen;

