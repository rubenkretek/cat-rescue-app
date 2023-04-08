import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function CatTemplate({ data }) {
  const cat = data.sanityCat;
  console.log("<<<<<", cat);

  return (
    <Layout>
      <div>
        <h1>{cat.title}</h1>
        <h2>{cat.location.city}</h2>
        <Link to="/adopt-a-cat">Back to all cats</Link>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    sanityCat(slug: { current: { eq: $slug } }) {
      id
      title
      location {
        city
      }
    }
  }
`;
