'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function PersonalInfo() {
  const studentData = [
    {
      name: "John Doe",
      age: 21,
      major: "Computer Science"
    },
    {
      name: "Watsom",
      age: 25,
      major: "Physics"
    },
    {
      name: "Williams",
      age: 27,
      major: "Mathematics"
    },
  ]
  const router = useRouter();
  console.log(router)
  return(
    <div>
      {
        studentData.map((student)=>{
          return <p onClick={()=>{
            router.push(`/personalInfo/${student.name}`)
          }}>{student.name}</p>
        })
      }
    </div>
  )
}

