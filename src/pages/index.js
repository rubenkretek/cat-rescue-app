import { graphql } from "gatsby";
import * as React from "react";
import Hero from "../components/Hero";
import Block from "../components/Block";
import IntroSection from "../components/IntroSection";
// import LatestCats from "../components/LatestCats";
// import LatestBlog from "../components/LatestBlog";

const IndexPage = ({ data }) => {
  const { title, headline, heroImage, blocks, introParagraph, introTitle } =
    data.allSanityHomePage.edges[0].node;
  console.log("| data", blocks);

  return (
    <main>
      <Hero title={title} headline={headline} image={heroImage} />
      <IntroSection title={introTitle} paragraph={introParagraph} />
      {blocks.map((block) => {
        return (
          <Block
            title={block.title}
            description={block.description}
            image={block.heroImage.asset.gatsbyImageData}
          />
        );
      })}
      {/* <LatestCats /> */}
      {/* <LatestBlog /> */}
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
          title
          headline
          id
          heroImage {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, width: 600)
            }
          }
          blocks {
            description
            heroImage {
              asset {
                gatsbyImageData
              }
            }
            title
          }
          introParagraph
          introTitle
        }
      }
    }
  }
`;
