import { getAllHouses, getArticleFromSlug } from '@/utils/mdx'
import React from 'react'
import Image from 'next/image'
export async function generateStaticParams() {
  const houses = (await getAllHouses() as any).map((house: any) => ({
    ...house,
    slug: [house.slug]
  }));
  return houses;
}
export default async function page({ params }: any) {
  const house = await getArticleFromSlug(params.slug) as any

  return (
    <div className="bg-black text-white">
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <h1>{house.frontmatter.title}</h1>
      <p>{house.frontmatter.publishedAt}</p>
      <p>{house.frontmatter.excerpt}</p>
      <div dangerouslySetInnerHTML={{ __html: house.content }} />
      <p>{house.frontmatter.cover_image}</p>
      <Image src={house.frontmatter.cover_image} alt="tratata" width={200} height={200} />
    </div>
  )
}
