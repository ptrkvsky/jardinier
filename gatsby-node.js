exports.createPages = async ({ graphql, actions }) => {
  /** Promise */
  const { createPage } = actions;

  const departementTemplate = require.resolve(
    "./src/templates/Departement.jsx"
  );

  const result = await graphql(`
    {
      pagesElagageDepartement: allSanityPage(
        filter: { categorie: { slug: { current: { eq: "elagage" } } } }
      ) {
        nodes {
          slug {
            current
          }
          categorie {
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

  // Departements
  const pagesElagageDepartement =
    result.data.pagesElagageDepartement.nodes || [];

  // Build pages for every departement
  pagesElagageDepartement.forEach((pageElagageDepartement) => {
    createPage({
      path: `/${pageElagageDepartement.slug.current}`,
      component: departementTemplate,
      context: {
        pageElagageDepartementSlug: pageElagageDepartement.slug.current,
      },
    });
  });
};
