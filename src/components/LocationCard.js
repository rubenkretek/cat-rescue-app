import React from "react";
import Card from "@mui/material/Card";

function LocationCard({ locationData }) {
  const { city, address1, address2, email, mapsURL, phone, postcode, county } =
    locationData;
  return (
    <Card component="li" sx={{ p: 2 }}>
      {city}
      {address1}
      {address2}
      {email}
      {mapsURL}
      {phone}
      {postcode}
      {county}
    </Card>
  );
}

export default LocationCard;
