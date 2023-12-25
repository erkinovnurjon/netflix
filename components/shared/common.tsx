"use client";

import Navbar from "@/components/shared/navbar";
import { MovieDataProps } from "@/types";
import Banner from "./banner";

interface Props {
  moviesData: MovieDataProps[]
}

const Common = ({ moviesData }: Props) => {
  return (
    <main className={"flex min-h-screen flex-col"}>
      <Navbar />

      <div className="relative pl-4 pb-24 lg:space-y-24">
        <Banner movies={moviesData && moviesData[0].data} />
      </div>
    </main>
  );
};

export default Common;