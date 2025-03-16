import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRestuarant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restuarant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientId?: string | null;
  readonly name: string;
  readonly description?: string | null;
  readonly city?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestuarant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restuarant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientId?: string | null;
  readonly name: string;
  readonly description?: string | null;
  readonly city?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restuarant = LazyLoading extends LazyLoadingDisabled ? EagerRestuarant : LazyRestuarant

export declare const Restuarant: (new (init: ModelInit<Restuarant>) => Restuarant) & {
  copyOf(source: Restuarant, mutator: (draft: MutableModel<Restuarant>) => MutableModel<Restuarant> | void): Restuarant;
}