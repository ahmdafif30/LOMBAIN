import React from "react";
import Label from "../Input/Label";
import Input from "../Input/Input";

function Authlayout(props) {
  const {title, type} = props

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs ">
        <h1 className="text-3xl bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% bg-clip-text text-transparent font-bold mb-2">Login</h1>
        <p className="mb-5">Welcome, please enter your details</p>
        <Label>{title}</Label>
        <Input type={type} />
      </div>
    </div>
  );
}

export default Authlayout;
