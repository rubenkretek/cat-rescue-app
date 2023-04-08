import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const AdoptACat = () => {
  return (
    <Layout>
      <main>
        <h1>This will eventually be a list of cats!</h1>
        <p>For now here are a couple hardcoded links:</p>
        <ul>
          <li>
            <Link to="/adopt-a-cat/kimmi">Kimmi</Link>
          </li>
          <li>
            <Link to="/adopt-a-cat/cardi">Cardi</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
};

export const Head = () => <title>Adopt A Cat</title>;

export default AdoptACat;
