import React, { useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
// import EventEmitter from "events";

// const emitter = new EventEmitter();

function Details() {
  const [groupId, setGroupId] = useState("");
  const [name, setName] = useState("");
  const [stompClient, setStompClient] = useState("");
  const [messageNumber, setMessageNumber] = useState("");
  const [connected, setConnected] = useState(false);
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
    let sock = new SockJS(
      `http://localhost:8080/ws?groupId=${groupId}&user=${name}`
    );
    let stompClient = Stomp.over(sock);
    setStompClient(stompClient);
    setConnecting(true);
    stompClient.connect({}, () => {
      alert("You are connected to server...");
      setConnected(true);

      stompClient.subscribe(`/queue/${groupId}`, (message) => {
        setMessageNumber(message.body);
        if (message !== null && message !== "") {
          alert("Message recieved is --" + messageNumber);
        }
      });

      stompClient.subscribe(`/user/${groupId}/${name}`, (mess) => {
        alert(`The Message recieved is ....${mess.body}`);
      });
    });
  }

  const handleSendMessage = () => {
    if (connected) {
      stompClient.send(
        "/app/sendToUser",
        {},
        JSON.stringify({ sender: name, groupId: groupId, message: "23" })
      );
    } else {
      alert(`Connection to the server is not established`);
    }
  };

  const handleGrouopIdChange = (e) => {
    setGroupId(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="max-w-md p-6 rounded-2xl shadow-md bg-gray-200">
        <h2 class="text-3xl font-bold mb-4 text-blue-600">
          Enter Your Details
        </h2>
        <div>
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
              placeholder="Mickey"
              onChange={handleName}
              disabled={connected}
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
              value={groupId}
              id="connection-code"
              class="w-full p-2 pl-10 text-md text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="XXXX-XXXX"
              onChange={handleGrouopIdChange}
              disabled={connected}
            />
          </div>
          <div class="flex justify-between mb-4 space-x-4">
            <button
              class="w-full md:w-1/2 p-2 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-lg"
              onClick={() => generateRandomCode()}
              disabled={connecting}
            >
              Generate Code
            </button>
            <button
              class="w-full md:w-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
              onClick={() => sendConnectionRequest()}
              disabled={connecting}
            >
              Submit
            </button>

            <button
              class="w-full md:w-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
              onClick={() => handleSendMessage()}
            >
              number-Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
