import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '33mzyj3m',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}

export const getAllProductsSlugs = async () => {
    const slugs = await client.fetch(`*[_type == "product"].slug.current`)
    return slugs
}