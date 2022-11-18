import React, { useState } from 'react'
import { ArrowSmUpIcon } from '@heroicons/react/outline'

const NavItems = () => {
  const JOB = 'Job'
  const CONSUMER = 'Consumer'
  const KEEPER = 'Keeper'
  const OPERATOR = 'Opereator'

  const [selectedNavItem, setSelectedNavItem] = useState(JOB)

  return (
    <div className='bg-zinc-900 h-fit flex items-center justify-around rounded-full mx-6'>
      <p
        className={getNavIconClassName(JOB)}
        onClick={() => setSelectedNavItem(JOB)}
      >
        {JOB}
      </p>
      <p
        className={getNavIconClassName(CONSUMER)}
        onClick={() => setSelectedNavItem(CONSUMER)}
      >
        {CONSUMER}
      </p>
      <p
        className={getNavIconClassName(KEEPER)}
        onClick={() => setSelectedNavItem(KEEPER)}
      >
        {KEEPER}
      </p>
      <p
        className={getNavIconClassName(OPERATOR)}
        onClick={() => window.open('https://34.125.167.98', '_blank')}
      >
        {OPERATOR}
        <ArrowSmUpIcon className='h-4 rotate-45' />
      </p>
    </div>
  )

  function getNavIconClassName(name) {
    let className =
      'p-1 px-4 cursor-pointer border-[4px] border-transparent flex items-center'
    className +=
      name === selectedNavItem
        ? ' bg-zinc-800 border-zinc-900 rounded-full'
        : ''
    return className
  }
}

export default NavItems
