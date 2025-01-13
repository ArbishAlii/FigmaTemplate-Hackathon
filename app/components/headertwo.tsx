'use client'

const HeaderTwo = () => {
  return (
    <div className="bg-gray-100 px-4 py-6 sm:px-8 sm:py-8">
      {/* Header Text */}
      <div className="flex items-center justify-center text-center">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
          Hello Nike App
        </h2>
      </div>

      {/* Description Text and Link */}
      <div className="flex items-center justify-center text-center mt-4 sm:mt-6">
        <p className="text-base sm:text-lg text-black">
          Download the app to access everything Nike.{" "}
          <a href="#" className="font-bold text-blue-500 hover:underline">Get Your Great</a>
        </p>
      </div>
    </div>
  );
};

export default HeaderTwo;
