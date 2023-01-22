import "./index.css";
import { navItems } from "./header-constants";
import { NavLink } from "react-router-dom";

interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div id="div107" className="topnav">
      {navItems.map((item, index) => (
        <NavLink key={index} to={item.link}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
