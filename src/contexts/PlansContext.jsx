import React, { createContext, useContext, useState } from "react";
import arcade from "../assets/img/5.svg";
import advanced from "../assets/img/3.svg";
import pro from "../assets/img/6.svg";
const GlobalPlansContext = createContext();
export const useGlobalPlansContext = () => useContext(GlobalPlansContext);
const PlansContext = ({ children }) => {
  const [monthlyPlans, setMonthlyPlans] = useState([
    {
      id: 1,
      img: arcade,
      title: "Arcade",
      price: 9,
    },
    {
      id: 2,
      img: advanced,
      title: "Advanced",
      price: 12,
    },
    {
      id: 3,
      img: pro,
      title: "Pro",
      price: 15,
    },
  ]);

  const [yearlyPlans, setYearlyPlans] = useState([
    {
      id: 4,
      img: arcade,
      title: "Arcade",
      price: 90,
      extra: "2 months free",
    },
    {
      id: 5,
      img: advanced,
      title: "Advanced",
      price: 120,
      extra: "2 months free",
    },
    {
      id: 6,
      img: pro,
      title: "Pro",
      price: 150,
      extra: "2 months free",
    },
  ]);
  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState([]);

  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState([]);

  return (
    <GlobalPlansContext.Provider
      value={{
        monthlyPlans,
        setMonthlyPlans,
        yearlyPlans,
        setYearlyPlans,
        selectedMonthlyPlan,
        setSelectedMonthlyPlan,
        selectedYearlyPlan,
        setSelectedYearlyPlan,
      }}
    >
      {children}
    </GlobalPlansContext.Provider>
  );
};

export default PlansContext;
