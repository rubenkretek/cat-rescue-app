import * as React from "react";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Home Page</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
