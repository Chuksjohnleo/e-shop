import { GraphQLClient, gql } from 'graphql-request';

export async function getProduct(handle) {
  console.log(handle,'gg')
  const endpoint = 'https://quickstart-6b370af9.myshopify.com/api/2023-04/graphql.json';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN
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
        product(handle: ${JSON.stringify(handle)})  {
            id
            title
            description
            handle
            totalInventory
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                  image {
                    originalSrc
                    altText
                  }
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
            }
            images(first: 10) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
  `;

//  {
//   product: {
//     id: 'gid://shopify/Product/8380529017127',
//     title: 'The Videographer Snowboard',
//     description: '',
//     priceRange: { minVariantPrice: [Object] },
//     images: { edges: [Array] }
//   }
// }
  try {
    const response = await graphQLClient.request(query);
    const data = response.product;
   
    const product = {
      id: data.id,
      title: data.title,
      description: data.description,
      price: data.priceRange.minVariantPrice.amount,
      currency: data.priceRange.minVariantPrice.currencyCode,
      images: data.images.edges,
      handle : data.handle,
      totalInventory: data.totalInventory,
      variants: data.variants.edges
    }
  
   return product;
  } catch (error) {
    console.error('Error fetching products:', error);
    return false;
  }
}

//let a= `{"edges":[{"node":{"id":"gid://shopify/ProductVariant/45327251308839","title":"Default Title","quantityAvailable":39,"priceV2":{"amount":"885.95","currencyCode":"NGN"}}}]}`