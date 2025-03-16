/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRestuarant = /* GraphQL */ `query GetRestuarant($id: ID!) {
  getRestuarant(id: $id) {
    id
    clientId
    name
    description
    city
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRestuarantQueryVariables,
  APITypes.GetRestuarantQuery
>;
export const listRestuarants = /* GraphQL */ `query ListRestuarants(
  $filter: ModelRestuarantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestuarants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      clientId
      name
      description
      city
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRestuarantsQueryVariables,
  APITypes.ListRestuarantsQuery
>;
