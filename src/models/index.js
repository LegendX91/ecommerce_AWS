// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartProduct, Locations } = initSchema(schema);

export {
  Product,
  CartProduct,
  Locations
};