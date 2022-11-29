import React, { useEffect, useRef, useState } from 'react'
import styles from "./header.module.scss"
import logo from "../../assets/img/logo-yazisiz-removebg-preview.png"
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai"
import { VscChromeClose } from "react-icons/vsc"

const Header = () => {

  const [fixed, setFixed] = useState(false);

  const navRef = useRef()
  const buttonRef = useRef()


  useEffect(() => {

    const headerFixed = () => {
      if (window.scrollY >= "75") {
        setFixed(true)
      }
      else {
        setFixed(false)
      }
    }
    window.addEventListener("scroll", headerFixed)
    return () => window.removeEventListener("scroll", headerFixed)
  }, [])

  const toogleMenu = () => {
    navRef.current.classList.toggle(`${styles.responsiveNav}`)
    buttonRef.current.classList.toggle(`${styles.hideButton}`)
  }


  return (
    <div className={`${styles.header} ${fixed && styles.headerFixed} `}>
      <div className={`${styles.headerContainer} container`}>
        <span>
          <img src={logo} alt="" />
          <h4>Erdem Yüksel Metal</h4>
        </span>
        <nav ref={navRef}>
          <ul>
            <li>
              <NavLink to="/erdem-yuksel-metal-react/" end  >Anasayfa</NavLink>

            </li>
            <li>
              <NavLink to="/erdem-yuksel-metal-react/about" end >Hakkımızda</NavLink>

            </li>
            <li>
              <NavLink to="/erdem-yuksel-metal-react/products" end >Ürünler</NavLink>

            </li>
            <li>
              <NavLink to="/erdem-yuksel-metal-react/contact" end >İletişim</NavLink>
            </li>
          </ul>
          <button className={`${styles.navClose} ${styles.navBtn}`} onClick={toogleMenu} ><VscChromeClose size={28} /></button>
        </nav>
        <button ref={buttonRef} className={styles.navBtn} onClick={toogleMenu} ><AiOutlineMenu size={28} /></button>
      </div>
    </div>


  )
}

export default Header