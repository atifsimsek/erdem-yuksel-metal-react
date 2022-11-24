import React, { useEffect, useState } from 'react'
import styles from "./header.module.scss"
import logo from "../../assets/img/logo-yazisiz-removebg-preview.png"
import HomeLayout from '../../Pages/HomeLayout'
const Header = () => {

  const [fixed, setFixed] = useState(false);


  useEffect(() => {

    const headerFixed = () => {
      if (window.scrollY >= "75") {
        setFixed(true)
      }
      else{
        setFixed(false)
      }
    }
    window.addEventListener("scroll", headerFixed)
    return () => window.removeEventListener("scroll", headerFixed)
  }, [])


  return (
    <div className={`${styles.header} ${fixed && styles.headerFixed} `}>
      <div className={`${styles.headerContainer} container`}>
        <span>
          <img src={logo} alt="" />
          <h4>Erdem Yüksel Metal</h4>
        </span>
       <HomeLayout/>
      </div>

    </div>
  )
}

export default Header