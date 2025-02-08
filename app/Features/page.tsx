// 'use client';
// import React, { useState } from 'react';

// const NewFeaturePage = () => {
//   // State to manage open/close sections in the sidebar
//   const [openSection, setOpenSection] = useState<{
//     gender: boolean;
//     price: boolean;
//     kids: boolean;
//   }>({
//     gender: true,
//     price: true,
//     kids: true,
//   });

//   // State to manage navbar open/close (for mobile)
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

//   // Toggle open/close sections
//   const toggleSection = (section: 'gender' | 'price' | 'kids') => {
//     setOpenSection((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   // Toggle navbar open/close for mobile
//   const toggleNavbar = () => {
//     setIsNavbarOpen((prev) => !prev);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* Toggle Button for Navbar (Mobile) */}
//       <button
//         className="lg:hidden p-4 text-black bg-white"
//         onClick={toggleNavbar}
//       >
//         {isNavbarOpen ? 'Close' : 'Menu'}
//       </button>

//       {/* Left Sidebar (Navbar) */}
//       <nav
//         className={`w-full lg:w-[250px] bg-gray-100 h-screen px-4 py-6 overflow-y-auto border-b lg:border-r lg:border-gray-300 ${
//           isNavbarOpen ? 'block' : 'hidden lg:block'
//         }`}
//       >
//         {/* Sections */}
//         <ul className="space-y-6">
//           {/* New Section */}
//           <li>
//             <h2 className="font-bold text-lg text-black mb-4">New (500)</h2>
//             <ul className="space-y-2 pl-2">
//               {[
//                 'Shoes',
//                 'Sports Bras',
//                 'Tops & T-Shirts',
//                 'Hoodies & Sweatshirts',
//                 'Jackets',
//                 'Trousers & Tights',
//                 'Shorts',
//                 'Tracksuits',
//                 'Jumpsuits & Rompers',
//                 'Skirts & Dresses',
//                 'Socks',
//                 'Accessories & Equipment',
//               ].map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href="#"
//                     className="text-black hover:text-gray-800 hover:underline"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </li>

//           {/* Gender Section */}
//           <li>
//             <h2
//               className="font-bold text-lg text-black cursor-pointer flex justify-between items-center"
//               onClick={() => toggleSection('gender')}
//             >
//               Gender
//               <span>
//                 {openSection.gender ? (
//                   <span>&#9650;</span> // Up arrow
//                 ) : (
//                   <span>&#9660;</span> // Down arrow
//                 )}
//               </span>
//             </h2>
//             {openSection.gender && (
//               <ul className="space-y-2 pl-4 mt-2">
//                 {['Men', 'Women', 'Unisex'].map((item, index) => (
//                   <li key={index}>
//                     <label className="flex items-center space-x-2">
//                       <input
//                         type="checkbox"
//                         className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
//                       />
//                       <span className="text-black">{item}</span>
//                     </label>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           {/* Kids Section */}
//           <li>
//             <h2
//               className="font-bold text-lg text-black cursor-pointer flex justify-between items-center"
//               onClick={() => toggleSection('kids')}
//             >
//               Kids
//               <span>
//                 {openSection.kids ? (
//                   <span>&#9650;</span> // Up arrow
//                 ) : (
//                   <span>&#9660;</span> // Down arrow
//                 )}
//               </span>
//             </h2>
//             {openSection.kids && (
//               <ul className="space-y-2 pl-4 mt-2">
//                 {['Boys', 'Girls'].map((item, index) => (
//                   <li key={index}>
//                     <label className="flex items-center space-x-2">
//                       <input
//                         type="checkbox"
//                         className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
//                       />
//                       <span className="text-black">{item}</span>
//                     </label>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           {/* Shop By Price Section */}
//           <li>
//             <h2
//               className="font-bold text-lg text-black cursor-pointer flex justify-between items-center"
//               onClick={() => toggleSection('price')}
//             >
//               Shop By Price
//               <span>
//                 {openSection.price ? (
//                   <span>&#9650;</span> // Up arrow
//                 ) : (
//                   <span>&#9660;</span> // Down arrow
//                 )}
//               </span>
//             </h2>
//             {openSection.price && (
//               <ul className="space-y-2 pl-4 mt-2">
//                 {['Under ₹ 2 500.00', '₹ 2 501.00 - ₹ 7 500.00'].map(
//                   (item, index) => (
//                     <li key={index}>
//                       <label className="flex items-center space-x-2">
//                         <input
//                           type="checkbox"
//                           className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
//                         />
//                         <span className="text-black">{item}</span>
//                       </label>
//                     </li>
//                   )
//                 )}
//               </ul>
//             )}
//           </li>
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Product 1 */}
//           <div className="bg-white p-4 shadow-lg rounded-lg">
//             <a href="/product/1">
//               <img
//                 src="/1st.svg"
//                 alt="Product 1"
//                 className="w-full h-100 mb-4"
//               />
//             </a>
//           </div>

//           {/* Product 2 */}
//           <div className="bg-white p-4 shadow-lg rounded-lg">
//             <a href="/product/2">
//               <img
//                 src="/2nd.svg"
//                 alt="Product 2"
//                 className="w-full h-100 mb-4"
//               />
//             </a>
//           </div>

//           {/* Product 3 */}
//           <div className="bg-white p-4 shadow-lg rounded-lg">
//             <a href="/Details">
//               <img
//                 src="/3rd.svg"
//                 alt="Product 3"
//                 className="w-full h-100 mb-4"
//               />
//             </a>
//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="mt-12">
//           <img
//             src="/items.svg"
//             alt="Hero Image"
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewFeaturePage;










'use client';
import React, { useState } from 'react';

const NewFeaturePage = () => {
  // State to manage open/close sections in the sidebar
  const [openSection, setOpenSection] = useState<{
    gender: boolean;
    price: boolean;
    kids: boolean;
  }>({
    gender: true,
    price: true,
    kids: true,
  });

  // State to manage navbar open/close (for mobile)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Toggle open/close sections
  const toggleSection = (section: 'gender' | 'price' | 'kids') => {
    setOpenSection((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Toggle navbar open/close for mobile
  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Toggle Button for Navbar (Mobile) */}
      <button
        className="lg:hidden p-4 text-black bg-white"
        onClick={toggleNavbar}
      >
        {isNavbarOpen ? 'Close' : 'Menu'}
      </button>

      {/* Left Sidebar (Navbar) */}
      <nav
        className={`w-full lg:w-[250px] bg-gray-100 h-screen px-4 py-6 overflow-y-auto border-b lg:border-r lg:border-gray-300 ${
          isNavbarOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        {/* Sections */}
        <ul className="space-y-6">
          {/* New Section */}
          <li>
            <h2 className="font-bold text-lg text-black mb-4">New (500)</h2>
            <ul className="space-y-2 pl-2">
              {[
                'Shoes',
                'Sports Bras',
                'Tops & T-Shirts',
                'Hoodies & Sweatshirts',
                'Jackets',
                'Trousers & Tights',
                'Shorts',
                'Tracksuits',
                'Jumpsuits & Rompers',
                'Skirts & Dresses',
                'Socks',
                'Accessories & Equipment',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-black hover:text-gray-800 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Gender Section */}
          <li>
            <h2
              className="font-bold text-lg text-black cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection('gender')}
            >
              Gender
              <span>
                {openSection.gender ? (
                  <span>&#9650;</span> // Up arrow
                ) : (
                  <span>&#9660;</span> // Down arrow
                )}
              </span>
            </h2>
            {openSection.gender && (
              <ul className="space-y-2 pl-4 mt-2">
                {['Men', 'Women', 'Unisex'].map((item, index) => (
                  <li key={index}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="text-black">{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Kids Section */}
          <li>
            <h2
              className="font-bold text-lg text-black cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection('kids')}
            >
              Kids
              <span>
                {openSection.kids ? (
                  <span>&#9650;</span> // Up arrow
                ) : (
                  <span>&#9660;</span> // Down arrow
                )}
              </span>
            </h2>
            {openSection.kids && (
              <ul className="space-y-2 pl-4 mt-2">
                {['Boys', 'Girls'].map((item, index) => (
                  <li key={index}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="text-black">{item}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Shop By Price Section */}
          <li>
            <h2
              className="font-bold text-lg text-black cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection('price')}
            >
              Shop By Price
              <span>
                {openSection.price ? (
                  <span>&#9650;</span> // Up arrow
                ) : (
                  <span>&#9660;</span> // Down arrow
                )}
              </span>
            </h2>
            {openSection.price && (
              <ul className="space-y-2 pl-4 mt-2">
                {['Under ₹ 2 500.00', '₹ 2 501.00 - ₹ 7 500.00'].map(
                  (item, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                        />
                        <span className="text-black">{item}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <a href="/product/1">
              <img
                src="/1st.svg"
                alt="Product 1"
                className="w-full h-100 mb-4"
              />
            </a>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <a href="/product/2">
              <img
                src="/2nd.svg"
                alt="Product 2"
                className="w-full h-100 mb-4"
              />
            </a>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <a href="/Details">
              <img
                src="/3rd.svg"
                alt="Product 3"
                className="w-full h-100 mb-4"
              />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12">
          <img
            src="/items.svg"
            alt="Hero Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NewFeaturePage;
