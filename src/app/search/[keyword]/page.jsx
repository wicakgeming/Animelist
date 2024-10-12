import Animelist from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"


const Page = async ({ params }) => {
  const { keyword }  = params
  const decodedKeyword = decodeURI(keyword)
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
  const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)
  
  return (
  <>
    <section>
    <Header title={`pencarian untuk ${decodedKeyword}`}/>
    <Animelist api={searchAnime}/>
    </section>
   </>
  )
}

export default Page

