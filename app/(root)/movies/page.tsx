"use client";

import React, { useEffect, useState } from 'react';
import { MovieDataProps, MovieProps } from "@/types";
import { useGlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import Login from "@/components/shared/login";
import ManageAccount from "@/components/shared/manage-account";
import Loader from "@/components/shared/loader"
import { getMoviesByGenre } from "@/lib/api";
import Common from "@/components/shared/common";

const Page = () => {
      const [moviesData, setMoviesData] = useState<MovieDataProps[]>([])

      const { account, pageLoader, setPageLoader } = useGlobalContext();
      const { data: session } = useSession()

      useEffect(() => {
            const getAllMovies = async () => {
                  try {
                        const [action, animation, comedy, crime, documentary, drama, family, war] = await Promise.all([
                              getMoviesByGenre("movie", 28),
                              getMoviesByGenre("movie", 16),
                              getMoviesByGenre("movie", 35),
                              getMoviesByGenre("movie", 80),
                              getMoviesByGenre("movie", 99),
                              getMoviesByGenre("movie", 18),
                              getMoviesByGenre("movie", 10752),
                              getMoviesByGenre("movie", 10768),
                        ])

                        const allResult: MovieDataProps[] = [
                              { title: "Action", data: action },
                              { title: "Animation", data: animation },
                              { title: "Comedy", data: comedy },
                              { title: "Crime", data: crime },
                              { title: "Documentary", data: documentary },
                              { title: "Drama", data: drama },
                              { title: "Family", data: family },
                              { title: "War", data: war },
                        ].map(item => ({ ...item, data: item.data.map((movie: MovieProps) => ({ ...movie, type: "movie", addedToFavorites: false })) }))

                        setMoviesData(allResult)
                  } catch (e) {
                        console.log(e)
                  } finally {
                        setPageLoader(false)
                  }
            }

            getAllMovies()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      if (session === null) return <Login />
      if (account === null) return <ManageAccount />
      if (pageLoader) return <Loader />

      return <Common moviesData={moviesData} />
};

export default Page;