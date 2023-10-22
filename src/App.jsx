import React, { useState, useRef, useEffect } from "react";

import Home from "./component/Home/Home";
import ChatRoom from "./component/ChatRoom/ChatRoom";
import NavBar from "./component/NavBar/NavBar";
import ReactNotification from "./component/ReactNotification/ReactNotification";
// import Notifications from "./component/Notification/Notification";
import Cookies from "universal-cookie";
import { signOut } from "firebase/auth";
import { auth, NewMsgNoti } from "../firebase";

const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  //!Notification:
  const [show, setshow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const handleMessages = () => {
    let newMsg = NewMsgNoti();
    console.log("New Message Received:", newMsg);
    if (newMsg) {
      setshow(true);
      setNotification({
        title: newMsg.title,
        body: newMsg.body,
      });
      console.log(notification.title);
    } else console.log("error");
  };

  useEffect(() => {
    handleMessages();
  }, [show]);
  if (!isAuth) {
    return (
      <>
        <NavBar signUserOut={signUserOut} isAuth={isAuth} />
        <Home setIsAuth={setIsAuth} />
      </>
    );
  }
  return (
    <>
      {room && show ? (
        <ReactNotification
          title={notification.title}
          body={notification.body}
        />
      ) : null}
      {room ? (
        <>
          <NavBar signUserOut={signUserOut} isAuth={isAuth} />
          <ChatRoom room={room} />
        </>
      ) : (
        <>
          <NavBar signUserOut={signUserOut} isAuth={isAuth} />
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
