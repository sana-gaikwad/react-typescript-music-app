import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Routes as Paths } from "@/route"
import { MusicFestivalsPage } from "@/pages"

export const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.MusicFestivals} element={<MusicFestivalsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
