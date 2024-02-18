import React, { useState, useEffect } from "react";

const Location = ({ UserLocation }) => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [isRetrievingLocation, setIsRetrievingLocation] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords.latitude + "," + position.coords.longitude);
        setIsRetrievingLocation(false); // Location retrieval is complete
      },
      (error) => {
        setError(error.message);
        setIsRetrievingLocation(false); // Location retrieval is complete (with error)
      }
    );
  }, []);

  useEffect(() => {
    // Check if UserLocation is a function before calling it
    if (typeof UserLocation === "function") {
      UserLocation(location);
    }
  }, [location, UserLocation]);

  return (
    <div>
      {isRetrievingLocation && <p>Retrieving location...</p>}
      {error && <p>Error retrieving location: {error}</p>}
    </div>
  );
};

export default Location;
