import { request } from '@/utils/shopify';
import { gql } from 'graphql-request';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ProductNode {
  id: string;
  title: string;
  description: string;
  // Add more product fields as needed
}

interface ProductSearchResponse {
  products: {
    edges: { node: ProductNode }[];
  };
}

interface ErrorMessage {
  errorMessage: string
}

const searchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<ProductNode[] | ErrorMessage>
  ) => {
  const { searchQuery } = req.body;
  console.log( 'searching',searchQuery)
  const query = gql`
    query SearchProducts($query: String!) {
      products(query: $query, first: 10) {
        edges {
          node {
            id
            title
            description
            handle
            images(first: 1){
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            # Add more product fields as needed
          }
        }
      }
    }
  `;

  const variables = {
    query: searchQuery,
  };

  try {
    const data = await request<ProductSearchResponse>(query, variables);
    res.status(200).json(data.products.edges.map((edge: any) => edge.node));
    console.log(data)
  } catch (e) {
    res.status(500).json({ errorMessage: 'Internal error' })
    console.error('Product Search Error', e);
    throw e;
  }
};

export default searchProducts;