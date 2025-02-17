import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Assessment from './pages/Assessment';
import Blog from './pages/Blog';
import Calendar from './pages/Calendar';
import ClassRoom from './pages/ClassRoom';
import Dashboard from './pages/Dashboard';
import MyAccount from './pages/MyAccount';
import MySettings from './pages/MySettings';
import News from './pages/News';
import Profile from './pages/Profile';
import Store from './pages/Store';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/classroom' element={<ClassRoom />} />
        <Route path='/assessment' element={<Assessment />} />
        <Route path='/store' element={<Store />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/news' element={<News />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/profile' element={<Profile />}>
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/mysettings' element={<MySettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App