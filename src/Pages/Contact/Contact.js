import styles from "./contact.module.scss"
import Header from "../../Components/Header/Header"
import SectionImg from "../../Components/SectionImg/SectionImg"
import { MdLocationOn } from "react-icons/md"
import { FaMobileAlt, FaPaperPlane } from "react-icons/fa"
import Footer from "../../Components/Footer/Footer"

const Contact = () => {
    return (
        <div>
            <div className={styles.header}>
                <Header />
            </div>
            <SectionImg title="İletişim" />
            <section className={styles.map}>
                <iframe title='a' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4557847427723!2d29.98812031525827!3d40.75199904310477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb5009415f7727%3A0x7541ad1754b55bf6!2sErdem%20Y%C3%BCksel%20Metal!5e0!3m2!1str!2str!4v1669630438144!5m2!1str!2str" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className={styles.box}>
                    <h3>İletişim</h3>
                    <ul>
                        <li>
                            <MdLocationOn size={17} />
                            <span>Adres</span>
                        </li>
                        <li>
                            <FaPaperPlane size={17} />
                            <span>example@gmail.com</span>
                        </li>
                        <li>
                            <FaMobileAlt size={17} />
                            <span>0 550 000 00 00</span>
                        </li>
                    </ul>


                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact