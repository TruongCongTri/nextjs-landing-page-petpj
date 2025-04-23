import NavBar from '@/components/layouts/NavBar'
import React from 'react'

export default function Template({children}: {children: React.ReactNode}) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
