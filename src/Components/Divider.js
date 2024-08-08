import React from "react";

function Divider({ text }) {
  return (
    <div class="flex items-center justify-center my-4">
      <div class="flex-grow border-t border-gray-300"></div>
      <span class="mx-4 text-gray-500">{text}</span>
      <div class="flex-grow border-t border-gray-300"></div>
    </div>
  );
}

export default Divider;
