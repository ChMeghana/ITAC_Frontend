
// // import { Images } from "../assets/images";

// // const Header = () => {
// //   return (
// //     <header className="w-full bg-white">

// //       <div className="w-full max-w-[1330px] mx-auto">
// //         <div className="flex items-center h-10 md:h-20 lg:h-30 justify-between pr-15">

// //           {/* LEFT + MIDDLE */}
// //           {/* <div className="flex items-center gap-15"> */}
// //             <img
// //               src={Images.osuItacLogo}
// //               alt="OSU"
// //               className="h-10 md:h-20 lg:h-30 w-auto object-contain"
// //             />

// //             <img
// //               src={Images.peteBackground}
// //               alt="Pete Background Logo"
// //               className="h-10 md:h-20 lg:h-30 w-auto object-contain opacity-10"
// //             />
// //           {/* </div> */}

// //           {/* RIGHT LOGO */}
// //           <img
// //             src={Images.itacLogo}
// //             alt="ITAC"
// //             className="h-10 md:h-20 lg:h-30 w-auto object-contain ml-auto"
// //           />

// //         </div>
// //       </div>

// //       <div className="h-1 bg-orange-600 w-full" />
// //     </header>
// //   );
// // };

// // export default Header;


// import { Images } from "../assets/images";

// const Header = () => {
//   return (
//     <header className="w-full bg-white">

//       <div className="w-full max-w-[1330px] mx-auto">
//         <div className="flex items-center h-10 md:h-20 lg:h-30 relative pr-40">

//           {/* LEFT IMAGE */}
//           <img
//             src={Images.osuItacLogo}
//             alt="OSU"
//             className="h-10 md:h-20 lg:h-30 w-auto object-contain"
//           />

//           {/* CENTER IMAGE */}
//           <img
//             src={Images.peteBackground}
//             alt="Center Logo"
//             className="h-10 md:h-20 lg:h-30 z--1 w-[60vw] object-contain opacity-15 mx-auto"
//           />

//           {/* RIGHT IMAGE */}
//           <img
//             src={Images.itacLogo}
//             alt="ITAC"
//             className="h-10 md:h-20 lg:h-30 w-auto object-contain"
//           />

//         </div>
//       </div>

//       {/* ORANGE DIVIDER */}
//       <div className="h-1 bg-orange-600 w-full" />
//     </header>
//   );
// };

// export default Header;

import { Images } from "../assets/images";

const Header = () => {
  return (
    <header className="w-full bg-white ">

      <div className="w-full max-w-[1330px] mx-auto overflow-hidden">
        <div className="relative flex items-center h-10 md:h-20 lg:h-30 pr-36 -mb-3 ">

          {/* CENTER IMAGE — BACKGROUND */}
          <img
            src={Images.peteBackground}
            alt="Center Background Logo"
            className="
  absolute
  left-1/2
  -translate-x-1/2
  h-10 md:h-20 lg:h-30
  w-[120vw]
  scale-110
  object-contain
  opacity-15
  z-0
  pointer-events-none
"
          />

          {/* LEFT IMAGE */}
          <img
            src={Images.osuItacLogo}
            alt="OSU"
            className="h-10 md:h-20 lg:h-30 w-auto object-contain relative z-10"
          />

          {/* RIGHT IMAGE */}
          <img
            src={Images.itacLogo}
            alt="ITAC"
            className="h-10 md:h-20 lg:h-30 w-auto object-contain ml-auto relative z-10"
          />

        </div>
      </div>

      {/* ORANGE DIVIDER */}
      <div className="h-1.5 bg-orange-600 w-full" />
    </header>
  );
};

export default Header;
