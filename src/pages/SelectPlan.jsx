import { useEffect, useState } from "react";
import { useGlobalPlansContext } from "../contexts/PlansContext";
import { useNavigate } from "react-router-dom";
const SelectPlan = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  const [toggleMY, setToggleMY] = useState(false);

  const {
    monthlyPlans,
    setMonthlyPlans,
    yearlyPlans,
    setYearlyPlans,
    selectedMonthlyPlan,
    setSelectedMonthlyPlan,
    selectedYearlyPlan,
    setSelectedYearlyPlan,
  } = useGlobalPlansContext();

  // set boolean true false toggle use previous state
  function handleToggleMY() {
    setToggleMY((prev) => !prev);
  }

  //get value title and price from array monthly
  const getMonthlyDetails = (id) => {
    // Use the plan directly
    setSelectedMonthlyPlan((prev) => [...prev, monthlyPlans[id]]);
    setSelectedYearlyPlan([]); // Clear yearly plan
    setNum(id + 1);
  };

  //get value title and price from array yearly
  const getYearlyDetails = (id) => {
    setSelectedYearlyPlan((prev) => [...prev, yearlyPlans[id]]);
    setMonthlyPlans([]);
   
    setNum(id + 1);
  };
  // useEffect(() => {
  //   // This block will run after setSelectedMonthlyPlan has updated
  //   console.log(selectedMonthlyPlan);
  //   console.log(selectedYearlyPlan);
  // }, [selectedMonthlyPlan, selectedYearlyPlan]);

  const handleSumbit = (event) => {
    event.preventDefault();
    if (selectedMonthlyPlan.length > 0 || selectedYearlyPlan.length > 0) {
      const planType = toggleMY ? "yearly" : "monthly";
      navigate(`/addons/${planType}`);
    } else {
      alert("Please choose a plan");
    }
  };
  const borderStyle = {
    backgroundColor: "hsla(229, 24%, 87%, 0.766)",
    border: "1px solid hsl(243, 100%, 62%)",
  };
  // You can add more style objects as needed

  return (
    <div className="right-box plan-box">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <form action="" onSubmit={handleSumbit}>
        <div
          className="select-box"
          style={{ display: toggleMY ? "none" : "flex" }}
        >
          {monthlyPlans.map((e, idx) => {
            return (
              <div
                className="group-box"
                key={e.id}
                onClick={() => getMonthlyDetails(idx)}
                //first 0 != 1 it's true then when user click  1 != 1 it's false (example base on index when use click)
                style={num !== idx + 1 ? null : borderStyle}
              >
                <div className="img-box">
                  <img src={e.img} alt={e.title} />
                </div>
                <div className="text-box">
                  <h1>{e.title}</h1>
                  <span>${e.price}/mo</span>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="select-box"
          style={{ display: toggleMY ? "flex" : "none" }}
        >
          {yearlyPlans.map((e, idx) => {
            return (
              <div
                className="group-box"
                key={e.id}
                onClick={() => getYearlyDetails(idx)}
                //first 0 != 1 it's true  then when user click 1 != 1 it's false (example base on index when use click)
                style={num != idx + 1 ? null : borderStyle}
              >
                <div className="img-box">
                  <img src={e.img} alt={e.title} />
                </div>
                <div className="text-box">
                  <h1>{e.title}</h1>
                  <span>${e.price}/yr</span>
                  <p>${e.extra}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="contain-box">
          <span
            style={{
              color: toggleMY ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)",
            }}
          >
            Monthly
          </span>
          <div className="toggle-box">
            <input type="checkbox" name="" id="check" />
            <label
              htmlFor="check"
              className="btn-toggle"
              onClick={handleToggleMY}
            ></label>
          </div>
          <span
            style={{
              color: toggleMY ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)",
            }}
          >
            Yearly
          </span>
        </div>
        <div className="step-box">
          <button
            className="btn-back"
            type="submit"
            onClick={() => navigate("/")}
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

export default SelectPlan;
