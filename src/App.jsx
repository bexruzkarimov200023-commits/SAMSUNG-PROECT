import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import NimaIsh from './components/NimaIsh'
import NimaYordam from './components/NimaYordam'
export default function App() {
  return (
    <div>
      <Header />
      <Login />
      <NimaIsh />
      <NimaYordam />
      <Footer />
    </div>
  )
}
