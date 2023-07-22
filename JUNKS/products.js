// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import axios from 'axios';

// Shopify API credentials
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const SHOPIFY_API_SECRET = process.env.SHOPIFY_API_SECRET;
const SHOPIFY_CLIENT_ID = process.env.SHOPIFY_CLIENT_ID;
const SHOPIFY_CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET;
const SHOP_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;

export default async function handler(req, res) {
  try {
    const accessToken = await getAccessToken();
    const products = await fetchProducts(accessToken);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}

// Function to obtain access token from Shopify
async function getAccessToken() {
  const response = await axios.post(`https://${SHOP_DOMAIN}/admin/oauth/access_token`, {
    client_id: SHOPIFY_CLIENT_ID,
    client_secret: SHOPIFY_CLIENT_SECRET,
    // code: req.query.code
  });

//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 gen_acct1
//d68bc77a21b114d7fd069091a16378dd  pub_acct1
//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 p_acct

  return response.data.access_token;
}

// Function to fetch products from Shopify
async function fetchProducts(accessToken) {
  const response = await axios.get(`${SHOP_DOMAIN}api/2023-04/graphql.json`, {
    headers: {
      'X-Shopify-Access-Token': accessToken
    }
  });

  return response.data.products;
}

