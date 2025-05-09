// import React from "react";
// import assets from '../assets/assets';

// const Navbar = () => {
//     return (
//         <div>
//             <div className="flex items-center py-2 px-0">
//                 <h1 className="text-3xl font-bold">
//                     <span style={{ color: 'orange' }}>A</span>
//                     <span style={{ color: 'green' }}>dmin Panel</span>
//                 </h1>
//                 <img  className= 'w-[max(10%,80px)]'src={assets.adminLogo} alt="BrandLogo" className="w-10 h-auto ml-2" />
//             </div>
//             <button className="bg-">Logout</button>
//         </div>
//     );
// };

// export default Navbar;

















import React from "react";
import assets from '../assets/assets';

const Navbar = ({setToken}) => {
    return (
        <div className="flex items-center justify-between px-[4%] py-2 sm:px-6">
            <div className="flex flex-col">
                {/* Logo Section */}
                <div className="flex items-center px-0 w-[max(10%, 80px)]">
                    <h1 className="text-3xl font-bold">
                        <span style={{ color: 'orange' }}>J</span>
                        <span style={{ color: 'green' }}>ellyCat</span>
                    </h1>
                    <img src={assets.adminLogo} alt="BrandLogo" className="w-10 h-auto ml-1" />
                </div>

                {/* Admin Section with Reduced Space */}
                <h4 className="text-lg font-bold text-black-400 -mt-1">
                    Admin
                </h4>
            </div>

            <button onClick={()=> setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-xs">
                Logout
            </button>
        </div>
    );
};

export default Navbar;



