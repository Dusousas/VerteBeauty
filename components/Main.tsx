import React from 'react';

export default function Main() {
    return (
        <>
            <section className='p-6'>
                <div className='bg-Primary h-[70vh] rounded-xl'>
                    <div className='maxW flex flex-col h-full items-center lg:flex-row'>
                        <article className='lg:w-1/2'>
                            <h1 className='text-black uppercase text-6xl'>Bem-vindo ao nosso site</h1>
                            <p className='text-black mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magnam hic voluptas eligendi enim? Deserunt.</p>
                        <div className='flex mt-6'>
                            <a className='text-black bg-amber-300 px-6 py-3 uppercase' href="">Falar com um especialista</a>
                        </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
} 