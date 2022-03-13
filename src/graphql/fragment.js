import { gql } from '@apollo/react-hooks';

export const ARTICLE_DETAILS = gql`
  fragment articleDetails on Article {
    id
    title
    metaTitle
    slug
    summary
    content
    tag
    author
    viewCount
    license
    cover
    thumb
    published
    publishedAt
    updatedAt
    articleLikeCount
  }
`;

export const COLLECTION_DETAILS = gql`
  fragment collectionDetails on Collection {
    id
    title
    cover
  }
`;

export const USER_DETAILS = gql`
  fragment userDetails on User {
    id
    username
    firstName
    lastName
    email
    profileImage
  }
`;

export default ARTICLE_DETAILS;
