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

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function Home() {
  const products: Product[] = await getProducts();
  
  
console.log(products[0].image, "products array")
  return (
    <div>
      {/* <h1>Products</h1> */}

      <HeaderTwo />
      <HeroImage />
      {/* <SHOES /> */}
      {/* <BestOfAirMaxSection /> */}
      {/* <Featured /> */}

      <div className="grid grid-cols-3 gap-4">
        {products.map((product,i) => (
          <div
            className="border p-4 rounded-lg shadow-sm flex flex-col items-center"
            key={product._id}
          >
            <Image
              src={product.image || "prod"}
              alt={product.name || "prod"}
              className="w-60"
              height={600}
              width={600} // Ensure width is included
            />
            <h2 className="text-xl font-bold text-center">{product.name}</h2>
            <p className="text-center">{product.description}</p>
            <p className="text-center">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}







// import { allproducts } from "../sanity/lib/queries";
// import { sanityFetch } from "../sanity/lib/fetch";
// import Image  from "next/image";
 
// type Product = {
//   _id : string;
//   name : string;
//   description : string;
//   price : number;
//   imageUrl : string
// }
// export default async function Home() {
//   const products : Product[] = await sanityFetch({query : allproducts})
//   return{ 
//     <div>
//      <h1>Products</h1>

//       <div className="grid grid-cols-3 gap-4">{
//         products.map({product} => (

//           <div className="border p-4 rounded-lg shadow-sm" key={product._id}>
//           <Image src={product.imageUrl} alt={product.name} className="w-60" height={600}/>
//           <h2 className="text-xl font-bold text-center">
//           {product.name}</h2>
//           <p className="text-center">{product.description}</p>
//           <p className="text-center">{product.price}</p>
//           </div>
//         ))
//     }</div>
//     </div>
//   }
// }