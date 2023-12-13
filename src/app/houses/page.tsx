import { getAllHouses } from '@/utils/mdx'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { client, getAllProductsSlugs } from '@/lib/sanity';

type House = {
  _id: string;
  name: string;
  slug: string;
  descripiton: string;
  imageUrl: string;
};
const getData = async (slug: string): Promise<House> => {
  const query = `
  *[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    "slug": slug.current,
    name,
    descripiton,
    "imageUrl": images[0].asset->url
}`;

  const data = await client.fetch(query);
  return data;
}

async function HousesPage() {
  const slugs = await getAllProductsSlugs();
  const houses = await Promise.all(slugs.map(async (slug: string) => await getData(slug)));
  console.log('houses: ', houses);
  return (
    <div>
        <h1>HOUSES</h1>
        <div className=''>
          <Tabs defaultValue="account" className="w-full flex flex-col items-center">
            <TabsList className='w-fit'>
              <TabsTrigger value="transcend">Account</TabsTrigger>
              <TabsTrigger value="epic">epic</TabsTrigger>
              <TabsTrigger value="new age">age</TabsTrigger>
              <TabsTrigger value="indian">indian</TabsTrigger>
            </TabsList>
            <TabsContent value="transcend">Make changes to your account here.</TabsContent>
            <TabsContent value="epic">epic change.</TabsContent>
            <TabsContent value="new age">age change.</TabsContent>
            <TabsContent value="indian">indian change.</TabsContent>
          </Tabs>
        </div>
        {houses.map((house: House) => {
            return (
              <div key={house.slug} className="p-4 border rounded m-4">
                <h1 className='text-3xl font-bold'>{house.name}</h1>
                <p>{house.descripiton}</p>
                <Image src={house.imageUrl} alt={'img'} height={100} width={100} />
                <button className='underline'>
                  <Link href={`/houses/${house.slug}`}>Read more</Link>
                </button>
              </div>
            )
          })}
    </div>
  )
}

export default HousesPage