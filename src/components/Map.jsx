import React from "react";

function Map() {
  return (
      <div className="map"
        style={{
          overflow: "hidden",
          resize: "none",
          maxWidth: "100%",
          width: "900px",
          height: "400px",
        }}
      >
        <div
          id="display-google-map"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            title="location-map"
            style={{ height: "100%", width: "100%", border: 0 }}
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Bakery+Square,+Penn+Avenue,+Pittsburgh,+PA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
        <a
          class="embedded-map-code"
          href="https://www.bootstrapskins.com/themes"
          id="auth-map-data"
        >
        </a>
      </div>
  );
}

export default Map;
