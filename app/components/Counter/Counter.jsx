"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2 className="text-center my-4 text-3xl font-bold">Counter App</h2>
      <div className="w-1/3 mx-auto p-6 rounded-lg shadow-lg border-2">
        <h1 className="text-center text-2xl font-bold mb-4">
          Count : {counter}
        </h1>
        <div className="flex justify-between">
          <button
            className={`${
              counter === 5 ? "bg-gray-200" : "bg-green-500"
            } text-white py-1 px-4 rounded-lg text-md font-bold`}
            disabled={counter === 5}
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </button>
          <button
            className="bg-orange-500 text-white py-1 px-4 rounded-lg text-md font-bold"
            onClick={() => setCounter(counter - 1)}
          >
            Decrement
          </button>
          <button
            className="bg-red-500 text-white py-1 px-4 rounded-lg text-md font-bold"
            onClick={() => setCounter(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
