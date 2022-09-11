import React from "react";
import "./Description.css";
import Profile from "./Profile";

function Description() {
  const activities = [
    "Shooting",
    "Eating",
    "Killing",
    "Fireplace",
    "Studio",
    "Fishing",
  ];
  return (
    <div className="description">
      <div className="text-description">
      <h1>Allowable Activities:</h1>
      <div className="activities">
        {activities.map((activity) => {
          return <button type="button">{activity}</button>;
        })}
      </div>
      <div className="description-text-content">
        <h1>Space Description</h1>
        <p>
          Free to use this space as you like. Large, well furnished cottage
          overlooking the lake. Onsite kayaks and ATVs available, make sure you
          refuel the ATVs before returning them and add the stabilizer on the
          shelf to the gas. If you'd like to do anything else, please shoot me a
          request.
        </p>
        <h1>Arrival Instructions</h1>
        <p>
          Get in through the main gate, should have sign with my family name
          (Rothschilds) on a wooden sign. Leads to the cottage. Parking for 8
          cars.
        </p>
      </div>
      </div>
      <Profile/>
    </div>
  );
}

export default Description;
