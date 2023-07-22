import { GraphQLClient, gql } from 'graphql-request';

const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API_ACCESS_TOKEN;
const apiUrl = process.env.SHOPIFY_ENDPOINT

const createCartMutation = gql`
mutation($lines: [CartLineInput!]!) {
  cartCreate(
    input: {
      lines: $lines
    }
  ) {
    cart {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }
    }
  }
}

`
const cartLinesAddMutation = gql`
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      id
      createdAt
      updatedAt
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
`


const client = new GraphQLClient(apiUrl, {
  headers: {
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
  },
});

async function addToCart(res, variantId, quantity, cartId, defaultTitle){

  try{
  // Add line items to the checkout
    const lines = [
      { 	"attributes": [
        {
          "key": "defaultTitle",
          "value": defaultTitle
        }
      ],
        merchandiseId: variantId,
        quantity: quantity
      },
    ];
  
    const addLineItemsData = await client.request(cartLinesAddMutation, {
      cartId: cartId,
      lines: lines
    });
    // {
    //   cartLinesAdd: {
    //     cart: {
    //       id: 'gid://shopify/Cart/c1-a7fca10bcc887cd6d8673461abb8b929',     
    //       createdAt: '2023-07-02T21:09:59Z',
    //       updatedAt: '2023-07-02T21:12:46Z',
    //       lines: [Object]
    //     },
    //     userErrors: [ [Object] ]
    //   }
    // }
  
    const updatedLineItems = addLineItemsData.cartLinesAdd.cart.lines.edges.map(
      (edge) => edge.node
    );
  res.json({
    cartId,
    updatedLineItems
  })
   
  }catch (e){
      res.status(500).json('Internal server error')
      console.log(e,'e1')
  }
}

async function createCartBeforeAdd(res, variantId, quantity, defaultTitle){

   try{
   // Add line items to the checkout
     const lines = [
       {	"attributes": [
        {
          "key": "defaultTitle",
          "value": defaultTitle
        }
      ],
         merchandiseId: variantId,
         quantity: quantity
       },
     ];
   
     const addLineItemsData = await client.request(createCartMutation, {
       lines: lines
     });
   
     const updatedLineItems = addLineItemsData.cartCreate.cart.lines.edges.map(
       (edge) => edge.node
     );
    
   res.json({
     cartId: addLineItemsData.cartCreate.cart.id,
     items: updatedLineItems
   })
   
   }catch (e){
       res.status(500).json('Internal server error')
       console.log(e,'e2')
   }
 }
 

export default async function handler(req, res) {
  // console.log(req.body)
  const {variantId, quantity, cartId, defaultTitle} = JSON.parse(req.body);
 
  if(req.method === 'POST'){
    if(cartId.length > 2 || cartId === null){
      addToCart(res, variantId, quantity, cartId, defaultTitle )
    }else{
    // Create a new checkout
    createCartBeforeAdd(res, variantId, quantity, defaultTitle);
   }
  }
}

