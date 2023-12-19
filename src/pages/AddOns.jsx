import React, { useEffect, useState } from "react";
import { useGlobalAddOnsContext } from "../contexts/AddOnsContext";
import { useNavigate, useParams } from "react-router-dom";

const AddOns = () => {
  const { planType } = useParams();
  const navigate = useNavigate();
  const [checkedState, setCheckedState] = useState({});
  const {
    addOnsMonth,
    setAddOnsMonth,
    selectedAddOnsValueMonth,
    setSelectedAddOnsValueMonth,
    addOnsYear,
    setAddOnsYear,
    selectedAddOnsValueYear,
    setSelectedAddOnsValueYear,
  } = useGlobalAddOnsContext();
  const selectedAddOnsArray = planType === "yearly" ? addOnsYear : addOnsMonth;
  const handleMainBoxClick = (id) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    if (planType === "yearly") {
      handleChangeYear(null, id);
    } else {
      handleChangeMonth(null, id);
    }
  };
  const handleChangeMonth = (e, id) => {
    setSelectedAddOnsValueMonth((prev) => [
      ...prev,
      addOnsMonth.find((addOn) => addOn.id === id),
    ]);
    setSelectedAddOnsValueYear([]);
    
  };
  const handleChangeYear = (e, id) => {
    setSelectedAddOnsValueYear((prev) => [
      ...prev,
      addOnsYear.find((addOn) => addOn.id === id),
    ]);
    setSelectedAddOnsValueMonth([]);
  };

  // useEffect(() => {
  //   console.log(selectedAddOnsValueMonth);
  //   console.log(selectedAddOnsValueYear);
  // }, [selectedAddOnsValueMonth,selectedAddOnsValueYear]);

  const handleSumbit = (e) => {
    e.preventDefault();
    
    if (
      selectedAddOnsValueMonth.length > 0 ||
      selectedAddOnsValueYear.length > 0
    ) {
      navigate(`/summary/${planType}`);
    } else {
      alert("Please choose any option.");
    }
  };
  const borderStyleMainBox = {
    backgroundColor: " hsla(229, 24%, 87%, 0.766)",
    border: "1px solid hsl(243, 100%, 62%)",
  };
  return (
    <div className="right-box">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <form action="" onSubmit={handleSumbit}>
        {selectedAddOnsArray.map((e, idx) => {
          const isChecked = checkedState[e.id] || false;
          return (
            <div
              key={e.id}
              className="main-box"
              htmlFor="check"
              onClick={() => handleMainBoxClick(e.id)}
              style={checkedState[e.id] ? borderStyleMainBox : null}
            >
              <div className="check-box">
                <input
                  type="checkbox"
                  name=""
                  id={`check-${e.id}`}
                  // id="check"
                  onChange={(e) => handleMainBoxClick(e.id)}
                  checked={isChecked}
                />
              </div>
              <div className="details-box">
                <h2>{e.value}</h2>
                <p>{e.desc}</p>
              </div>
              <div className="price-box">
                <span>+${e.price}/mo</span>
              </div>
            </div>
          );
        })}

        <div className="step-box">
          <button
            className="btn-back"
            type="submit"
            onClick={() => navigate("/selectplan")}
          >
            Go Back
          </button>
          <button className="btn-next" type="submit">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOns;
