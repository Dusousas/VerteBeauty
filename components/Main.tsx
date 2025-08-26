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
                    <div className='flex mt-8'>
                        <a className='bg-[#09243C] text-white px-8 py-2 rounded-xl uppercase tracking-wider font-Quicksand font-semibold' href="/questionario">Começar agora</a>
                    </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
} 