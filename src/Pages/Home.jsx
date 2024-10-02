import React from 'react';
import Header from '../Component/Header';

function Home() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <h1 className='container text-xl font-sans'>Welcome to finance Corporation</h1>
        <h3 className='container text-xl font-serif'>We help you to provide all the financial calculation to you</h3>
      </div>
    </div>
  )
}

export default Home;