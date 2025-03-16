/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRestuarantInput = {
  id?: string | null,
  clientId?: string | null,
  name: string,
  description?: string | null,
  city?: string | null,
};

export type ModelRestuarantConditionInput = {
  clientId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  city?: ModelStringInput | null,
  and?: Array< ModelRestuarantConditionInput | null > | null,
  or?: Array< ModelRestuarantConditionInput | null > | null,
  not?: ModelRestuarantConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Restuarant = {
  __typename: "Restuarant",
  id: string,
  clientId?: string | null,
  name: string,
  description?: string | null,
  city?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRestuarantInput = {
  id: string,
  clientId?: string | null,
  name?: string | null,
  description?: string | null,
  city?: string | null,
};

export type DeleteRestuarantInput = {
  id: string,
};

export type ModelRestuarantFilterInput = {
  id?: ModelIDInput | null,
  clientId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  city?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRestuarantFilterInput | null > | null,
  or?: Array< ModelRestuarantFilterInput | null > | null,
  not?: ModelRestuarantFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRestuarantConnection = {
  __typename: "ModelRestuarantConnection",
  items:  Array<Restuarant | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionRestuarantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  clientId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRestuarantFilterInput | null > | null,
  or?: Array< ModelSubscriptionRestuarantFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateRestuarantMutationVariables = {
  input: CreateRestuarantInput,
  condition?: ModelRestuarantConditionInput | null,
};

export type CreateRestuarantMutation = {
  createRestuarant?:  {
    __typename: "Restuarant",
    id: string,
    clientId?: string | null,
    name: string,
    description?: string | null,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRestuarantMutationVariables = {
  input: UpdateRestuarantInput,
  condition?: ModelRestuarantConditionInput | null,
};

export type UpdateRestuarantMutation = {
  updateRestuarant?:  {
    __typename: "Restuarant",
    id: string,
    clientId?: string | null,
    name: string,
    description?: string | null,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRestuarantMutationVariables = {
  input: DeleteRestuarantInput,
  condition?: ModelRestuarantConditionInput | null,
};

export type DeleteRestuarantMutation = {
  deleteRestuarant?:  {
    __typename: "Restuarant",
    id: string,
    clientId?: string | null,
    name: string,
    description?: string | null,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRestuarantQueryVariables = {
  id: string,
};

export type GetRestuarantQuery = {
  getRestuarant?:  {
    __typename: "Restuarant",
    id: string,
    clientId?: string | null,
    name: string,
    description?: string | null,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRestuarantsQueryVariables = {
  filter?: ModelRestuarantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestuarantsQuery = {
  listRestuarants?:  {
    __typename: "ModelRestuarantConnection",
    items:  Array< {
      __typename: "Restuarant",
      id: string,
      clientId?: string | null,
      name: string,
      description?: string | null,
      city?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRestuarantSubscriptionVariables = {
  filter?: ModelSubscriptionRestuarantFilterInput | null,
};

export type OnCreateRestuarantSubscription = {
  onCreateRestuarant?:  {
    __typename: "Restuarant",
    id: string,
    clientId?: string | null,
    name: string,
    description?: string | null,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRestuarantSubscriptionVariables = {
  filter?: ModelSubscriptionRestuarantFilterInput | null,
};

export type OnUpdateRestuarantSubscription = {
  onUpdateRestuarant?:  {
    __typename: "Restuarant",
    id: string,
    clientId?: string | null,
    name: string,
    description?: string | null,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRestuarantSubscriptionVariables = {
  filter?: ModelSubscriptionRestuarantFilterInput | null,
};

export type OnDeleteRestuarantSubscription = {
  onDeleteRestuarant?:  {
    __typename: "Restuarant",
    id: string,
    clientId?: string | null,
    name: string,
    description?: string | null,
    city?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
