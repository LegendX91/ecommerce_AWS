/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  image: string,
  images: Array< string >,
  options?: Array< string > | null,
  avgRatings: number,
  ratings?: number | null,
  currentPrice: Array< number >,
  defaultPrice: Array< number >,
  tags?: Array< string | null > | null,
  availability: Array< string >,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  options?: ModelStringInput | null,
  avgRatings?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  currentPrice?: ModelFloatInput | null,
  defaultPrice?: ModelFloatInput | null,
  tags?: ModelStringInput | null,
  availability?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
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

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  title: string,
  description?: string | null,
  image: string,
  images: Array< string >,
  options?: Array< string > | null,
  avgRatings: number,
  ratings?: number | null,
  currentPrice: Array< number >,
  defaultPrice: Array< number >,
  tags?: Array< string | null > | null,
  availability: Array< string >,
  orders?: ModelCartProductConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCartProductConnection = {
  __typename: "ModelCartProductConnection",
  items:  Array<CartProduct | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CartProduct = {
  __typename: "CartProduct",
  id: string,
  quantity: number,
  option?: string | null,
  userSub: string,
  productID: string,
  product?: Product | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  images?: Array< string > | null,
  options?: Array< string > | null,
  avgRatings?: number | null,
  ratings?: number | null,
  currentPrice?: Array< number > | null,
  defaultPrice?: Array< number > | null,
  tags?: Array< string | null > | null,
  availability?: Array< string > | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateCartProductInput = {
  id?: string | null,
  quantity: number,
  option?: string | null,
  userSub: string,
  productID: string,
  _version?: number | null,
};

export type ModelCartProductConditionInput = {
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  userSub?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductConditionInput | null > | null,
  or?: Array< ModelCartProductConditionInput | null > | null,
  not?: ModelCartProductConditionInput | null,
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

export type UpdateCartProductInput = {
  id: string,
  quantity?: number | null,
  option?: string | null,
  userSub?: string | null,
  productID?: string | null,
  _version?: number | null,
};

export type DeleteCartProductInput = {
  id: string,
  _version?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  images?: ModelStringInput | null,
  options?: ModelStringInput | null,
  avgRatings?: ModelFloatInput | null,
  ratings?: ModelIntInput | null,
  currentPrice?: ModelFloatInput | null,
  defaultPrice?: ModelFloatInput | null,
  tags?: ModelStringInput | null,
  availability?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCartProductFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  option?: ModelStringInput | null,
  userSub?: ModelStringInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductFilterInput | null > | null,
  or?: Array< ModelCartProductFilterInput | null > | null,
  not?: ModelCartProductFilterInput | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRatings: number,
    ratings?: number | null,
    currentPrice: Array< number >,
    defaultPrice: Array< number >,
    tags?: Array< string | null > | null,
    availability: Array< string >,
    orders?:  {
      __typename: "ModelCartProductConnection",
      items:  Array< {
        __typename: "CartProduct",
        id: string,
        quantity: number,
        option?: string | null,
        userSub: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRatings: number,
    ratings?: number | null,
    currentPrice: Array< number >,
    defaultPrice: Array< number >,
    tags?: Array< string | null > | null,
    availability: Array< string >,
    orders?:  {
      __typename: "ModelCartProductConnection",
      items:  Array< {
        __typename: "CartProduct",
        id: string,
        quantity: number,
        option?: string | null,
        userSub: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRatings: number,
    ratings?: number | null,
    currentPrice: Array< number >,
    defaultPrice: Array< number >,
    tags?: Array< string | null > | null,
    availability: Array< string >,
    orders?:  {
      __typename: "ModelCartProductConnection",
      items:  Array< {
        __typename: "CartProduct",
        id: string,
        quantity: number,
        option?: string | null,
        userSub: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCartProductMutationVariables = {
  input: CreateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type CreateCartProductMutation = {
  createCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    quantity: number,
    option?: string | null,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRatings: number,
      ratings?: number | null,
      currentPrice: Array< number >,
      defaultPrice: Array< number >,
      tags?: Array< string | null > | null,
      availability: Array< string >,
      orders?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCartProductMutationVariables = {
  input: UpdateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type UpdateCartProductMutation = {
  updateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    quantity: number,
    option?: string | null,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRatings: number,
      ratings?: number | null,
      currentPrice: Array< number >,
      defaultPrice: Array< number >,
      tags?: Array< string | null > | null,
      availability: Array< string >,
      orders?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCartProductMutationVariables = {
  input: DeleteCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type DeleteCartProductMutation = {
  deleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    quantity: number,
    option?: string | null,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRatings: number,
      ratings?: number | null,
      currentPrice: Array< number >,
      defaultPrice: Array< number >,
      tags?: Array< string | null > | null,
      availability: Array< string >,
      orders?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRatings: number,
    ratings?: number | null,
    currentPrice: Array< number >,
    defaultPrice: Array< number >,
    tags?: Array< string | null > | null,
    availability: Array< string >,
    orders?:  {
      __typename: "ModelCartProductConnection",
      items:  Array< {
        __typename: "CartProduct",
        id: string,
        quantity: number,
        option?: string | null,
        userSub: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRatings: number,
      ratings?: number | null,
      currentPrice: Array< number >,
      defaultPrice: Array< number >,
      tags?: Array< string | null > | null,
      availability: Array< string >,
      orders?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRatings: number,
      ratings?: number | null,
      currentPrice: Array< number >,
      defaultPrice: Array< number >,
      tags?: Array< string | null > | null,
      availability: Array< string >,
      orders?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCartProductQueryVariables = {
  id: string,
};

export type GetCartProductQuery = {
  getCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    quantity: number,
    option?: string | null,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRatings: number,
      ratings?: number | null,
      currentPrice: Array< number >,
      defaultPrice: Array< number >,
      tags?: Array< string | null > | null,
      availability: Array< string >,
      orders?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCartProductsQueryVariables = {
  filter?: ModelCartProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartProductsQuery = {
  listCartProducts?:  {
    __typename: "ModelCartProductConnection",
    items:  Array< {
      __typename: "CartProduct",
      id: string,
      quantity: number,
      option?: string | null,
      userSub: string,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRatings: number,
        ratings?: number | null,
        currentPrice: Array< number >,
        defaultPrice: Array< number >,
        tags?: Array< string | null > | null,
        availability: Array< string >,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCartProductsQueryVariables = {
  filter?: ModelCartProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCartProductsQuery = {
  syncCartProducts?:  {
    __typename: "ModelCartProductConnection",
    items:  Array< {
      __typename: "CartProduct",
      id: string,
      quantity: number,
      option?: string | null,
      userSub: string,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        title: string,
        description?: string | null,
        image: string,
        images: Array< string >,
        options?: Array< string > | null,
        avgRatings: number,
        ratings?: number | null,
        currentPrice: Array< number >,
        defaultPrice: Array< number >,
        tags?: Array< string | null > | null,
        availability: Array< string >,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRatings: number,
    ratings?: number | null,
    currentPrice: Array< number >,
    defaultPrice: Array< number >,
    tags?: Array< string | null > | null,
    availability: Array< string >,
    orders?:  {
      __typename: "ModelCartProductConnection",
      items:  Array< {
        __typename: "CartProduct",
        id: string,
        quantity: number,
        option?: string | null,
        userSub: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRatings: number,
    ratings?: number | null,
    currentPrice: Array< number >,
    defaultPrice: Array< number >,
    tags?: Array< string | null > | null,
    availability: Array< string >,
    orders?:  {
      __typename: "ModelCartProductConnection",
      items:  Array< {
        __typename: "CartProduct",
        id: string,
        quantity: number,
        option?: string | null,
        userSub: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    description?: string | null,
    image: string,
    images: Array< string >,
    options?: Array< string > | null,
    avgRatings: number,
    ratings?: number | null,
    currentPrice: Array< number >,
    defaultPrice: Array< number >,
    tags?: Array< string | null > | null,
    availability: Array< string >,
    orders?:  {
      __typename: "ModelCartProductConnection",
      items:  Array< {
        __typename: "CartProduct",
        id: string,
        quantity: number,
        option?: string | null,
        userSub: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCartProductSubscription = {
  onCreateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    quantity: number,
    option?: string | null,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRatings: number,
      ratings?: number | null,
      currentPrice: Array< number >,
      defaultPrice: Array< number >,
      tags?: Array< string | null > | null,
      availability: Array< string >,
      orders?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCartProductSubscription = {
  onUpdateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    quantity: number,
    option?: string | null,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRatings: number,
      ratings?: number | null,
      currentPrice: Array< number >,
      defaultPrice: Array< number >,
      tags?: Array< string | null > | null,
      availability: Array< string >,
      orders?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCartProductSubscription = {
  onDeleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    quantity: number,
    option?: string | null,
    userSub: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      title: string,
      description?: string | null,
      image: string,
      images: Array< string >,
      options?: Array< string > | null,
      avgRatings: number,
      ratings?: number | null,
      currentPrice: Array< number >,
      defaultPrice: Array< number >,
      tags?: Array< string | null > | null,
      availability: Array< string >,
      orders?:  {
        __typename: "ModelCartProductConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
