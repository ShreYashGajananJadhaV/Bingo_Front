import React from "react";
import { useState } from "react";
import Table from "./components/Table";
import Details from "./components/Details";
import MessageContext from "./components/MessageContext";

function App() {
  const [message, setMessage] = useState(null);
  const [Num, setNum] = useState(1);
  const [connected, setConnected] = useState(false);
  var [stompClient, setStompClient] = useState(null);
  const [name, setName] = useState("");
  const [groupId, setGroupId] = useState("");

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
        stompClient,
        setStompClient,
        Num,
        setNum,
        connected,
        setConnected,
        name,
        setName,
        groupId,
        setGroupId,
      }}
    >
      <div className=" h-auto w-auto flex-wrap p-2 bg-yellow-500">
        <h1 className="text-3xl font-serif text-center mb-4 rounded-lg bg-slate-600 ">
          BINGO !
        </h1>
        <Details />
        <div className="p-5 flex-wrap">
          <Table />
        </div>
      </div>
    </MessageContext.Provider>
  );
}

export default App;
