import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./component/Home/Home";
import Login from "./component/LogIn/LogIn";
import ChatRoom from "./component/ChatRoom/ChatRoom";
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
          path: "chatroom",
          element: <ChatRoom currentUser={currentUser} />, // Pass currentUser as a prop
        },
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
