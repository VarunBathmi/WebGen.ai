// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import useGetCurrentUser from "./hooks/useGetCurrentuser";
// export const serverUrl = "http://localhost:5000";
// const App = () => {
//   useGetCurrentUser();
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import useGetCurrentUser from "./hooks/useGetCurrentuser";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Generate from "./pages/Generate";

export const serverUrl = "http://localhost:8000"; // ✅ fixed: was 8000

const App = () => {
  useGetCurrentUser();
  const { userData } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={userData ? <Dashboard /> : <Home />}
          />
          <Route
            path="/generate"
            element={userData ? <Generate /> : <Home />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
