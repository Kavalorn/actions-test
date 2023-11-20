import { getAllArticles, getArticleFromSlug } from '@/utils/mdx'
import React from 'react'
export async function generateStaticParams() {
  'use server';
  const houses = (await getAllArticles() as any).map((house: any) => ({
    ...house,
    slug: [house.slug]
  }));
  return houses;
}
export default async function page({params}: any) {
  const house = await getArticleFromSlug(params.slug) as any

  return (
    <div className="bg-black text-white">
    <h1>{house.title}</h1>
    <p>{house.publishedAt}</p>
    <p>{house.excerpt}</p>
    <div dangerouslySetInnerHTML={{ __html: house.content }} />
    <img src={house.cover_image} alt="" />
  </div>
  )
}