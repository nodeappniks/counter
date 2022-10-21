import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/">Go Back</Link>
      <div>I am in Home Page</div>
    </>
  );
}
