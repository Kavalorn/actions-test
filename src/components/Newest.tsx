import { client, urlFor } from '@/lib/sanity';
import React from 'react'
import Image from 'next/image'
import { SimplifiedProduct } from '@/app/interface';

async function getData(): Promise<Array<SimplifiedProduct>> {
    const query = `
    *[_type == "product"][0...2] {
        _id,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }
    `
    const data = await client.fetch(query);

    return data;
}
const Newest = async () => {

    const data = await getData();

  return (
    <div className='flex gap-4 justify-center flex-col'>
        <h2>Newest</h2>
        <div className='flex gap-4 justify-center'>
        {data.map((item) => {
            return (
                <div key={item._id}>
                    <div>name: {item.name}</div>
                    <div>price: {item.price}</div>
                    <div>category: {item.categoryName}</div>
                    <Image 
                        src={urlFor(item.imageUrl).crop('center').crop('left').url()} 
                        alt="Supra image" 
                        width={100}
                        height={100}
                    />
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Newest