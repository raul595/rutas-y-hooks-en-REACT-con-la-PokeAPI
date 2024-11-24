import React from 'react'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Tarjeta from './Cards';

function Contenido() {
  return (
    <>
    <main>
        <Tarjeta/>
    </main>
    </>
  )
}

export default Contenido
