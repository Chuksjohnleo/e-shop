import { GraphQLClient } from 'graphql-request';


const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN;
const endpoint = process.env.SHOPIFY_ENDPOINT

export const request = async <T>(query: string, variables = {}): Promise<T> => {
  
  if (!storefrontAccessToken || !endpoint) {
    throw new Error('Missing Shopify storefront access token or endpoint');
  }

  const client = new GraphQLClient(endpoint, {
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
  });

  try {
    const data: T = await client.request(query, variables);
    return data;
  } catch (error) {
    console.error('GraphQL Request Error', error);
    throw error;
  }
};
