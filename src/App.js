import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Todo from "./pages/todo/Todo";
import Create from "./pages/create/Create";
import { useAuthContext } from "./hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import OnlineUsers from "./components/online-users/OnlineUsers";

//style
import "./App.css";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <div></div>
            <Routes>
              <Route path="/" element={user && <Home />}>
                {!user && <Route path="*" element={<Navigate to="/login" />} />}
              </Route>

              <Route path="/create" element={user && <Create />}>
                {!user && <Route path="*" element={<Navigate to="/login" />} />}
              </Route>

              <Route path="/todos/:id" element={user && <Todo />}>
                {!user && <Route path="*" element={<Navigate to="/login" />} />}
              </Route>

              <Route path="/login" element={!user && <Login />}></Route>

              <Route path="/signup" element={!user && <Signup />}></Route>
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
