import React from "react";
import { useState } from "react";
import Table from "./components/Table";
import Details from "./components/Details";
import MessageContext from "./components/MessageContext";
import BingoLogo from "./AnimationComponents/bingologo.json";
import Lottie from "lottie-react";
function App() {
  const [message, setMessage] = useState(null);
  const [Num, setNum] = useState(1);
  const [connected, setConnected] = useState(false);
  const [stompClient, setStompClient] = useState(null);
  const [name, setName] = useState("");
  const [groupId, setGroupId] = useState("");
  const [constValMap, setConstValMap] = useState({});
  const [chance, setChance] = useState(true);
  const [rowsCompleted, setRowsCompleted] = useState(0);
  const [opponentName, setOpponentName] = useState("");
  const [connecting, setConnecting] = useState(false);

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
        chance,
        setChance,
        rowsCompleted,
        setRowsCompleted,
        opponentName,
        connecting,
        setConnecting,
        setOpponentName,
      }}
    >
      <div className="h-max flex-grow  flex-wrap p-2" data-theme="dracula">

        <div>
          <Lottie
            className="w-[130px] h-[130px] m-auto"
            animationData={BingoLogo}
          ></Lottie>
        </div>
        <Details />
        <h2 className="flex justify-center font-bold">
          {connected && opponentName
            ? chance
              ? "YOUR CHANCE TO PLAY"
              : `${opponentName.toUpperCase()} IS PLAYING`
            : ""}
        </h2>
        <Table />
      </div>
    </MessageContext.Provider>
  );
}

export default App;
