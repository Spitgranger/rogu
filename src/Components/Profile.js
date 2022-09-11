import React from "react";
import "./Profile.css";
import image from './assets/profile.jfif'
import {Icon} from '@iconify/react';
function Profile() {
  let textColor = {"color" : "grey"};
  return  (
  <div className="profile">
    <div className="profile-picture-container">
      <img className="profile-picture" src={image}/>
    </div>
    <h1>Jason Cartier</h1>
    <div className="profile-info">
      <div className="listing-number">
        <p>10</p>
        <p style={textColor}>Listings</p>
      </div>
      <div className="rating-number">
        <p>4.8<Icon icon="ant-design:star-outlined" inline={true}/></p>
        <p style={textColor}>155 Ratings</p>
      </div>
      <div className="guest-number">
        <p>805</p>
        <p style={textColor}>Guests</p>
      </div>
    </div>
    <div className="profile-location">
      <p><Icon icon="carbon:location-filled" inline={true} />
New York City, Sector 2: Bilionaire's Row</p>
    </div>
  </div>
  );
}

export default Profile;
