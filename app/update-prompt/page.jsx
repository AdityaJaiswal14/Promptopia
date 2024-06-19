'use client'
import Update from "./Update"
import { Suspense } from "react"

const Page = () => {
  return (
    <Suspense>
      <Update />
    </Suspense>
  )
}

export default Page