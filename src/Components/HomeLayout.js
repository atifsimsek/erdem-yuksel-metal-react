import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default HomeLayout