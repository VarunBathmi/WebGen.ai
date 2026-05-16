// import React from "react";
// import { AnimatePresence, motion } from "motion/react";
// import { useState } from "react";
// import LoginModal from "../components/LoginModal";
// import { useDispatch, useSelector } from "react-redux";
// import { Coins } from "lucide-react";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { setUserData } from "../redux/userSlice";
// const Home = () => {
//   const highlights = [
//     "AI Generated Code",
//     "Fully Responsive Layouts",
//     "Production Ready Output",
//   ];

//   const [openLogin, setOpenLogin] = useState(false);
//   const { userData } = useSelector((state) => state.user);
//   const [openProfile, setOpenProfile] = useState(false);
//   const dispatch = useDispatch();

//   const handleLogOut = async () => {
//     try {
//       await axios.get(`${serverUrl}/api/auth/logout`, {
//         withCredentials: true,
//       });
//       dispatch(setUserData(null));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">
//       <motion.div
//         initial={{ y: -40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="
// fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ">
//           {/* left side */}
//           <div className="text-lg font-semibold">WebGen.ai</div>
//           {/* right side */}
//           <div className="flex items-center gap-5">
//             <div className="hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer">
//               Pricing
//             </div>
//             {userData && (
//               <div className="hidden  md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm cursor-pointer hover:bg-white/10 transition">
//                 <Coins size={14} className="text-yellow-400" />
//                 <span className="text-zinc-300">Credits</span>
//                 <span>{userData?.credits}</span>
//                 <span className="font-semibold">+</span>
//               </div>
//             )}

//             {!userData ? (
//               <button
//                 className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm"
//                 onClick={() => setOpenLogin(true)}
//               >
//                 Get Started
//               </button>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setOpenProfile(!openProfile)}
//                   className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
//                 >
//                   {" "}
//                   <img
//                     src={
//                       userData?.avatar ||
//                       `https://ui-avatars.com/api/?name=${userData?.name}`
//                     }
//                     alt={userData?.name}
//                     onError={(e) => {
//                       e.target.src = `https://ui-avatars.com/api/?name=${userData?.name}`;
//                     }}
//                     className="w-9 h-9 rounded-full border border-white/20 object-cover"
//                   />
//                 </button>

//                 <AnimatePresence>
//                   {openProfile && (
//                     <>
//                       <motion.div
//                         initial={{ opacity: 0, y: -10, scale: 0.95 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: -10, scale: 0.95 }}
//                         className="absolute right-0 mt-3 w-60 z-50 rounded-xl bg-[#0b0b0b] border border-white/10 shadow-2xl overflow-hidden"
//                       >
//                         <div className="px-4 py-3 border-b border-white/10">
//                           <p className="text-sm font-medium truncate">
//                             {userData.name}
//                           </p>
//                           <p className="text-xs text-zinc-500 truncate">
//                             {userData.email}
//                           </p>
//                         </div>

//                         <button className="md:hidden w-full px-4 py-3 flex items-center gap-2 text-sm border-b border-white/10 hover:bg-white/5">
//                           <Coins size={14} className="text-yellow-400" />
//                           <span className="text-zinc-300">Credits</span>
//                           <span>{userData?.credits}</span>
//                           <span className="font-semibold">+</span>
//                         </button>

//                         <button className="w-full px-4 py-3 text-left text-sm hover:bg-white/5">
//                           Dashboard
//                         </button>
//                         <button  onClick={handleLogOut} className="w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-white/5">
//                           Logout
//                         </button>
//                       </motion.div>
//                     </>
//                   )}
//                 </AnimatePresence>
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.div>
//       <section className="pt-44 pb-32 px-6 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-5xl md:text-7xl font-bold tracking-tight"
//         >
//           Build Stunning Websites <br />
//           <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//             with AI{" "}
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-8 max-w-2xl mx-auto text-zinc-400 text-lg"
//         >
//           {" "}
//           Describe your idea and let AI generate a modern,
//           responsive,production-ready website
//         </motion.p>

//         <button className="mt-12 px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
//           Get Started
//         </button>
//       </section>
//       <section className="max-w-7xl mx-auto px-6 pb-32 ">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {highlights.map((h, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="rounded-2xl bg-white/5 border border-white/10 p-8"
//             >
//               <h1 className="text-xl font-semibold mb-3">{h}</h1>
//               <p className="text-sm text-zinc-400">
//                 WebGen.ai build real websites - clean code,
//                 animations,responsiveness and scalable structure.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
//         &copy; {new Date().getFullYear()} WebGen.ai
//       </footer>
//       {openLogin && (
//         <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { useDispatch, useSelector } from "react-redux";
import { Coins } from "lucide-react";
import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const highlights = [
    "AI Generated Code",
    "Fully Responsive Layouts",
    "Production Ready Output",
  ];

  const [openLogin, setOpenLogin] = useState(false);
  const { userData } = useSelector((state) => state.user);
  const [openProfile, setOpenProfile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileRef = useRef(null); // ✅ for click-outside detection

  // ✅ close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogOut = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });
      dispatch(setUserData(null));
      setOpenProfile(false); // ✅ close dropdown on logout
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold">WebGen.ai</div>
          <div className="flex items-center gap-5">
            <div className="hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer">
              Pricing
            </div>
            {userData && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm cursor-pointer hover:bg-white/10 transition">
                <Coins size={14} className="text-yellow-400" />
                <span className="text-zinc-300">Credits</span>
                <span>{userData?.credits}</span>
                <span className="font-semibold">+</span>
              </div>
            )}

            {!userData ? (
              <button
                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm"
                onClick={() => setOpenLogin(true)}
              >
                Get Started
              </button>
            ) : (
              <div className="relative" ref={profileRef}>
                {" "}
                {/* ✅ attach ref */}
                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={
                      userData?.avatar ||
                      `https://ui-avatars.com/api/?name=${userData?.name}`
                    }
                    alt={userData?.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${userData?.name}`;
                    }}
                    className="w-9 h-9 rounded-full border border-white/20 object-cover"
                  />
                </button>
                <AnimatePresence>
                  {openProfile && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-60 z-50 rounded-xl bg-[#0b0b0b] border border-white/10 shadow-2xl overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-sm font-medium truncate">
                          {userData.name}
                        </p>
                        <p className="text-xs text-zinc-500 truncate">
                          {userData.email}
                        </p>
                      </div>

                      <button className="md:hidden w-full px-4 py-3 flex items-center gap-2 text-sm border-b border-white/10 hover:bg-white/5">
                        <Coins size={14} className="text-yellow-400" />
                        <span className="text-zinc-300">Credits</span>
                        <span>{userData?.credits}</span>
                        <span className="font-semibold">+</span>
                      </button>

                      <button
                        onClick={() => navigate("/dashboard")}
                        className="w-full px-4 py-3 text-left text-sm hover:bg-white/5"
                      >
                        Dashboard
                      </button>
                      <button
                        onClick={handleLogOut}
                        className="w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-white/5"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <section className="pt-44 pb-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Build Stunning Websites <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            with AI{" "}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 max-w-2xl mx-auto text-zinc-400 text-lg"
        >
          Describe your idea and let AI generate a modern, responsive,
          production-ready website
        </motion.p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-12 px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
        >
          {userData ? "Go to dashboard" : "Get Started"}
        </button>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-8"
            >
              <h1 className="text-xl font-semibold mb-3">{h}</h1>
              <p className="text-sm text-zinc-400">
                WebGen.ai builds real websites — clean code, animations,
                responsiveness and scalable structure.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} WebGen.ai
      </footer>

      {openLogin && (
        <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
      )}
    </div>
  );
};

export default Home;

// import React, { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import LoginModal from "../components/LoginModal";
// import SignupModal from "../components/SignupModal"; // Make sure the path matches your structure
// import { useDispatch, useSelector } from "react-redux";
// import { Coins } from "lucide-react";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { setUserData } from "../redux/userSlice";
// import { useNavigate } from "react-router-dom";

// const Home = () => {

//   const highlights = [
//     {
//       title: "AI Generated Code",
//       description:
//         "WebGen.ai builds real websites — clean code, animations, responsiveness and scalable structure.",
//     },
//     {
//       title: "Fully Responsive Layouts",
//       description:
//         "Every design automatically adapts to mobile, tablet, and desktop screens for a flawless user experience.",
//     },
//     {
//       title: "Production Ready Output",
//       description:
//         "Export optimized, deployment-ready code that you can push straight to your hosting platform without extra setup.",
//     },
//     {
//       title: "Lightning Fast Performance",
//       description:
//         "Generated with modern frameworks and best practices to ensure top-tier loading speeds and optimal SEO.",
//     },
//     {
//       title: "Customizable Components",
//       description:
//         "Easily tweak, modify, and style generated sections to perfectly match your brand's unique identity.",
//     },
//     {
//       title: "Seamless Integrations",
//       description:
//         "Connect your generated frontend with your favorite APIs, databases, and third-party tools instantly.",
//     },
//   ];

//   // State to manage both modals
//   const [openLogin, setOpenLogin] = useState(false);
//   const [openSignup, setOpenSignup] = useState(false);

//   const { userData } = useSelector((state) => state.user);
//   const [openProfile, setOpenProfile] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const profileRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setOpenProfile(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogOut = async () => {
//     try {
//       await axios.get(`${serverUrl}/api/auth/logout`, {
//         withCredentials: true,
//       });
//       dispatch(setUserData(null));
//       setOpenProfile(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">
//       <motion.div
//         initial={{ y: -40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="text-lg font-semibold">WebGen.ai</div>
//           <div className="flex items-center gap-5">
//             <div className="hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer">
//               Pricing
//             </div>
//             {userData && (
//               <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm cursor-pointer hover:bg-white/10 transition">
//                 <Coins size={14} className="text-yellow-400" />
//                 <span className="text-zinc-300">Credits</span>
//                 <span>{userData?.credits}</span>
//                 <span className="font-semibold">+</span>
//               </div>
//             )}

//             {!userData ? (
//               <button
//                 className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm"
//                 onClick={() => setOpenLogin(true)}
//               >
//                 Get Started
//               </button>
//             ) : (
//               <div className="relative" ref={profileRef}>
//                 <button
//                   onClick={() => setOpenProfile(!openProfile)}
//                   className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
//                 >
//                   <img
//                     src={
//                       userData?.avatar ||
//                       `https://ui-avatars.com/api/?name=${userData?.name}`
//                     }
//                     alt={userData?.name}
//                     onError={(e) => {
//                       e.target.src = `https://ui-avatars.com/api/?name=${userData?.name}`;
//                     }}
//                     className="w-9 h-9 rounded-full border border-white/20 object-cover"
//                   />
//                 </button>
//                 <AnimatePresence>
//                   {openProfile && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: -10, scale: 0.95 }}
//                       className="absolute right-0 mt-3 w-60 z-50 rounded-xl bg-[#0b0b0b] border border-white/10 shadow-2xl overflow-hidden"
//                     >
//                       <div className="px-4 py-3 border-b border-white/10">
//                         <p className="text-sm font-medium truncate">
//                           {userData.name}
//                         </p>
//                         <p className="text-xs text-zinc-500 truncate">
//                           {userData.email}
//                         </p>
//                       </div>

//                       <button className="md:hidden w-full px-4 py-3 flex items-center gap-2 text-sm border-b border-white/10 hover:bg-white/5">
//                         <Coins size={14} className="text-yellow-400" />
//                         <span className="text-zinc-300">Credits</span>
//                         <span>{userData?.credits}</span>
//                         <span className="font-semibold">+</span>
//                       </button>

//                       <button
//                         onClick={() => navigate("/dashboard")}
//                         className="w-full px-4 py-3 text-left text-sm hover:bg-white/5"
//                       >
//                         Dashboard
//                       </button>
//                       <button
//                         onClick={handleLogOut}
//                         className="w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-white/5"
//                       >
//                         Logout
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.div>

//       <section className="pt-44 pb-32 px-6 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-5xl md:text-7xl font-bold tracking-tight"
//         >
//           Build Stunning Websites <br />
//           <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//             with AI{" "}
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-8 max-w-2xl mx-auto text-zinc-400 text-lg"
//         >
//           Describe your idea and let AI generate a modern, responsive,
//           production-ready website
//         </motion.p>

//         <button
//           onClick={() => navigate("/dashboard")}
//           className="mt-12 px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
//         >
//           {userData ? "Go to dashboard" : "Get Started"}
//         </button>
//       </section>

//       <section className="max-w-7xl mx-auto px-6 pb-32">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {highlights.map((h, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }} // Optional: adds a nice touch so it only animates once
//               className="rounded-2xl bg-white/5 border border-white/10 p-8"
//             >
//               {/* Changed <h1> to <h3> for better SEO and accessibility */}
//               <h3 className="text-xl font-semibold mb-3 text-white">
//                 {h.title}
//               </h3>

//               {/* Now uses the unique description from the object */}
//               <p className="text-sm text-zinc-400 leading-relaxed">
//                 {h.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
//         &copy; {new Date().getFullYear()} WebGen.ai
//       </footer>

//       {/* Login Modal */}
//       {openLogin && (
//         <LoginModal
//           open={openLogin}
//           onClose={() => setOpenLogin(false)}
//           onSwitchToSignup={() => {
//             setOpenLogin(false);
//             setOpenSignup(true);
//           }}
//         />
//       )}

//       {/* Signup Modal */}
//       {openSignup && (
//         <SignupModal
//           open={openSignup}
//           onClose={() => setOpenSignup(false)}
//           onSwitchToLogin={() => {
//             setOpenSignup(false);
//             setOpenLogin(true);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;
