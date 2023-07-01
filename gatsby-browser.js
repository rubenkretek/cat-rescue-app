import React from "react";
import Layout from "./src/components/Layout";
import { ContextProvider } from "./src/context/ContextProvider";

// Styles
import "./src/styles/index.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/700.css";

// Logs when the client route changes
// export const onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname);
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null);
// };

// Wraps every page in a component
export const wrapRootElement = ({ element, props }) => {
  return (
    <>
      <ContextProvider>
        <Layout>{element}</Layout>
      </ContextProvider>
    </>
  );
};
