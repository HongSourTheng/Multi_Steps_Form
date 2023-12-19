import React from "react";
import { useGlobalPlansContext } from "../contexts/PlansContext";
import { useGlobalAddOnsContext } from "../contexts/AddOnsContext";
import { useNavigate, useParams } from "react-router-dom";
const Summary = () => {
  const navigate = useNavigate();
  const { selectedMonthlyPlan, selectedYearlyPlan } = useGlobalPlansContext();
  const { selectedAddOnsValueMonth, selectedAddOnsValueYear } =
    useGlobalAddOnsContext();
  const { sumType } = useParams();
  const selectedValueMY =
    sumType === "yearly" ? selectedYearlyPlan : selectedMonthlyPlan;
  const selectAddOnsValueMY =
    sumType === "yearly" ? selectedAddOnsValueYear : selectedAddOnsValueMonth;
  const totalAmount =
    selectedValueMY.reduce((acc, plan) => acc + plan.price, 0) +
    selectAddOnsValueMY.reduce((acc, addon) => acc + addon.price, 0);
  function handleConfirm() {
    if (selectedValueMY.length > 0 || selectAddOnsValueMY.length > 0) {
      navigate("/thankyou");
    } else {
      alert("something wrong! Please click on words Go Back.");
    }
  }
  return (
    <div className="right-box">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      {/* Error temporary */}
      <div className="summary-box">
        {selectedValueMY.map((e) => {
          return (
            <div className="select-title-box" key={e.id}>
              <div className="select-title">
                <h1>
                  {e.title} {sumType === "yearly" ? "(Yearly)" : "(Monthly)"}
                </h1>
                <a href="/selectplan">Change</a>
              </div>
              <span>
                ${e.price}/{sumType === "yearly" ? "yr" : "mo"}
              </span>
            </div>
          );
        })}

        <hr className="btnHR" />
        {selectAddOnsValueMY.map((e) => {
          return (
            <div className="addons-title-box" key={e.id}>
              <p>{e.value}</p>
              <span>
                +${e.price}/{sumType === "yearly" ? "yr" : "mo"}
              </span>
            </div>
          );
        })}
      </div>
      <div className="total-box">
        <p>Total {sumType === "yearly" ? "(per year)" : "(per month)"}</p>
        <span>
          ${totalAmount}/{sumType === "yearly" ? "yr" : "mo"}
        </span>
      </div>
      <div className="step-box">
        <button
          className="btn-back"
          type="submit"
          onClick={() => navigate("/addons")}
        >
          Go Back
        </button>
        <button className="btn-next-2" type="submit" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
