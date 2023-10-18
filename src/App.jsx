import React, { useState, useRef } from "react";

import Home from "./component/Home/Home";

import ChatRoom from "./component/ChatRoom/ChatRoom";

import Cookies from "universal-cookie";
const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <>
        <Home setIsAuth={setIsAuth} />
      </>
    );
  }
  return (
    <>
      {room ? (
        <>
          <ChatRoom />
        </>
      ) : (
        <>
          <div className="contaier mt-5 mx-5">
            <div className="col-md-6 d-flex  justify-content-start align-self-center flex-column">
              <h3 className="title">Enter a Room Name</h3>
              <input ref={roomInputRef} className="border input mt-4"></input>

              <div className="col-md-6 d-flex justify-content-between ">
                <button
                  className="btn btn-pirmery w-100 p-3 m-5"
                  onClick={() => setRoom(roomInputRef.current.value)}
                >
                  <strong> Enter</strong>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
