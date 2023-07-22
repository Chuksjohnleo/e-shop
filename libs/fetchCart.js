import { gql } from 'graphql-request';
import { client } from '@/libs/client';

export default async function fetchCartItems(req, res) {
  const { cartId } = JSON.parse(req.body);

  const getCartItemsQuery = gql`
    query($cartId: ID!) {
      node(id: $cartId) {
        ... on Cart {
          id
          lineItems(first: 10) {
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  price
                }
                quantity
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    cartId: cartId,
  };

  const response = await client.request(getCartItemsQuery, variables);
  const cartItems = response.node.lineItems.edges;

 return cartItems;
}
