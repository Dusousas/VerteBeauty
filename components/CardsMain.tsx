import React from 'react';
import { MdLocalPharmacy } from 'react-icons/md';

export default function CardsMain() {
    return (
        <>
            <section className='p-6'>
                <div className='bgCardsmain py-20 rounded-xl'>
                    <div className='maxW flex flex-col h-full items-center lg:flex-row'>

                        <div className='w-1/4 py-10 px-4 flex flex-col justify-center items-center'>
                            <div className='h-20 w-20 flex items-center justify-center rounded-full bg-[#3274ad]'>
                                <MdLocalPharmacy className='text-3xl' />
                            </div>
                            <div className='' />
                            <h1 className='text-xl uppercase mt-6 text-center font-bold'>Formulações Exclusivas, Aprovadas pela Anvisa.</h1>
                            <p className='mt-4 text-center'>Tratamentos elaborados e vendidos por farmácias de manipulação autorizadas pela Anvisa.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
} 