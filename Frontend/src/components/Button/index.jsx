import { Link } from "react-router-dom";
import "./style.css";

export const Button = ({children, link=true, cls, url="#", colorful=false, h="40px"}) => {
  const btnStyle = colorful ? "btn-colored " : "btn-outlined ";
  return (
    <button className={btnStyle + " " + cls} style={{height: h}} >
      {link ? <Link to={url} style={{padding: "8px 28px"}} >{children}</Link> : children}
    </button>);
};
