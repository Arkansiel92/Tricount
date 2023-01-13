import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';
import { createContext, useState } from "react";

interface ExtentedContext {
  token: string,
  setToken: (newToken: string) => void
}

export const userContext = createContext<any>({
  token: '',
  setToken : () => {}
});


function App() {

  const [token, setToken] = useState('');

  const updateValue = (newToken: string) => {
    setToken(newToken);
  };
  
  return (
    <div>
      <userContext.Provider value={{token, updateValue}}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={'/'} element={<MainScreen />} />
            <Route path={'/login'} element={<LoginScreen />} />
            <Route path={'/registration'} element={<RegistrationScreen />} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
