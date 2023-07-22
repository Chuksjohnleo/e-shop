import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(`https://YOUR_SHOPIFY_STORE_DOMAIN.myshopify.com/api/2021-07/graphql.json`, {
  headers: {
    'X-Shopify-Storefront-Access-Token': 'YOUR_SHOPIFY_STOREFRONT_ACCESS_TOKEN',
  },
});

const deleteCartMutation = gql`
  mutation deleteCart($cartId: ID!) {
    checkoutDelete(id: $cartId) {
      deletedCheckoutId
    }
  }
`;

const deleteCart = async (cartId) => {
    const variables = {
      cartId,
    };
  
    try {
      const data = await client.request(deleteCartMutation, variables);
      console.log('Cart deleted');
    } catch (error) {
      console.error('Error deleting cart:', error);
    }
  };
  
