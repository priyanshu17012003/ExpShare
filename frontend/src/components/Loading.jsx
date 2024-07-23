import React from "react";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full bg-green-500"></div>
        <div className="skeleton h-4 w-28 bg-green-400"></div>
        <div className="skeleton h-4 w-full bg-green-300"></div>
        <div className="skeleton h-4 w-full bg-green-200"></div>
      </div>
    </div>
  );
}

export default Loading;
