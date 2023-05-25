import React from 'react'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="my-5 px-4">
        {children}
      </main>
    </>
  )
}

export default Layout