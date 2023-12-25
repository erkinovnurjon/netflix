"use client"

import { MovieProps } from '@/types'
import React from 'react'

interface Props {
      movies: MovieProps[]
}

const Banner = ({movies} :Props) => {

      console.log(movies);
      
  return (
    <div>Banner</div>
  )
}

export default Banner