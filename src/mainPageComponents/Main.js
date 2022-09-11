import React from "react";
import Header from "../Components/Header";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
const center = { lat: 45.4042, lng: -75.6742 };

function Main() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <h1>LOADING</h1>;
  }
  return (
    <div>
      <Header />
      <div>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Main;
