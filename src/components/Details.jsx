import React, { useState } from "react";

function Details() {
  const [groupId, setGroupId] = useState("");

  const [socket, setSocket] = useState("");

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
    if (!socket || socket.readyState === WebSocket.CLOSED) {
      const socketUrl = `ws://localhost:8080/ws?groupId=${groupId}`;
      const socket = new WebSocket(socketUrl);
      setSocket(socket);

      socket.addEventListener("open", () => {
        console.log("Connected to the WebSocket server");
        socket.send("Hello, server!");
      });

      socket.addEventListener("message", (event) => {
        console.log(`Received message: ${event.data}`);
        // Handle incoming message from the server
      });

      socket.addEventListener("error", (event) => {
        console.log(`Error occurred: ${event}`);
        // Handle error
      });

      socket.addEventListener("close", () => {
        console.log("WebSocket connection closed");
        // Handle disconnection
      });
    } else {
      socket.send("Hello, server!");
    }
  }
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
