import React from 'react'

function Header() {
  return (
    <div className='flex flex-col gap-3 '>
        <h1 className='text-white text-2xl font-bold '>This is the beginning of React Crash Course </h1>
        <form action="" className='bg-slate-600 rounded-md w-96 h-96 px-4 p-5'>
            <label htmlFor="firstName">Enter First Name:</label><br/>
            <input className='w-full p-2' type="text" placeholder='Enter your first name' /><br/>
            <label htmlFor="lastName">Enter Last Name:</label><br/>
            <input className='w-full p-2' type="text" placeholder='Enter your last name' /><br/>
            <label htmlFor="Email">Enter email:</label><br/>
            <input className='w-full p-2' type="text" placeholder='Enter your email' /><br/>
            <label htmlFor="password">Enter password:</label><br/>
            <input className='w-full p-2' type="password" placeholder='Enter your password' /><br/><br/>
            <button className='w-full p-2 rounded-md bg-orange-600 text-white font-bold' type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Header