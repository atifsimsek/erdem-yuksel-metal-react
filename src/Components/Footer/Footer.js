import styles from "./footer.module.scss";
import imgLogo from "../../assets/img/logo-yazisiz-removebg-preview.png";
import { MdLocationOn } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.hours}>
          <h3>Açık Saatler</h3>
          <ul>
            <li>
              <AiFillClockCircle size={17} />
              <span>Hafta İçi 08:00 - 17:00</span>
            </li>
            <li>
              <AiFillClockCircle size={17} />
              <span>Hafta Sonu 08:00 - 12:00</span>
            </li>
          </ul>
        </div>
        <div className={styles.logo}>
          <img src={imgLogo} alt="" />
          <ul>
            <li>
              <FaFacebook size={24} />
            </li>
            <li>
              <FaInstagram size={24} />
            </li>
            <li>
              <FaTwitter size={24} />
            </li>
            <li>
              <FaLinkedin size={24} />
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>İletişim</h3>
          <ul>
            <li>
              <span>Adres</span>
              <MdLocationOn size={17} />
            </li>
            <li>
              <span>example@gmail.com</span>
              <FaPaperPlane size={17} />
            </li>
            <li>
              <span>0 550 000 00 00</span>
              <FaMobileAlt size={17} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
