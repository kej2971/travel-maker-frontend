import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom'

import React from 'react'

export default function Layouts() {
  return (
    <>
      <Header/>
      <Footer/>
      <Outlet/>
    </>
  )
}
