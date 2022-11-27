import { NavLink } from "react-router-dom"

const HomeLayout = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end >Anasayfa</NavLink>
        </li>
        <li>
          <NavLink to="/about">Hakkımızda</NavLink>
        </li>
        <li>
          <NavLink to="/products">Ürünler</NavLink>
        </li>
        <li>
          <NavLink to="/contact">İletişim</NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default HomeLayout