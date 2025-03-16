import React from "react";
import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-5">
      <Logo />
      <Navbar />
    </div>
  );
}
