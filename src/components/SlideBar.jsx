import { NavLink } from "react-router-dom";
import { data } from "../constants/data";
const SlideBar = () => {
  return (
    <div className="slide-bar">
      <div className="img-box">
        {data.map((e) => {
          return (
            <div className="item-box" key={e.id}>
              <ul>
                <li>
                  <NavLink to={e.linkTo}>{e.id}</NavLink>
                </li>
              </ul>
              <div className="txt-box">
                <span>{e.step}</span>
                <h3>{e.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideBar;
