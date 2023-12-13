import React from 'react';
import { client, getAllProductsSlugs } from '@/lib/sanity';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export type House = {
  _id: string;
  name: string;
  description: string;
  imagesUrls: string[];
};

const getData = async (slug: string): Promise<House> => {
  const query = `
  *[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    "slug": slug.current,
    name,
    "description": descripiton,
    "imagesUrls": images[].asset->url
}`;
  const data = await client.fetch(query);
  return data;
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const slugs = await getAllProductsSlugs();

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const house = await getData(params.slug);

  return (
    <div className="bg-black text-white">
      <pre>{JSON.stringify(house, null, 2)}</pre>
    </div>
  );
}