import "./style.css";
import BackgroundImg from "../../components/background";

export default function Home() {
  return (
    <>
      <BackgroundImg />
      <div className="top-left"> JAMES E-Scooter</div>
      <div className="bottom-left">
        THE METHOD OF TRANSPORT FOR THE CITY
        <p>more stable, more convinience and safer</p>
      </div>
    </>
  );
}
