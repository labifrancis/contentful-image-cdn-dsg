exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
createRedirect({
  fromPath: `/products/*`,
  toPath: `https://www.gatsbyjs.com/docs/*`,
  statusCode: 200,
})
