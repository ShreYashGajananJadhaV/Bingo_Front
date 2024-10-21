import React, { useState, useContext, useEffect } from "react";
import SockJS from "sockjs-client";
import MessageContext from "./MessageContext";
import { Stomp } from "@stomp/stompjs";
import Lottie from "lottie-react";
import bufferingAnimation from "../AnimationComponents/BufferingAni.json";
import { RingLoader, PulseLoader } from "react-spinners";
import ReactTypingEffect from "react-typing-effect";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

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
    setChance,
    setRowsCompleted,
    setOpponentName,
    connecting,
    setConnecting,
  } = useContext(MessageContext);

  const [opponentStatus, setOpponentStatus] = useState("");
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
    if (!Num || Num < 26) {
      setTimeout(() => {
        toast("------PLEASE FILL THE TABLE FIRST-----", {
          position: "top-center",
        });
      }, 100);
      return;
    }

    if (name === "" || name === null || groupId === null || groupId === "") {
      toast("PLEASE FILL THE NAME AND CONNECTION CODE", {
        position: "top-center",
      });
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
        setOpponentStatus("WAITING FOR OPPONENT");

        stompClient.subscribe(`/queue/${groupId}`, (message) => {
          setConnecting(false);
          if (message.body.includes("HAS DISCONNECTED")) {
            setConnected(false);
            gameStatus(message.body);
          } else {
            toast(message.body, { position: "top-center" });
          }
        });

        stompClient.subscribe(`/user/${groupId}/${name}`, (mess) => {
          const data_OBJ = JSON.parse(mess.body);
          const playerChance = data_OBJ.playerChance;
          const data = data_OBJ.message;
          const won = data_OBJ.won;
          setOpponentName(data_OBJ.opponentName);
          const rows = Number(data_OBJ.rowsCompleted);
          console.log(playerChance + data + won + rows);
          setChance(playerChance);
          setRowsCompleted(rows);
          if (won) {
            //handle Won condition
            handleWON(data);
          } else if (data.includes("LOST")) {
            gameStatus(data);
          } else {
            setMessage(data);
          }
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
        gameStatus("Something went wrong!");
        setConnected(false);
      }
    );
  }

  function handleWON(messs) {
    Swal.fire({
      title: messs,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  }

  function gameStatus(message) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
      customClass: {
        popup: "rounded-3xl shadow-3xl ",
        container: "rounded-lg",
      },
      didOpen: () => {
        // Set data-theme attribute
        const popup = Swal.getPopup(); // Get the popup element
        if (popup) {
          popup.setAttribute("data-theme", "sunset"); // Set your desired theme
        }
      },
    });
  }
  const handleGrouopIdChange = (e) => {
    setGroupId(e.target.value.trim());
  };

  const handleName = (e) => {
    setName(e.target.value.trim());
  };
  // code for copy functionality --
  const [isGenerate, setIsGenerate] = useState(true);

  const copyToClipboard = async () => {
    try {
      await window.navigator.clipboard.writeText(
        document.getElementById("connection-code").value
      );
      console.log(
        "Copied to clipboard! and the value is " +
          document.getElementById("connection-code").value
      );
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      console.log("Copy to clipboard failed.");
    }
  };

  return (
    <div class=" flex flex-col justify-center items-center">
      {connecting && connected ? (
        <section>
          <ReactTypingEffect text={opponentStatus} speed={50} />
          <section
            className={`${
              connected && connecting
                ? "flex flex-col justify-center items-center mt-4"
                : "hidden"
            }`}
          >
            <h1 className="font-sans text-xl text-white">STARTING GAME</h1>
            <PulseLoader color="#298c25" />
          </section>
        </section>
      ) : (
        ""
      )}

      <ToastContainer />
      {!connected ? (
        <div
          class="max-w-md p-4 rounded-2xl shadow-md border-2"
          data-theme="halloween"
        >
          <h2 class="text-center text-3xl font-bold mb-4 text-teal-500">
            Game Details
          </h2>
          <div
            className={
              connecting
                ? "fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"
                : "hidden"
            }
          ></div>

          <div
            className={`${
              connecting
                ? "flex flex-col justify-center items-center fixed inset-0 z-20 bg-gray-800 bg-opacity-75"
                : "hidden"
            }`}
          >
            <Lottie animationData={bufferingAnimation}></Lottie>

            <h1
              className={`${
                connected && connecting
                  ? "font-sans text-2xl text-white mt-4"
                  : "hidden"
              }`}
            >
              CONNECTED.
            </h1>
          </div>

          <div>
            <div class="flex flex-col mb-4">
              <input
                type="text"
                id="first-name"
                class="w-full p-2 pl-10 text-md font-sans text-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="NAME"
                onChange={handleName}
                disabled={connecting || connected}
              />
            </div>
            <div class="flex flex-col mb-4 relative">
              <section>
                {isGenerate ? (
                  <button
                    className="bg-teal-800 rounded-xl text-white font-semibold text-xs w-[60px] h-[30px] absolute top-[5px] right-[5px] transform active:scale-90 transition-transform"
                    data-theme="aqua"
                    onClick={() => {
                      setIsGenerate(false);
                      generateRandomCode();
                    }}
                    disabled={connecting || connected}
                  >
                    Generate
                  </button>
                ) : (
                  <button
                    className="bg-teal-500 rounded-xl text-white font-semibold text-xs w-[60px] h-[30px] absolute top-[5px] right-[5px] transform active:scale-90 transition-transform"
                    data-theme="aqua"
                    disabled={connecting || connected}
                    onClick={() => {
                      copyToClipboard();
                    }}
                  >
                    Copy
                  </button>
                )}
                <input
                  type="text"
                  value={groupId}
                  id="connection-code"
                  class="w-full p-2 pl-10 text-md font-sans text-gray-200 border border-gray-300 rounded-lg outline-none focus:ring ring-white focus:ring-blue-600"
                  placeholder="Code"
                  onChange={handleGrouopIdChange}
                  disabled={connecting || connected}
                />
              </section>
            </div>
            <div class="flex justify-between mb-4 space-x-4">
              {/* <button
              className={` glass w-full md:w-1/2 p-2 text-gray-100 font-mono font-bold outline-none focus:ring-2 ring-slate-300  shadow-lg rounded-2xl transform active:scale-90 transition-transform ${
                connecting || connected ? "cursor-not-allowed" : ""
              }`}
              data-theme="aqua"
              onClick={() => generateRandomCode()}
              disabled={connecting || connected}
            >
              Generate Code
            </button> */}
              <button
                class={`bg-teal-600 font-sans w-full  p-2 text-gray-100  font-bold  focus:ring-2 ring-slate-300 shadow-lg rounded-2xl transform active:scale-90 transition-transform${
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
      ) : (
        ""
      )}
    </div>
  );
}

export default Details;
