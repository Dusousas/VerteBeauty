import React from 'react';
import Navbar from './subcomponents/Navbar';
import Login from './subcomponents/Login';

export default function Header() {
    return (
        <>
            <header className='bg-white py-4'>
                <div className='maxW flex flex-col justify-center items-center'>
                    <div>
                        <a className='text-3xl uppercase text-black' href="/">Minhalogo</a>
                    </div>
                    <div className='text-black w-full flex items-end justify-end'>
                        <Login />
                    </div>
                    <div className=' text-black'>
                        <Navbar />
                    </div>
                </div>
            </header>
        </>
    );
}