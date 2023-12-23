"use client"

import Login from "@/components/share/login"
import { useGlobalContext } from "@/context"
import {useSession} from "next-auth/react";
import ManageAccount from "@/components/share/manage-account";



const Page = () => {

  const {account} = useGlobalContext()
  const {data : session} = useSession()
  // console.log(session)
  if(session === null) return  <Login />
  if (account === null) return <ManageAccount />
  return (
    <div>Browse</div>
  )
}

export default Page