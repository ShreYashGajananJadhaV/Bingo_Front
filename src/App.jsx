import React from "react";
import { useState } from "react";
import Table from "./components/Table";
import Details from "./components/Details";
import MessageContext from "./components/MessageContext";

function App() {
  const [message, setMessage] = useState(null);
  const [Num, setNum] = useState(1);
  const [connected, setConnected] = useState(false);
  const [stompClient, setStompClient] = useState(null);
  const [name, setName] = useState("");
  const [groupId, setGroupId] = useState("");
  const [constValMap, setConstValMap] = useState({});

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
        constValMap,
        setConstValMap,
      }}
    >
      <div className="h-max flex-grow  flex-wrap p-2" data-theme="dim">
        <h1 className="text-3xl font-serif text-center mb-4 rounded-lg bg-slate-600 ">
          BINGO !
        </h1>
        <Details />
        <Table />
      </div>
    </MessageContext.Provider>
  );
}

export default App;
