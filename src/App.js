// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/loginAndSignupPage/loginPage/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import Profile from './pages/profile/ProfilePage';
import Roles from './pages/roles/Roles';
import SignUp from './pages/loginAndSignupPage/signUpPage/SignUp';
import ProtectedRoute from './pages/protectedRoute/ProtectedRoute';
import LoadingPage from './pages/loadingPage/LoadingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/users' element={<Users />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/role' element={<Roles />} />
          <Route path='/loading-page' element={<LoadingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
