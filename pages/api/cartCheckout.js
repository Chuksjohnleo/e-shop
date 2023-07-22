import { GraphQLClient, gql } from 'graphql-request';

const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN;
const apiUrl = process.env.SHOPIFY_ENDPOINT

export default async function createCheckout(req, res) {
  const { cartId } = JSON.parse(req.body)
  const client = new GraphQLClient(apiUrl, {
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
  });

  const checkoutUrlQuery = gql`
      query checkoutURL {
        cart(id: ${JSON.stringify(cartId)}) {
          checkoutUrl
        }
      }      
  `;
  try{
    const response = await client.request(checkoutUrlQuery);
    const checkoutUrl = response.cart.checkoutUrl;
  
    // Redirect to the checkout URL
    res.status(200).json({checkoutUrl})
  }catch(e){
    res.status(500).json({error: e})
  }
 
}
