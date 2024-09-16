import React from "react";
import Table from "./components/Table";
import Details from "./components/Details";
function App() {
  return (
    <div className=" h-auto w-auto flex-wrap p-2 bg-yellow-500">
      <h1 className="text-3xl font-serif text-center mb-4 rounded-lg bg-slate-600 ">
        BINGO !
      </h1>
      <Details />
      <div className="p-5 flex-wrap">
        <Table />
      </div>
    </div>
  );
}

export default App;
