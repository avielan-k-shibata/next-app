import { gql } from '@apollo/client';
import { Item } from '../pages/types/items';

export const ITEMS_QUERY = gql`
  query GetItems {
          items {
              data{
                id
                attributes{
                  name
            }
          }
        }
      }
`;
export interface ItemsData {
    items: Item[];
  }

export const ITEM_QUERY = gql`
  query GetItem($id: ID!) {
          item(id: $id) {
              data{
                id
                attributes{
                  name
            }
          }
        }
      }
`;
