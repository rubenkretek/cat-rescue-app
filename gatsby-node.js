// Cats
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityCat(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const cats = result.data.allSanityCat.edges || [];
  cats.forEach((edge, index) => {
    const path = `/adopt-a-cat/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/id-cat.js"),
      context: { slug: edge.node.slug.current },
    });
  });
};

// Locations
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityLocation(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            city
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const locations = result.data.allSanityLocation.edges || [];

  locations.forEach((edge, index) => {
    const path = `/locations/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/location.js"),
      context: { slug: edge.node.slug.current },
    });
  });
};
