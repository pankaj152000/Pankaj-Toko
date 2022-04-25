import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import SignIn from "./pages/Sign-in/Sign-in";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
