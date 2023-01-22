import "./style.css";
import { accessoryItems } from "./accessory-constants";

export default function Accessories() {
  return (
    <div className="main accessories">
      <h1>Accessories</h1>
      <hr />

      <h3>All you need to enhance the quality of your journey</h3>

      <div className="row">
        {accessoryItems.map((item, index) => {
          const { imageSource, alt, name, features } = item;
          return (
            <div className="column" key={index}>
              <div className="content">
                <img src={imageSource} alt={alt} style={{ width: "100%" }} />
                <h4>{name}</h4>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
