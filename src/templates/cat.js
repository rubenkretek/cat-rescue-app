import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { PortableText } from "@portabletext/react";

export default function CatTemplate({ data }) {
  const cat = data.sanityCat;
  console.log("<<<<<", cat);
  const image = cat.mainImage.asset?.gatsbyImageData;
  const bodyText = cat.body;
  console.log("<<<<<bodyText", bodyText);
  return (
    <Layout>
      <div>
        <h1>{cat.title}</h1>
        <h2>{cat.location.city}</h2>
        <div>
          <GatsbyImage image={image} alt={cat.title} />
        </div>
        <div>
          <ul>
            {cat.sex && (
              <li>
                <span>Sex: </span>
                {cat.sex}
              </li>
            )}
            <li>
              <span>Age: </span>NEED TO ADD
            </li>
            {cat.colour && (
              <li>
                <span>Colour: </span>
                {cat.colour}
              </li>
            )}
            <li>
              <span>Can live with other cats: </span>
              {cat.likesCats ? "Yes" : "No"}
            </li>
            <li>
              <span>Can live with dogs: </span>
              {cat.likesDogs ? "Yes" : "No"}
            </li>
            <li>
              <span>Can live with children: </span>
              {cat.likesChildren ? "Yes" : "No"}
            </li>
            <li>
              <span>Likes older families: </span>
              {cat.olderFamilies ? "Yes" : "No"}
            </li>
            {cat.outdoorIndoor && (
              <li>
                <span>Indoor cat: </span>
                {cat.outdoorIndoor}
              </li>
            )}
          </ul>
        </div>
        <div>
          <PortableText value={bodyText} />
        </div>
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
      colour
      likesCats
      likesChildren
      likesDogs
      olderFamilies
      sex
      outdoorIndoor
      location {
        city
      }
      breed {
        name
      }
      mainImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      body {
        _type
        _rawChildren
        _key
        list
        style
        children {
          marks
          text
          _key
          _type
        }
      }
    }
  }
`;
