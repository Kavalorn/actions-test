import React from 'react'

export const TextFencifier = ({children}: any) => {
    const test = 123333;
  return (
    <div className='bg-black text-yellow-500'>{children} {test}</div>
  )
}
