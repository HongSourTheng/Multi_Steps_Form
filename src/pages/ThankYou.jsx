import thankyou_icon from "../assets/img/7.svg";

const ThankYou = () => {
  return (
    <div className="right-box">
      <div className="thanks-box">
        <img src={thankyou_icon} alt="thanks" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have <br /> fun using
          our platform. If you ever need support, please feel <br /> free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
