
// import { Images } from "../assets/images";

// const Header = () => {
//   return (
//     <header className="w-full bg-white">

//       <div className="w-full max-w-[1330px] mx-auto">
//         <div className="flex items-center h-10 md:h-20 lg:h-30 justify-between pr-15">

//           {/* LEFT + MIDDLE */}
//           {/* <div className="flex items-center gap-15"> */}
//             <img
//               src={Images.osuItacLogo}
//               alt="OSU"
//               className="h-10 md:h-20 lg:h-30 w-auto object-contain"
//             />

//             <img
//               src={Images.peteBackground}
//               alt="Pete Background Logo"
//               className="h-10 md:h-20 lg:h-30 w-auto object-contain opacity-10"
//             />
//           {/* </div> */}

//           {/* RIGHT LOGO */}
//           <img
//             src={Images.itacLogo}
//             alt="ITAC"
//             className="h-10 md:h-20 lg:h-30 w-auto object-contain ml-auto"
//           />

//         </div>
//       </div>

//       <div className="h-1 bg-orange-600 w-full" />
//     </header>
//   );
// };

// export default Header;


import { Images } from "../assets/images";

const Header = () => {
  return (
    <header className="w-full bg-white">

      <div className="w-full max-w-[1330px] mx-auto">
        <div className="flex items-center h-10 md:h-20 lg:h-30 relative pr-30">

          {/* LEFT IMAGE */}
          <img
            src={Images.osuItacLogo}
            alt="OSU"
            className="h-10 md:h-20 lg:h-30 w-auto object-contain"
          />

          {/* CENTER IMAGE */}
          <img
            src={Images.peteBackground}
            alt="Center Logo"
            className="h-10 md:h-20 lg:h-30 w-auto object-contain opacity-10 mx-auto"
          />

          {/* RIGHT IMAGE */}
          <img
            src={Images.itacLogo}
            alt="ITAC"
            className="h-10 md:h-20 lg:h-30 w-auto object-contain"
          />

        </div>
      </div>

      {/* ORANGE DIVIDER */}
      <div className="h-1 bg-orange-600 w-full" />
    </header>
  );
};

export default Header;
