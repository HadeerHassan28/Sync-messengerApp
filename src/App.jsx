import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import Login from "./component/LogIn/LogIn";
import SignUp from "./component/SignUp/SignUp";
import ChatRoom from "./component/ChatRoom/ChatRoom";
// import ReadData from "./component/ReadData/ReadData";
// import WriteData from "./component/WriteData/WriteData";
import NotFound from "./component/NotFound/NotFound";
import { auth, onAuthStateChanged } from "./firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "chatroom",
          element: <ChatRoom currentUser={currentUser} />, // Pass currentUser as a prop
        },
        // {
        //   path: "read",
        //   element: <ReadData />,
        // },
        // {
        //   path: "write",
        //   element: <WriteData />,
        // },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </>
  );
}

export default App;
