import { graphql } from "gatsby";
import * as React from "react";
import Hero from "../components/Hero";
import Block from "../components/Block";
import LatestCats from "../components/LatestCats";
import LatestBlog from "../components/LatestBlog";

const IndexPage = ({ data }) => {
  const { headline, heroImage, blocks } = data.allSanityHomePage.edges[0].node;
  console.log("| data", blocks);

  return (
    <main>
      <Hero headline={headline} image={heroImage} />
      {blocks.map((block) => {
        return (
          <Block
            title={block.title}
            description={block.description}
            image={block.heroImage.asset.gatsbyImageData}
          />
        );
      })}
      <LatestCats />
      <LatestBlog />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query MyQuery {
    allSanityHomePage {
      edges {
        node {
          headline
          id
          blocks {
            description
            heroImage {
              asset {
                gatsbyImageData
              }
            }
            title
          }
          heroImage {
            asset {
              gatsbyImageData(
                fit: FILLMAX
                placeholder: BLURRED
                height: 400
                width: 1920
              )
            }
          }
        }
      }
    }
  }
`;
