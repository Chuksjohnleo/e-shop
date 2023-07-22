import { GraphQLClient, gql } from 'graphql-request';

export default async function getProducts(req, res) {
  console.log('going')
  const endpoint = 'https://quickstart-6b370af9.myshopify.com/api/2023-04/graphql.json';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'X-Shopify-Storefront-Access-Token': '68e200160c6fa21e26bc000d3f042782'
    },
  });

/*

  curl -X POST \
  https://quickstart-6b370af9.myshopify.com/api/2023-04/graphql.json \
  -H "Content-Type: application/json" \
  -H "X-Shopify-Access-Token: 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" \
  -d '{
    "query": "mutation { appCreatePrivateAccessToken { privateAccessToken { accessToken } } }"
  }' 

 */
  const query = gql`
    query {
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  // const data = await graphQLClient.request(query);
  // return data.products.edges.map(({ node }) => ({
  //   id: node.id,
  //   title: node.title,
  //   description: node.description,
  //   price: node.priceRange.minVariantPrice.amount,
  //   currency: node.priceRange.minVariantPrice.currencyCode,
  // }));
  try {
    const data = await graphQLClient.request(query);
    const pd = data.products.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      description: node.description,
      price: node.priceRange.minVariantPrice.amount,
      currency: node.priceRange.minVariantPrice.currencyCode,
      image: node.images.edges[0]?.node
    }));
    console.log(data,pd)
    res.json(data)
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
