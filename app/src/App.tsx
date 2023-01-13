import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import { createContext, useState } from "react";
import LogoutScreen from "./screens/logout/LogoutScreen";
import GroupScreen from "./screens/GroupScreen";

export const userContext = createContext<any>({
  token: "",
  setToken: () => {},
});

function App() {
  const [token, setToken] = useState("");

  const updateValue = (newToken: string) => {
    setToken(newToken);
  };

  return (
    <div>
      <userContext.Provider value={{ token, updateValue }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<MainScreen />} />
            <Route path={"/group"} element={<GroupScreen />} />
            <Route path={"/login"} element={<LoginScreen />} />
            <Route path={"/logout"} element={<LogoutScreen />} />
            <Route path={"/registration"} element={<RegistrationScreen />} />
            <Route
              path={"/beautiful"}
              element={<h1 className="text-center my-5">Soit beau</h1>}
            />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BrowserRouter />);

export default App;
