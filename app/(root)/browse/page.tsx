/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useGlobalContext } from "@/context";
import Login from "@/components/shared/login";
import { useSession } from "next-auth/react";
import ManageAccount from "@/components/shared/manage-account";

import { useEffect } from "react";
import Loader from "@/components/shared/Loader";
import Common from "@/components/shared/common";


const Page = () => {
  const { account, pageLoader, setPageLoader } = useGlobalContext();
  const { data: session } = useSession()

  useEffect(() => {
    setPageLoader(false)
  }, []);

  if (session === null) return <Login />
  if (account === null) return <ManageAccount />
  if (pageLoader) return <Loader />

  return <Common />
};

export default Page;