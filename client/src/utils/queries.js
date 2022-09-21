import { gql } from '@apollo/client';

// exported me query that connect to server me query
export const query_me = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;