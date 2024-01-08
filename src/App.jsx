import { useState } from "react";

import "./App.css";
import { Button } from "react-bootstrap";
import { BsAmd } from "react-icons/bs";
import { Bs5SquareFill } from "react-icons/bs";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
