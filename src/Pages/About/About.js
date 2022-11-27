import styles from "./about.module.scss"
import Header from "../../Components/Header/Header"
import SectionImg from "../../Components/SectionImg/SectionImg"
import img2 from "../../assets/img/c-d-x-RE4KOQzKig4-unsplash.jpg"
import Footer from "../../Components/Footer/Footer"

const About = () => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <SectionImg title ="Hakkımızda"/>
      <section className={styles.aboutBox}>
        <div className={styles.aboutText}>
          <h1>Ana Başlık</h1>
          <h5>Bold Yazı Lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ratione!ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aperiam.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio doloribus asperiores reprehenderit nulla voluptas quos. Quisquam consectetur dolore sit ducimus esse itaque provident fugit ab unde excepturi, illum dolores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe harum obcaecati corporis est dicta veniam ullam. Mollitia repudiandae impedit non recusandae soluta, quam neque delectus nobis ipsam est aperiam, ab nostrum aliquam perspiciatis. Minus corrupti iste suscipit consequatur deleniti, laborum, adipisci odio cupiditate, et obcaecati dicta enim sed officiis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laborum ipsum veniam et tenetur qui itaque dicta accusamus dolor esse nulla atque rem odit, porro maiores aliquam veritatis praesentium accusantium commodi saepe possimus aperiam. In eligendi, dolore consequatur qui quisquam facilis neque earum a, error amet quaerat animi corrupti fuga.
          </p>

          <button className={`${styles.btn41} ${styles.btn43}`}>Hizmetlerimiz</button>

        </div>

        <div className={styles.aboutImage}>
          <img src={img2} alt="" />
          <div className={styles.card}>
            <div className={styles.box}>
              <h4>Misyonumuz</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptatum, sint excepturi ducimus quam debitis perferendis</p>
            </div>
            <div className={styles.box}>
              <h4>Vizyonumuz</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptatum, sint excepturi ducimus quam debitis perferendis</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div >
  )
}

export default About