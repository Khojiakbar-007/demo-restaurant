import React from "react";
import MealCard from "../components/meal-card.component";
import { useSelector } from "react-redux";

const HomePage = () => {
  const mealsList = useSelector((state) => state.shop.mealsList);
  return (
    <>
      <section className="showcase container-fluid">
        <h1>Доставка ВКУСНЕЙШИХ БЛЮД за 60 минут</h1>
      </section>

      <section className="menu container-fluid">
        <h2>Мясные блюда</h2>

        <div className="cards-container">
          {Object.values(mealsList).map((meal) => (
            <MealCard mealInfo={meal} key={meal.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
