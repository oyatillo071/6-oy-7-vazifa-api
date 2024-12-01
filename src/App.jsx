import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Repositories from "./pages/Repositories";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import { https } from "./axios";

// function App() {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     https
//       .get("photos")
//       .then((response) => {
//         console.log(response);
//         if (response.status == 200) {
//           setPhotos(response.data);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return <div></div>;
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);
//   const [counter3, setCounter3] = useState(0);

//   useEffect(() => {
//     console.log("Refreshed site");
//   }, []);

//   useEffect(() => {
//     console.log("counter 1 yoki 2 ozgardi");
//   }, [counter1, counter2]);

//   useEffect(() => {
//     console.log("Rendered");
//   });

//   return (
//     <div>
//       <span>{counter1}</span>
//       <span>{counter2}</span>
//       <span>{counter3}</span>
//       <button
//         onClick={() => {
//           setCounter1(counter1 + 1);
//         }}>
//         Button1
//       </button>
//       <button
//         onClick={() => {
//           setCounter2(counter2 + 1);
//         }}>
//         Button2
//       </button>
//       <button
//         onClick={() => {
//           setCounter3(counter3 + 1);
//         }}>
//         Button3
//       </button>
//     </div>
//   );
// }

// export default App;
