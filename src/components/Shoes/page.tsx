

// const SHOES = () => {

//     useEffect(() => {
//         async function fetchProduct() {
//           const fetchedProduct: Product[] = await client.fetch(allProducts);
//           setProduct(fetchedProduct);
//         }
//         fetchProduct();
//       }, []);
      
//       return (
//         <div className="max-w-6xl mx-auto px-4 py-8">
//           {product.map((product) => (
//             <div key={product._id}>
//               {product.productName}
//             </div>
//           ))}
//         </div>
//       );
      
//       export default SHOES;
      
// } 






















'use client'
// import Image from "next/image";
// import{ client } from "../../sanity/lib/client";
// import { allproducts } from "../../sanity/lib/queries";
// import React { useEffect, useState }  from "react";

// const SHOES = () => {
//     const [product, setProduct] = useState<Product[]>([]);
  
//     useEffect(() => {
//       async function fetchProduct() {
//         const fetchedProduct: Product[] = await client.fetch(allproducts);
//         setProduct(fetchedProduct);
//       }
  
//       fetchProduct();
//     }, []);


//     return (
//         <div className="max-w-6xl mx-auto px-4 py-8">
//           {product.map((Product) => (
//             <div key={product._id}>
//               {product.productName}
//             </div>
//           ))}
//         </div>
//       );
      




//   };
  





import { useState, useEffect } from "react";
import Image from "next/image"; // Ensure you import the Image component from Next.js
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image"; // Import the helper to handle image URLs
import { Product } from "../../../types/products";

const allProducts = groq`*[_type == "product"]`;

const SHOES = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            {/* Image */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()} // Ensure the `urlFor` function is correctly set up
                alt={product.productName || "Product Image"}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            {/* Product Name */}
            <h2 className="text-lg font-semibold mt-4">
              {product.productName}
            </h2>
            <p className="text-gray-500 mt-2">
              {product.price? `$${product.price}` : "Price not available!"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHOES;
