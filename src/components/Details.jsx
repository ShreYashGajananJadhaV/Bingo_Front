import React, { useState, useContext } from "react";
import SockJS from "sockjs-client";
import MessageContext from "./MessageContext";
import { Stomp } from "@stomp/stompjs";
import { RingLoader } from "react-spinners";

function Details() {
  const {
    setMessage,
    setStompClient,
    stompClient,
    Num,
    connected,
    setConnected,
    name,
    setName,
    groupId,
    setGroupId,
    constValMap,
  } = useContext(MessageContext);

  const [connecting, setConnecting] = useState(false);

  function generateRandomCode() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    let randomCode = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters[randomIndex];
    }
    setGroupId(randomCode);
  }

  // communist-candi-shreyashjadhav-baaa549c.koyeb.app

  function sendConnectionRequest() {
    // debugger;
    if (!Num || Num < 25) {
      setTimeout(() => {
        alert("------PLEASE FILL THE TABLE FIRST-----");
      }, 100);
      return;
    }

    let sock = new SockJS(
      `https://communist-candi-shreyashjadhav-baaa549c.koyeb.app/ws?groupId=${groupId}&user=${name}`
    );
    var stompClient = Stomp.over(sock);
    setStompClient(stompClient);
    setConnecting(true);

    stompClient.connect(
      {},
      () => {
        setConnected(true);

        stompClient.subscribe(`/queue/${groupId}`, (message) => {
          // setMessage(message.body);
        });

        stompClient.subscribe(`/user/${groupId}/${name}`, (message) => {
          setMessage(message.body);
        });

        stompClient.send(
          "/app/sendPlayerMap",
          {},
          JSON.stringify({
            name: name,
            groupId: groupId,
            constValMap: constValMap,
          })
        );
        setConnecting(false);
        alert("CONNECTED");
      },
      (error) => {
        setConnecting(false);
        console.log("I am in ERROR =BLOCK");
        if (error.headers) {
          console.log("Error headers:", error.headers);
        }
        if (error.body) {
          console.log("Error body:", error.body);
        }
      },
      () => {
        setConnecting(false);
        alert("---Connection Disabled----");
        setConnected(false);
      }
    );
  }

  const handleGrouopIdChange = (e) => {
    setGroupId(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  return (
    <div class=" flex flex-col justify-center items-center">
      <div
        class="max-w-md p-6 rounded-2xl shadow-md border-2"
        data-theme="halloween"
      >
        <h2 class="text-center text-3xl font-bold mb-4 text-blue-500">
          Enter Your Details
        </h2>
        <div
          className={
            connecting
              ? "fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"
              : "hidden"
          }
        ></div>

        <div
          className={
            connecting
              ? "flex justify-center items-center fixed inset-0 z-20"
              : "hidden"
          }
        >
          <RingLoader speedMultiplier={1.4} size={160} color="#36d80a" />
        </div>

        <div>
          <div class="flex flex-col mb-4">
            <label
              for="first-name"
              class="text-sm font-bold mb-1 text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="first-name"
              class="w-full p-2 pl-10 text-lg font-mono text-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Mickey"
              onChange={handleName}
              disabled={connecting || connected}
            />
          </div>
          <div class="flex flex-col mb-4">
            <label
              for="connection-code"
              class="text-sm font-bold mb-1 text-gray-400"
            >
              Connection Code
            </label>
            <input
              type="text"
              value={groupId}
              id="connection-code"
              class="w-full p-2 pl-10 text-md font-mono text-gray-200 border border-gray-300 rounded-lg outline-none focus:ring ring-white focus:ring-blue-600"
              placeholder="XXXX-XXXX"
              onChange={handleGrouopIdChange}
              disabled={connecting || connected}
            />
          </div>
          <div class="flex justify-between mb-4 space-x-4">
            <button
              className={` glass w-full md:w-1/2 p-2 text-gray-100 font-mono font-bold outline-none focus:ring-2 ring-slate-300  shadow-lg rounded-2xl transform active:scale-90 transition-transform ${
                connecting || connected ? "cursor-not-allowed" : ""
              }`}
              data-theme="aqua"
              onClick={() => generateRandomCode()}
              disabled={connecting || connected}
            >
              Generate Code
            </button>
            <button
              class={`glass w-full md:w-1/2 p-2 text-gray-100 font-mono font-bold  focus:ring-2 ring-slate-300 shadow-lg rounded-2xl transform active:scale-90 transition-transform${
                connecting || connected ? "cursor-not-allowed" : ""
              }`}
              data-theme="aqua"
              onClick={() => sendConnectionRequest()}
              disabled={connecting || connected}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
