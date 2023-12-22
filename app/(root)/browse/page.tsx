"use client"

import Login from "@/components/ui/share/login"
import { useGlobalContext } from "@/context"



const Page = () => {

      const {account} = useGlobalContext()

      if (account === null) return <Login />
  return (
    <div>Browse</div>
  )
}

export default Page