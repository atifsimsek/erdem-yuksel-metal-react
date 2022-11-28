import styles from "./products.module.scss"
import Header from "../../Components/Header/Header"
import SectionImg from "../../Components/SectionImg/SectionImg"
import Footer from "../../Components/Footer/Footer"

import img1 from "../../assets/img/aurelien-romain-DB_q6rPFnBM-unsplash.jpg"
import img2 from "../../assets/img/clayton-cardinalli-hkJNx0EDbjE-unsplash.jpg"
import img3 from "../../assets/img/call-me-lamb-xjL4qcXPpQQ-unsplash.jpg"
import img4 from "../../assets/img/Slider/pexels-anamul-rezwan-1145434.jpg"

import icon1 from "../../assets/icons/001-conveyor-belt.png"
import icon3 from "../../assets/icons/003-manufacture.png"
import icon4 from "../../assets/icons/004-factory-machine.png"
import icon5 from "../../assets/icons/005-worker.png"

const Products = () => {
    return (
        <div>
            <div className={styles.header}>
                <Header />
            </div>
            <SectionImg title="Ürünlerimiz/Hizmetlerimiz" />
            <section className={styles.products}>
                <div className={styles.card}>
                    <div className={styles.Imgbox}>
                        <img src={img1} alt="" />
                        <img className={styles.icon} src={icon5} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h4>Ürün/Hizmet 1</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.Imgbox}>
                        <img src={img2} alt="" />
                        <img className={styles.icon} src={icon1} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h4>Ürün/Hizmet 2</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.

                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.Imgbox}>
                        <img src={img3} alt="" />
                        <img className={styles.icon} src={icon3} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h4>Ürün/Hizmet 3</h4>
                        <p>               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.

                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.Imgbox}>
                        <img src={img4} alt="" />
                        <img className={styles.icon} src={icon4} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h4>Ürün/Hizmet 4</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.

                        </p>
                    </div>
                </div>

            </section>
            <Footer/>
        </div>
    )
}

export default Products