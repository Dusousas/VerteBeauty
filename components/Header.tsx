import React from 'react';
import Navbar from './subcomponents/Navbar';
import Login from './subcomponents/Login';

export default function Header() {
    return (
        <>
            <header className='p-12 absolute w-full'>
                <div className='flex items-center justify-between bg-[#09243C] rounded-xl py-4 px-4'>
                    <div className='w-1/3'>
                        <a className='text-3xl uppercase text-white' href="/">Minhalogo</a>
                    </div>

                    <div className='w-1/3 flex justify-center items-center text-white'>
                        <Navbar />
                    </div>


                    <div className='w-1/3 flex justify-end text-white'>
                        <Login />
                    </div>
                </div>
            </header>
        </>
    );
}