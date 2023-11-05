import React from "react";
import MealsSummary from "./MealsSummary";
import AvilableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary/>
      <AvilableMeals/>
    </React.Fragment>
  );

};

export default Meals;