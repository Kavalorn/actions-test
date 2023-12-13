import Image from 'next/image'
import { getAllHouses } from '../../src/utils/mdx'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Newest from '@/components/Newest'

export default async function Home() {
  const houses: any = await getAllHouses()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Hero />
        <Newest />
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
    </main>
  )
}
