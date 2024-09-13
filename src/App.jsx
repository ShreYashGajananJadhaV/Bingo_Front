import React from "react";
import Table from "./components/Table";

function App() {
  return (
    <div className="container mx-auto  p-4 bg-yellow-500">
      <h1 className="text-3xl font-serif text-center mb-4 rounded-lg bg-slate-600 ">
        BINGO !
      </h1>
      <div className="p-12">
        <Table />
      </div>
    </div>
  );
}

export default App;
