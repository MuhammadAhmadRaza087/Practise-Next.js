import  Link  from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <Link href={'/personalInfo'}>Personal Info</Link>
      <h1>Server Side</h1>
    </div>
  )
}
