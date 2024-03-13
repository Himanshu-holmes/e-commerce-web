import Grocery from "@/components/Grocery";
import Laptop from "@/components/Laptop";
import Mobile from "@/components/Mobile";
import SwiperComp from "@/components/Swiper";


export default function Home() {
  return (
    <div>
     {/* swiper */}
     <div className="relative">
     <SwiperComp/>
     </div>
     <Grocery/>
     <Mobile/>
     <Laptop/>
    
    </div>
  );
}
