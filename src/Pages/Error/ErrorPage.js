import React from 'react'
import Navbar from '../../components/Navbar'

function ErrorPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-black h-screen">
        <h1 className="text-bold text-white text-5xl font-mono">
          <p className='pt-36'>404 Page Not Found...</p>
        </h1>
      </div>
    </div>
  );
}

export default ErrorPage