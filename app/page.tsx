 import HeaderTwo from "./components/headertwo";
 import HeroImage from "./components/hero";
 import BestOfAirMaxSection from "./components/air";
 import {Featured}  from "./components/featured";
 import SHOES from "@/components/Shoes/page";
 


//  export default function Home() {
//   return (
//     <div className="w-full">
//       <HeaderTwo />
//       <HeroImage />
//       <BestOfAirMaxSection />
//       <Shoes/>
//       <Featured />
      
//     </div>
//   );
// }






// import { allproducts } from "../sanity/lib/queries";
// import { client } from "../sanity/lib/fetch";
// import Image from "next/image";

// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// };

// export default async function Home() {
//   const products: Product[] = await sanityClientFactory(allproducts);

//   return (
//     <div>
//       <h1>Products</h1>

//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center" key={product._id}>
//             <Image
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-60"
//               height={600}
//               width={600} // Added width to fix Image component requirement
//             />
//             <h2 className="text-xl font-bold text-center">{product.name}</h2>
//             <p className="text-center">{product.description}</p>
//             <p className="text-center">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import { allProducts } from "../sanity/lib/queries";
import { getProducts } from "../sanity/lib/fetch";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function Home() {
  const products: Product[] = await getProducts();
  
  // const queryString = new URLSearchParams(products).toString();
console.log(products, "products array")
  return (
    <div>
      {/* <h1>Products</h1> */}

      <HeaderTwo />
      <HeroImage />
      {/* <SHOES /> 
      <BestOfAirMaxSection />
     <Featured /> */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
   <div key={product._id} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
   <Link href={`/product/${product._id}`}>
   <Image
    src={product.imageUrl || "/default-image.jpg"} // Provide a fallback image path if no image is available
    alt={product.name || "Product Image"}
    className="w-60"
    height={600}
    width={600} // Ensure width is included
  />
   </Link>
   <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">{product.name}</h2>
   <p className="text-gray-600 text-center text-sm mb-4 leading-relaxed">
     {product.description}
   </p>
   <p className="text-center text-lg font-bold text-gray-900 mb-6">${product.price}</p>
   <Link href={`/Details?${product}`}>
        <button className="bg-black text-white p-3 rounded-md w-full hover:bg-gray-800 transition-colors duration-300">
          Add to Cart
        </button>
      </Link>
 </div>
 

  ))}
</div>

    </div>
  );
}
//  <div className="bg-white p-4 shadow-lg rounded-lg">
{/* <a href="/product/1">
<img
  src="/1st.svg"
  alt="Product 1"
  className="w-full h-100 mb-4"
/>
</a>
</div> */}







