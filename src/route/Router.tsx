import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Routes as Paths } from "./Routes"
import { MusicFestivals } from "../pages/MusicFestivals"

export const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.MusicFestivals} element={<MusicFestivals />} />
      </Routes>
    </BrowserRouter>
  )
}
