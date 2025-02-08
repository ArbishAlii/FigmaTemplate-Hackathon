import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]{
  _id,
  productName,
  price,
  description,
  "imageUrl": image.asset->_ref
}`;

export const four = groq`*[_type == "product"]{
  _id,
  productName,
  price,
  description,
  "imageUrl": image.asset->_ref
}[0..3]`;

