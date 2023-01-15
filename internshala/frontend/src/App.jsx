import React from 'react'
import AddCar from './components/AddCar'
import Login from './components/Login'

import Navbar from './components/Navbar'
import Home from "./components/Home"
import CarDetails from "./components/CarDetails"
import Register from "./components/Register"
import AgencyHome from "./components/AgencyHome"

import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
      <Routes>

        {/* <Route path='/' element={user ? (user.isAdmin ? <AgencyHome /> : <Home />) : <Register />} /> */}
        {/* <Route path="/register" element={user ? (user.isAdmin ? <AgencyHome /> : <Home />) : <Register />} />

        <Route path="/login"> element={user ? (user.isAdmin ? <AgencyHome /> : <Home />) : <Login />} </Route> */}

        {/* <Route path='/addcar' element = {user ? (user.isAdmin ? <AgencyHome /> : <Home />) : <AddCar />} /> */}

        {/* <Route exact path="/car/:carId"> <CarDetails /> </Route> */}

          <Route path='register' element={<Register />}  />

          <Route path='login' element={<Login />}  />

      </Routes>


      {/* <Login />
      <Register /> */}
      {/* <Navbar /> */}
      {/* <UserLogin />  */}
      {/* <AddCar /> */}
      {/* < UserHome /> */}
      {/* <CarDetails /> */}
      {/* <UserRegister /> */}
      {/* {/* <AgencyRegister /> /*} */}

      {/* <UserRegister />  */}
    </>
  )
}

export default App