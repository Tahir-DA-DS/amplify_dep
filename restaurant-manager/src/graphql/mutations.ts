/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRestuarant = /* GraphQL */ `mutation CreateRestuarant(
  $input: CreateRestuarantInput!
  $condition: ModelRestuarantConditionInput
) {
  createRestuarant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRestuarantMutationVariables,
  APITypes.CreateRestuarantMutation
>;
export const updateRestuarant = /* GraphQL */ `mutation UpdateRestuarant(
  $input: UpdateRestuarantInput!
  $condition: ModelRestuarantConditionInput
) {
  updateRestuarant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRestuarantMutationVariables,
  APITypes.UpdateRestuarantMutation
>;
export const deleteRestuarant = /* GraphQL */ `mutation DeleteRestuarant(
  $input: DeleteRestuarantInput!
  $condition: ModelRestuarantConditionInput
) {
  deleteRestuarant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRestuarantMutationVariables,
  APITypes.DeleteRestuarantMutation
>;
