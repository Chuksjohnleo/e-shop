import { GraphQLClient, gql } from 'graphql-request';


export async function getProducts() {
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
      products(first: 20) {
        edges {
          node {
            id
            title
            description
            handle
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                  compareAtPriceV2 {
                    amount
                    currencyCode
                  }
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
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
    const response = await graphQLClient.request(query);
    const data = response.products.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      description: node.description,
      price: node.priceRange.minVariantPrice.amount,
      currency: node.priceRange.minVariantPrice.currencyCode,
      image: node.images.edges[0]?.node || 'me',
      handle : node.handle,
      variants: node.variants.edges
    }));
 
   return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return false
  }
}
//let a= `{"edges":[{"node":{"id":"gid://shopify/ProductVariant/45327251308839","title":"Default Title","quantityAvailable":39,"priceV2":{"amount":"885.95","currencyCode":"NGN"}}}]}`