import "./style.css";
import BackgroundImg from "../../components/background";

export default function About() {
  return (
    <>
      <BackgroundImg />
      <div className="bg-text">
        <h1> Store Information </h1>

        <p>
          {" "}
          Address: 70 Elgar Road, Deakin University, Burwood, VIC, 3125,
          Australia
        </p>
        <p> Email: 5008741@deakincollege.edu.au </p>
        <p> Phone Number: 0424703231</p>
        <p> Opening hours:10 am to 6pm</p>
      </div>
    </>
  );
}
