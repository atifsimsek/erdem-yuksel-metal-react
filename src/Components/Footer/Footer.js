import styles from "./footer.module.scss"
import imgLogo from "../../assets/img/logo-yazisiz-removebg-preview.png"
import { MdLocationOn } from "react-icons/md"
import { AiFillClockCircle } from "react-icons/ai"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMobileAlt, FaPaperPlane } from "react-icons/fa"


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.hours}>
          <h3>Açık Saatler</h3>
          <ul>
            <li>
              <AiFillClockCircle />
              <span>Hafta İçi 08:00 - 17:00</span>
            </li>
            <li>
              <AiFillClockCircle />
              <span>Hafta Sonu 08:00 - 12:00</span>
            </li>
          </ul>
        </div>
        <div className={styles.logo}>
          <img src={imgLogo} alt="" />
          <ul>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaTwitter /></li>
            <li><FaLinkedin /></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>İletişim</h3>
          <ul>
            <li>
              <span>Adres</span>
              <MdLocationOn />
            </li>
            <li>
              <span>example@gmail.com</span>
              <FaPaperPlane />
            </li>
            <li>
              <span>0 550 000 00 00</span>
              <FaMobileAlt />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer