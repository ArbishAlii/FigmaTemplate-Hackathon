import HeaderTwo from "./components/headertwo";
import HeroImage from "./components/hero";
import BestOfAirMaxSection from "./components/air";
import  {Featured}  from "./components/featured";


export default function Home() {
  return (
    <div className="w-full">
      <HeaderTwo />
      <HeroImage />
      <BestOfAirMaxSection />
      <Featured />
      
    </div>
  );
}
