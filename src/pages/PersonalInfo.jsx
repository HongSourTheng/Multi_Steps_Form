import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [isName, setName] = useState("");
  const [isEmail, setEmail] = useState("");
  const [isNumber, setNumber] = useState("");

  const [isValidName, setValidName] = useState(false);
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidNumber, setValidNumber] = useState(false);

  const formRef = useRef(null);
  const inputRef = useRef(null);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    formRef.current.submit;

    if (isName === "") {
      setValidName(true);
    } else {
      setValidName(false);
    }
    if (isEmail === "" || !emailRegex.test(isEmail)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    if (isNumber === "") {
      setValidNumber(true);
    } else {
      setValidNumber(false);
    }

    if (isName !== "" && isEmail !== "" && isNumber !== "") {
      if (emailRegex.test(isEmail)) {
        navigate("selectplan");
      }
    }
  }
  function handleChange(e) {
    setEmail(e.target.value);
    if (e.target.value === "" || emailRegex.test(e.target.value)) {
      setValidEmail(false); // Valid email or empty, so set isValid to false
    } else {
      setValidEmail(true); // Invalid email, so set isValid to true
    }
  }

  function phoneNumber(e) {
    const inputNumber = e.target.value.replace(/[^0-9]/g, "");
    const formattedNumber = formatPhoneNumber(inputNumber);
    setNumber(formattedNumber);
  }

  function formatPhoneNumber(value) {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d+]/g, "");
    const hasPlusSign = phoneNumber.startsWith("+");

    if (hasPlusSign) {
      phoneNumber = phoneNumber.slice(1);
    }

    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return `+${phoneNumber}`;

    if (phoneNumberLength < 7) {
      return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    } else if (phoneNumberLength < 10) {
      return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6)}`;
    } else if (phoneNumberLength < 13) {
      return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 9)}-${phoneNumber.slice(9)}`;
    } else {
      // If you have more than 13 digits, you can adjust the formatting accordingly
      return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 9)}-${phoneNumber.slice(
        9,
        12
      )}-${phoneNumber.slice(12)}`;
    }
  }

  return (
    <div className="right-box">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <form action="" ref={formRef}>
        <div className="form-box">
          {isValidName ? (
            <span className="invalid">This field is required</span>
          ) : null}
          <label htmlFor="">Name</label>
          <input
            ref={inputRef}
            style={{
              border: isValidName
                ? "1px solid red"
                : "1px solid var(--cool-gray)",
            }}
            type="text"
            name=""
            id=""
            maxLength={35}
            placeholder="e.g. Stephen King"
            value={isName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-box">
          {isValidEmail ? (
            <span className="invalid">This field is required</span>
          ) : null}
          <label htmlFor="">Email Address</label>

          <input
            style={{
              border: isValidEmail
                ? "1px solid red"
                : "1px solid var(--cool-gray)",
            }}
            type="text"
            name=""
            id=""
            maxLength={50}
            placeholder="e.g. stephenking@lorem.com"
            value={isEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          {isValidNumber ? (
            <span className="invalid">This field is required</span>
          ) : null}
          <label htmlFor="">Phone Number</label>
          <input
            style={{
              border: isValidNumber
                ? "1px solid red"
                : "1px solid var(--cool-gray)",
            }}
            type="text"
            name=""
            id=""
            maxLength={16}
            placeholder="e.g. +855 234 567 890"
            value={isNumber}
            onChange={phoneNumber}
          />
        </div>
      </form>

      <div className="step-box">
        {/* <div className="btn-back">
          <a href="#">Go Back</a>
        </div> */}
        <h1></h1>
        <button className="btn-next" type="submit" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
