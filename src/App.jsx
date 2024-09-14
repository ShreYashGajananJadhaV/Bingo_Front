import React from "react";
import Table from "./components/Table";

function App() {
  return (
    <div className=" h-auto flex-wrap p-2 bg-yellow-500">
      <h1 className="text-3xl font-serif text-center mb-4 rounded-lg bg-slate-600 ">
        BINGO !
      </h1>
      <div class="flex flex-col justify-center items-center">
        <div class="max-w-md p-6 rounded-2xl shadow-md bg-gray-200">
          <h2 class="text-3xl font-bold mb-4 text-blue-600">
            Enter Your Details
          </h2>
          <form>
            <div class="flex flex-col mb-4">
              <label
                for="first-name"
                class="text-sm font-bold mb-1 text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="first-name"
                class="w-full p-2 pl-10 text-lg text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John"
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                for="connection-code"
                class="text-sm font-bold mb-1 text-gray-600"
              >
                Connection Code
              </label>
              <input
                type="text"
                id="connection-code"
                class="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="XXXX-XXXX"
              />
            </div>
            <div class="flex justify-between mb-4 space-x-4">
              <button class="w-full md:w-1/2 p-2 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-lg">
                Generate Code
              </button>
              <button class="w-full md:w-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="p-5 flex-wrap">
        <Table />
      </div>
    </div>
  );
}

export default App;
