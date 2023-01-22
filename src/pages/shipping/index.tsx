import { useState } from "react";
import "./style.css";
import { countries as rawCountries } from "./countryData";
import { useEffect } from "react";

export default function Shipping() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const countries = rawCountries.map((c) => c.country);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);

  const handleSendShippingDetails = (e) => {
    e.preventDefault();
    if (!firstName.trim()) {
      alert("First name cannot be blank!");
      return;
    }

    if (!lastName.trim()) {
      alert("Last name cannot be blank!");
      return;
    }

    if (!address.trim()) {
      alert("Address cannot be blank!");
      return;
    }

    if (!selectedCountry) {
      alert("You must select a country");
      return;
    }

    if (!city.trim()) {
      alert("City cannot be blank!");
      return;
    }

    if (!zipcode.trim()) {
      alert("You must provide a zipcode!");
      return;
    }

    alert("Your shipping details have been successfully registered");
  };

  useEffect(() => {
    if (selectedCountry) {
      const updatedStates = rawCountries.find(
        (c) => c.country === selectedCountry
      )?.states;
      setStates(updatedStates);
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  return (
    <div className="container shipping">
      <h1>Shipping</h1>
      <p>Please enter your shipping details.</p>
      <hr />
      <div className="form">
        <div className="fields fields--2">
          <label className="field">
            <label className="field__label" htmlFor="firstname">
              First name
            </label>
            <input
              className="field__input"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="field">
            <label className="field__label" htmlFor="lastname">
              Last name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="field__input"
              type="text"
            />
          </label>
        </div>
        <label className="field">
          <label className="field__label" htmlFor="address">
            Address
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="field__input"
            type="text"
            id="address"
          />
        </label>
        <label className="field">
          <label className="field__label" htmlFor="country">
            Country
          </label>

          <select
            className="field__input"
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option selected value=""></option>
            {countries.map((country, index) => (
              <option
                key={index}
                value={country}
                selected={selectedCountry === country}
              >
                {country}
              </option>
            ))}
          </select>
        </label>
        <div className="fields fields--3">
          <label className="field">
            <label className="field__label" htmlFor="state">
              State
            </label>
            <select className="field__input" id="state">
              {states.length > 0 &&
                states.map((state, index) => (
                  <option
                    key={index}
                    value={state}
                    selected={state === selectedState}
                  >
                    {state}
                  </option>
                ))}
            </select>
          </label>

          <label className="field">
            <label className="field__label" htmlFor="city">
              City
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="field__input"
              type="text"
              id="city"
            />
          </label>

          <label className="field">
            <label className="field__label" htmlFor="zipcode">
              Zip code
            </label>
            <input
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              className="field__input"
              type="number"
              id="zipcode"
            />
          </label>
        </div>
      </div>
      <hr />
      <button className="shipping-button" onClick={handleSendShippingDetails}>
        Continue
      </button>
    </div>
  );
}
