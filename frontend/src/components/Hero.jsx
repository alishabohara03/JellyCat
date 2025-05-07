



// import React from "react";
// import assets from "../assets/assets";

// const Hero = () => {
//     return (
//         <div className="flex flex-col sm:flex-row border border-gray-400 h-[400px] mt-0 bg-white">
//             {/* Hero left Side */}
//             <div className="w-full sm:w-1/2 flex items-center justify-center py-4 sm:py-4">
//                 <div className="text-[#414141] px-4">
//                     <div className="flex items-center gap-2">
//                         <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//                         <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
//                     </div>
//                     <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed sm:py-1">
//                         LATEST ARRIVAL
//                     </h1>
//                     <div className="flex items-center gap-2">
//                         <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
//                         <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//                     </div>
//                 </div>
//             </div>

//             {/* Hero Right Side */}
//             <img src={assets.blissfulbunny} alt="" className="w-full sm:w-1/2 flex items-center justify-center object-contain h-[400px]" />
//         </div>
//     );
// }
// export default Hero






import React from "react";
import assets from "../assets/assets";

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row border border-gray-400 h-[400px] mt-0 bg-white mx-4 overflow-hidden">

            {/* Hero left Side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-4 sm:py-4">
                <div className="text-[#414141] px-4">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        <p className="font-medium text-sm md:text-base uppercase tracking-wide">Snuggle Stars</p>
                    </div>
                    <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed sm:py-1">
                        New Plushies, Endless Hugs
                    </h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base hover:underline cursor-pointer">Discover Cozy Joy</p>
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}
            <img src={assets.blissfulbunny} alt="" className="w-full sm:w-1/2 flex items-center justify-center object-contain h-[400px]" />
        </div>
    );
}

export default Hero;
