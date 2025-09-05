import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
interface TOOL{
        name: string,
        desc: string,
        icons: string,
        button: string,
        path: string
}

type AIToolsProps={
    tools:TOOL
}

function AIToolsCard( {tools}:AIToolsProps) {
  return (
    <div className='p-3 border rounded-lg '>
      <Image src={tools.icons} width={40} height={40} alt={tools.name} />
      <h2 className='font-bold mt-2'>{tools.name}</h2>
      <p className='text-gray-400'>{tools.desc}</p>
      <Link href={tools.path}>
        <Button className='w-full mt-3'>{tools.button}</Button>
      </Link>
    </div>
  )
}

export default AIToolsCard
