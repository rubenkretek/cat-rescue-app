import * as React from "react";
import { Link } from "gatsby";

const Locations = () => {
  return (
    <main>
      <h1>This will eventually be a list of locations!</h1>
      <p>For now here are a couple hardcoded links:</p>
      <ul>
        <li>
          <Link to="/locations/london">London</Link>
        </li>
        <li>
          <Link to="/locations/london">Crawley</Link>
        </li>
        <li>
          <Link to="/locations/brighton">Brighton</Link>
        </li>
      </ul>
    </main>
  );
};

export const Head = () => <title>Adopt A Cat</title>;

export default Locations;
