import { GraphQLClient } from 'graphql-request';

const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN;
const apiUrl = process.env.SHOPIFY_ENDPOINT


export const client = new GraphQLClient(apiUrl, {
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
  },
});