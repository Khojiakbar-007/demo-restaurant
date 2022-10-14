import "./App.css";
import Header from "./components/header.component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import CartPage from "./pages/cartpage.component";
import MealDescriptionPage from "./pages/meal-description-page/meal-description-page.component";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/meals/:mealId" element={<MealDescriptionPage />} />
      </Routes>
    </div>
  );
}

export default App;
