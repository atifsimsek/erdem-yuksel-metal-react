import styles from "./footer.module.scss"
import imgLogo from "../../assets/img/logo-yazisiz-removebg-preview.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <nav className={styles.contact}>
          <h3>İletişim</h3>
          <ul>
            <li>Mail</li>
            <li>Telefon</li>
            <li>Adres</li>
          </ul>
        </nav>
        <div className={styles.logo}>
          <img src={imgLogo} alt="" />
          <h3>Erdem Yüksel Metal</h3>
        </div>
        <nav className={styles.social}>
          <h3>Sosyal Medya</h3>
          <ul>
            <li>Facebook</li>
            <li>İnstagram</li>
            <li>Twitter</li>
          </ul>
        </nav>
      </div>
      <div className={styles.copy}>
        &copy;2022 Erdem Yüksel Metal
      </div>
    </div>
  )
}

export default Footer