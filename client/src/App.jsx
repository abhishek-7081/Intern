// // src/App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// // import PostGig from "./pages/PostGig";
// // import GigDetails from "./pages/GigDetails";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";
// // import { socket } from "./socket";
// // App.jsx
// import ProtectedRoute from "./components/ProtectedRoute";


// // useEffect(() => {
// //   socket.emit("register", userId); // after login
// // }, []);

// // socket.on("hired", (data) => {
// //   alert(data.message);
// // });


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/post" element={
//           <ProtectedRoute>
//             <PostGig />
//           </ProtectedRoute>
//         } />

//         <Route path="/dashboard" element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         } />

//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* <Route path="/post" element={<PostGig />} /> */}
//         <Route path="/gig/:id" element={<GigDetails />} />
//         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import PostGig from "./pages/PostGig";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/post" element={<PostGig />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostGig from "./pages/PostGig";
import Dashboard from "./pages/Dashboard";
import GigDetails from "./pages/GigDetails";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gig/:id" element={<GigDetails />} />

        {/* Protected Routes */}
        <Route
          path="/post"
          element={
            <ProtectedRoute>
              <PostGig />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
