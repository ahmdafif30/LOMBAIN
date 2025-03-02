import React from "react";

function Label(props) {
  const { htmlFor = "....", children = "...." } = props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-semibold mb-2">
      {children}
    </label>
  );
}

export default Label;
