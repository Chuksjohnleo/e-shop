import { gql } from 'graphql-request';
import { request } from '@/utils/shopify';
//$lineId: ID!,
const updateLineQuantityMutation = gql`
mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      id
      createdAt
      updatedAt
      totalQuantity
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
    userErrors {
      field
      message
    }
  }
}
`;

const updateLineItemQuantity = async (req, res) => {
  const {cartId, lineId, quantity} = JSON.parse(req.body);
console.log(quantity)
    const lines = [
      {
        id: lineId,
        quantity: quantity
      },
    ];
  
    const variables = {
      cartId,
      lines,
      // lineId
    };
  
    try {
      const data = await request(updateLineQuantityMutation, variables);
      res.status(200).json(data);
      console.log('Line item quantity updated', data);
    } catch (error) {
      console.error('Error updating line item quantity:', error);
    }
  };
  
export default updateLineItemQuantity;

