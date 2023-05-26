import React, { ReactNode } from 'react'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }: { children: ReactNode}) => {
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