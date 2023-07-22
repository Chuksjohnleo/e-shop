import { gql } from 'graphql-request';
import { client } from '@/libs/client';

export default async function fetchCartItems(req, res) {
  const { cartId } = JSON.parse(req.body);
 console.log('fetchcart')
//  return
  const getCartItemsQuery = gql`query{
  cart(id: ${JSON.stringify(cartId)}) {
    id
    createdAt
    updatedAt
    totalQuantity
    estimatedCost {
      subtotalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 10) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
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
              product{
                title
                handle
              }
              image {
                originalSrc
                altText
              }
            }
          }
          attributes {
           key
           value
          }
        }
      }
    }
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
  }
}
`

  const variables = {
    cartId: cartId
  };

  const response = await client.request(getCartItemsQuery, variables);
  const cartItems = response//.lineItems.edges;
  console.log(cartItems,'C')
  
  res.json(cartItems);
}
