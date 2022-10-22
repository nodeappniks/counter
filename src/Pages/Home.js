import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(-1)}>Go Back</div>
      <div>I am in Home Page</div>
    </>
  );
}
