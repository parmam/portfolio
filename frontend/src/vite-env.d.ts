/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // more env variables...
  readonly RICK_AND_MORTY_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}