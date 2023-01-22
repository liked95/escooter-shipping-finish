import "./style.css";
import { initScooters } from "./escooter-constants";
import { useEffect, useState } from "react";

interface IFilterButton {
  content: string;
  filter: string;
  action?: () => void;
}

const filterButtons: IFilterButton[] = [
  { content: "Show all", filter: "" },
  { content: "Air-balance", filter: "air-balance" },
  { content: "Electric Kick", filter: "electric-kick" },
  { content: "Seated Electric Scooters", filter: "seated-electric-scooter" }
];

export default function Escooter() {
  const [scooters, setScooters] = useState<Array<any>>(initScooters);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    // if filter is not all or an empty string
    if (filter) {
      let filteredScooters = initScooters.filter(
        (item) => item.type === filter
      );
      setScooters(filteredScooters);
    } else {
      // if the filter is all then set scooters to initial value
      setScooters(initScooters);
    }
  }, [filter]);

  return (
    <>
      <div className="scooter-bg"></div>
      <h2 style={{ textAlign: "center" }}>Scooter Gallery</h2>

      <div id="myBtnContainer">
        {filterButtons.map((button, index) => (
          <button
            key={index}
            className={`btn ${button.filter === filter ? "active" : ""}`}
            onClick={() => setFilter(button.filter)}
          >
            {button.content}
          </button>
        ))}
      </div>

      <div className="row">
        {scooters.map((scooter, index) => {
          const { imageSource, alt, name, features } = scooter;
          return (
            <div className="column" key={index}>
              <div className="content">
                <img src={imageSource} alt={alt} style={{ width: "100%" }} />
                <h4>{name}</h4>
                <ul>
                  {features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
