const VITE_RICK_AND_MORTY_API_URL: string = import.meta.env.VITE_RICK_AND_MORTY_API_URL

interface RickAndMortyRouteType {
  getAllCharacters(page:number): string
}
export const RickAndMortyRoute: RickAndMortyRouteType = {
  getAllCharacters: (page) => {
    return `${VITE_RICK_AND_MORTY_API_URL}/character?page=${page}`}
}