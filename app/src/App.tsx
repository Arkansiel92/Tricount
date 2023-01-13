import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import GroupScreen from "./screens/GroupScreen";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
// import ReactDOM from "react-dom/client";
// import { useState } from "react";

// const [user, setUser] = useState("Jesse Hall");

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path={"/GroupeScreen"} element={<GroupScreen />} />
          <Route path={"/"} element={<MainScreen />} />
          <Route path={"/login"} element={<LoginScreen />} />
          <Route path={"/registration"} element={<RegistrationScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BrowserRouter />);

export default App;
