import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black z-[20] opacity-70">
      <div className="animate-spin rounded-full border-t-4 border-white border-solid h-12 w-12"></div>
    </div>
  );
};

export default Loader;
