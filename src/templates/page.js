import React from "react";
import { graphql, Link } from "gatsby";

export default function pageTemplate({ data }) {
  const page = data.sanityPage;
  console.log("<<<<<page", page);

  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
      <Link to="/">Back to home</Link>
    </div>
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
