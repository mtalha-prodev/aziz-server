import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import Offers from '../page/Offers'
import Login from '../page/Login'
import Register from '../page/Register'
import FlashSale from '../page/FlashSale'




function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/flashSale" element={<FlashSale />} />
    </Routes>
  )
}

export default Navigation
