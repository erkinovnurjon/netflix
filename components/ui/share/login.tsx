import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/ui/button";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className={"w-full h-screen"}>
      <div className={"absolute inset-0"}>
          <Image
              src={"https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"}
              alt={"bg"}
              fill
          />
      </div>

        <div className={"relative z-10 rounded-md px-8 py-4 w-[500px] h-[50vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50"}>
          <div className={"flex justify-center items-center h-full"}>
            <Button className={"mt-4 flex items-center gap-2 w-full bg-red-600 !text-white hover:bg-red-500 h-[56px] "}>
                <FaGithub className={"w-7 h-7"} />
                Sign in with github
            </Button>

          </div>

        </div>
    </div>
  )
}

export default Login