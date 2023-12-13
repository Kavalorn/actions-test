import React from 'react'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'

async function getData() {
    const query = "*[_type == 'heroImages'][0]"

    const data = await client.fetch(query);

    return data;
}

export default async function Hero() {
    const data = await getData();

    return (
        <section
            className='bg-slate-300 flex items-center justify-between p-4'
        >
            <div>
                <h1 className='text-3xl font-bold text-red-500'>Text for hero</h1>
                <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <div>
                    <Image
                        src={urlFor(data.image1).url()}
                        priority
                        alt=""
                        className='h-48 w-48 object-cover object-center relative top-5 right-5 z-10'
                        width={100}
                        height={100}
                    />
                    <Image
                        src={urlFor(data.image2).url()}
                        priority
                        alt=""
                        className='h-48 w-48 object-cover object-center relative bottom-5'
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </section>
    )
}