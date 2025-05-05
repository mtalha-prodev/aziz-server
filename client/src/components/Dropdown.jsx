import React, { useState } from "react";

const Dropdown = ({ data }) => {
  const [key, setKey] = useState("");
  return (
    <div className="border rounded p-2 bg-gray-50 w-24 absolute top-10 right-0 ">
      {data.map((item, index) => {
        console.log(item.color);
        return (
          <button
            className={`flex flex-col my-1 border-b border-slate-300 w-full py-1 ${
              index == key && `bg-[${item.color}]`
            }`}
            onClick={item.action}
            onMouseEnter={() => setKey(index)}
            key={index}
          >
            <i>{item.icon}</i>
            <i>{item.icon}</i>
            <p className="text-black font-medium text-sm">{item.name}</p>
          </button>
        );
      })}
    </div>
  );
};

export default Dropdown;
