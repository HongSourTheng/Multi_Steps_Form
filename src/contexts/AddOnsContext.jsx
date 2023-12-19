import { createContext, useContext, useState } from "react";

const GlobalAddOnsContext = createContext();
export const useGlobalAddOnsContext = () => useContext(GlobalAddOnsContext);
const AddOnsContext = ({ children }) => {
  const [addOnsMonth, setAddOnsMonth] = useState([
    {
      id: 1,
      value: "Online service",
      desc: "Acces to multiplayer games",
      price: 1,
    },
    {
      id: 2,
      value: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      value: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
    },
  ]);
  const [addOnsYear, setAddOnsYear] = useState([
    {
      id: 1,
      value: "Online service",
      desc: "Acces to multiplayer games",
      price: 10,
    },
    {
      id: 2,
      value: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 20,
    },
    {
      id: 3,
      value: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 20,
    },
  ]);
  const [selectedAddOnsValueMonth, setSelectedAddOnsValueMonth] = useState([]);
  const [selectedAddOnsValueYear, setSelectedAddOnsValueYear] = useState([]);
  return (
    <GlobalAddOnsContext.Provider
      value={{
        addOnsMonth,
        setAddOnsMonth,
        selectedAddOnsValueMonth,
        setSelectedAddOnsValueMonth,
        selectedAddOnsValueYear,
        setSelectedAddOnsValueYear,
        addOnsYear,
        setAddOnsYear,
      }}
    >
      {children}
    </GlobalAddOnsContext.Provider>
  );
};

export default AddOnsContext;
