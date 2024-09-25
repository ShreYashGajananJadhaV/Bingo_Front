import React, { useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
// import EventEmitter from "events";

// const emitter = new EventEmitter();

function Details() {
  const [groupId, setGroupId] = useState("");
  const [name, setName] = useState("");
  const [stompClient, setStompClient] = useState("");

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

  function sendConnectionRequest() {
    let sock = new SockJS(
      `https://communist-candi-shreyashjadhav-baaa549c.koyeb.app/ws?groupId=${groupId}&user=${name}`
    );
    let stompClient = Stomp.over(sock);
    setStompClient(stompClient);
    stompClient.connect({}, () => {
      stompClient.subscribe(`/queue/${groupId}`, (message) => {
        console.log("The message is " + message);
      });
    });
  }

  const handleSendMessage = () => {
    stompClient.send(
      "/app/sendToUser",
      {},
      JSON.stringify({ sender: name, groupId: groupId, message: "23" })
    );
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
            />
          </div>
          <div class="flex justify-between mb-4 space-x-4">
            <button
              class="w-full md:w-1/2 p-2 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-lg"
              onClick={() => generateRandomCode()}
            >
              Generate Code
            </button>
            <button
              class="w-full md:w-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
              onClick={() => sendConnectionRequest()}
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
