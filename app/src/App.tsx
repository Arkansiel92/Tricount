import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';

function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainScreen />} />
          <Route path={'/login'} element={<LoginScreen />} />
          <Route path={'/registration'} element={<RegistrationScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
