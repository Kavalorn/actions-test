import { getAllHouses } from '@/utils/mdx'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

async function page() {
    const houses = await getAllHouses() as any;
  return (
    <div>
        <h1>HOUSES</h1>
        {houses.map((article: any) => {
            return (
              <div key={article.slug} className="p-4">
                <h1>{article.title}</h1>
                <p>{article.publishedAt}</p>
                <p>{article.excerpt}</p>
                <p>{article.slug}</p>
                <Image src={article.cover_image} alt={'img'} height={100} width={100} />
                <button className='underline'>
                  <Link href={`/houses/${article.slug}`}>Read more</Link>
                </button>
              </div>
            )
          })}
    </div>
  )
}

export default page