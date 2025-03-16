/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRestuarant = /* GraphQL */ `subscription OnCreateRestuarant(
  $filter: ModelSubscriptionRestuarantFilterInput
) {
  onCreateRestuarant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRestuarantSubscriptionVariables,
  APITypes.OnCreateRestuarantSubscription
>;
export const onUpdateRestuarant = /* GraphQL */ `subscription OnUpdateRestuarant(
  $filter: ModelSubscriptionRestuarantFilterInput
) {
  onUpdateRestuarant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRestuarantSubscriptionVariables,
  APITypes.OnUpdateRestuarantSubscription
>;
export const onDeleteRestuarant = /* GraphQL */ `subscription OnDeleteRestuarant(
  $filter: ModelSubscriptionRestuarantFilterInput
) {
  onDeleteRestuarant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRestuarantSubscriptionVariables,
  APITypes.OnDeleteRestuarantSubscription
>;
