import React from "react";
import Layout from "./src/components/Layout";

// Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname);
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null);
// };

// Wraps every page in a component
export const wrapRootElement = ({ element, props }) => {
  console.log("<<<<gatsby brows");

  return (
    <>
      <Layout>{element}</Layout>
    </>
  );
};
