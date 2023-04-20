import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function pageTemplate({ data }) {
  const page = data.sanityPage;
  console.log("<<<<<page", page);

  return (
    <Layout>
      <div>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <Link to="/">Back to home</Link>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      id
      title
      description
    }
  }
`;
