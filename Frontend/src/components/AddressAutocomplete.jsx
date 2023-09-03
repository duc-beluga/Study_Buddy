import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"; // Import geocoder styles
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

const AddressAutocomplete = ({ setLati, setLong }) => {
  const geocoderContainerRef = useRef(null); // Ref for the geocoder container
  const mapboxAccessToken =
    "pk.eyJ1IjoibmhhdG5naGlobyIsImEiOiJja3lxOGY4MmswaGg2MnBudXh1YTU2N3gwIn0.yBNuI6sTbLBiVYgeetvoGA";

  useEffect(() => {
    mapboxgl.accessToken = mapboxAccessToken;

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxAccessToken,
      mapboxgl: mapboxgl,
      countries: "us",
    });

    geocoder.on("result", (e) => {
      const coordinates = e.result.center;
      const latitude = coordinates[1];
      const longitude = coordinates[0];
      setLati(latitude);
      setLong(longitude);

      // You can use the latitude and longitude as needed, e.g., for further actions or storing in your state.
    });

    // Attach the geocoder to the geocoder container
    if (geocoderContainerRef.current) {
      geocoderContainerRef.current.appendChild(geocoder.onAdd());
    }

    // Clean up when the component unmounts
    return () => {
      if (geocoderContainerRef.current) {
        geocoderContainerRef.current.innerHTML = ""; // Clear the geocoder container
      }
    };
  }, []);

  return (
    <div>
      <div ref={geocoderContainerRef}></div>
    </div>
  );
};

export default AddressAutocomplete;
