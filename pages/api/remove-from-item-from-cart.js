import { gql } from 'graphql-request';
import { request } from '@/utils/shopify';

const removeLineMutation = gql`
mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
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

export default async function removeLine(req, res){
    const {cartId, lineId} = JSON.parse(req.body)
    const lineIds = [lineId];
  
    const variables = {
      cartId,
      lineIds,
    };
  
    try {
      const data = await request(removeLineMutation, variables);
      res.status(200).json(data);
      console.log('Line item removed', data);
    } catch (error) {
      console.error('Error removing line item:', error);
    }
  };
  
