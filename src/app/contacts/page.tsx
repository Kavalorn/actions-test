import { client } from '@/lib/sanity';
import React from 'react'

type Contacts = {
  phone: string;
  name: string;
  email: string;
  message: string;
}

const getData = async (): Promise<Contacts> => {
  const query = `
  *[_type == 'contacts'][0] {
    phone,
    name,
    email,
    message,
  }`;

  const data = await client.fetch(query);
  return data;
}

async function page() {
  const contacts = await getData();
  return (
    <div>
      <h1>Contacts</h1>
      <p>{contacts.phone}</p>
      <p>{contacts.name}</p>
      <p>{contacts.email}</p>
      <p>{contacts.message}</p>
    </div>
  )
}

export default page