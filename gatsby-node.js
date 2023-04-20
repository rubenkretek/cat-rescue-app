exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Cats
  const catPages = await graphql(`
    {
      allSanityCat(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            name
            slug {
              current
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const cats = result.data.allSanityCat.edges || [];
    cats.forEach((edge, index) => {
      const path = `/adopt-a-cat/${edge.node.slug.current}`;

      createPage({
        path,
        component: require.resolve("./src/templates/cat.js"),
        context: { slug: edge.node.slug.current },
      });
    });
  });
  // Cats - END

  // Locations
  const locationPages = await graphql(`
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
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const location = result.data.allSanityLocation.edges || [];

    location.forEach((edge, index) => {
      const path = `/locations/${edge.node.slug.current}`;

      createPage({
        path,
        component: require.resolve("./src/templates/location.js"),
        context: { slug: edge.node.slug.current },
      });
    });
  });
  //Locations - END

  // Pages
  const pages = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
            title
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const pages = result.data.allSanityPage.edges || [];

    pages.forEach((edge, index) => {
      const path = `/${edge.node.slug.current}`;

      createPage({
        path,
        component: require.resolve("./src/templates/page.js"),
        context: { slug: edge.node.slug.current },
      });
    });
  });
  //pages - END

  return Promise.all([catPages, locationPages, pages]);
};
