import React from "react";
import { graphql, Link } from "gatsby";

export default function LocationTemplate({ data }) {
  const location = data.sanityLocation;
  console.log("<<<<<", location);

  return (
    <main>
      <div>
        <h1>This is the location page for {location.city}</h1>
        <Link to="/locations">Back to all locations</Link>
      </div>
    </main>
  );
}

export const query = graphql`
  query ($slug: String!) {
    sanityLocation(slug: { current: { eq: $slug } }) {
      id
      city
    }
  }
`;
