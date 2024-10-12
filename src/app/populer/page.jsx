"use client"


import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import Animelist from '@/components/AnimeList'
import { getAnimeResponse } from '@/libs/api-libs'

const Page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    // const data = await response.json()
    const populerAnime = await getAnimeResponse("top/anime", `${page}`)
    setTopAnime(populerAnime)
  }

  useEffect(() => {
  fetchData()
  }, [page])

 
  return (
    <>
    <HeaderMenu title={`Anime Terpopuler #${page}`}/>
    <Animelist api={topAnime}/>
    <Pagination 
    page={page} 
    lastPage={topAnime.pagination?.last_visible_page}
    setPage={setPage}
    />
    </>
  )
}

export default Page