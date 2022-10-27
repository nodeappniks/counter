import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";

export default function Home() {
  let navigate = useNavigate();
  let handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };
  return (
    <>
      {/* <div onClick={() => navigate(-1)}>Go Back</div> */}

      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <div>I am in Home Page</div> */}
      <SideBar />
    </>
  );
}
