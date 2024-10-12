import Animelist from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"


const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  // recommendedAnime= {data:recommendedAnime.slice(4, 12)}
  recommendedAnime = reproduce(recommendedAnime, 4)

  return (
  <>
   {/* anime populer */}
    <section>
    <Header title="Paling populer" linktitle="Lihat semua" linkHref="/populer"/>
    <Animelist api={topAnime}/>
    </section>
    <section>
    <Header title="Rekomendasi"/>
    <Animelist api={recommendedAnime}/>
    </section>
   </>
  )
}

export default Page

