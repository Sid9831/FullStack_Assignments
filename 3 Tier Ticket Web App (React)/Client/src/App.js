import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComp from './Components/HomeComp';
import Profile from './Components/Profile';
import RegistrationForm from './Components/RegistrationForm';
import SignIn from './Components/SignIn';
import Navigation from './Components/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
          <Routes>
            <Route path='/' element={<HomeComp/>}></Route>
            <Route path='/signIn' element={<SignIn/>}></Route>
            <Route path='/signUp' element={<RegistrationForm/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
