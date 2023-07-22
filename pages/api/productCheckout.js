import { GraphQLClient, gql } from 'graphql-request';

const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN;
const apiUrl = process.env.SHOPIFY_ENDPOINT

export default async function createCheckout(req, res) {
  const { variantId, quantity } = JSON.parse(req.body);
    try{ const client = new GraphQLClient(apiUrl, {
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
  });

  const createCheckoutMutation = gql`
    mutation($variantId: ID!, $quantity: Int!) {
      checkoutCreate(input: { lineItems: [{ variantId: $variantId, quantity: $quantity }] }) {
        checkout {
          id
          webUrl
        }
      }
    }
  `;

  const variables = {
    variantId: variantId,
    quantity: quantity,
  };

  const response = await client.request(createCheckoutMutation, variables);
  const checkoutUrl = response.checkoutCreate.checkout.webUrl;

  // Redirect to the checkout URL
  console.log(checkoutUrl)
  res.json(checkoutUrl);
 
 }catch (error){
    console.log(error)
  //  return error.response.error
 }
}
