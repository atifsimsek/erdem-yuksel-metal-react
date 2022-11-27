import styles from "./products.module.scss"
import Header from "../../Components/Header/Header"
import SectionImg from "../../Components/SectionImg/SectionImg"

import img1 from "../../assets/img/aurelien-romain-DB_q6rPFnBM-unsplash.jpg"
import img2 from "../../assets/img/clayton-cardinalli-hkJNx0EDbjE-unsplash.jpg"
import img3 from "../../assets/img/call-me-lamb-xjL4qcXPpQQ-unsplash.jpg"
import img4 from "../../assets/img/Slider/pexels-anamul-rezwan-1145434.jpg"

const Products = () => {
    return (
        <div style={{ height: "2500px" }}>
            <div className={styles.header}>
                <Header />
            </div>
            <SectionImg title="Ürünlerimiz/Hizmetlerimiz" />
            <section className={styles.products}>
                <div className={styles.card}>
                    <img src={img1} alt="" />
                    <div className={styles.text}>
                        <h4>Ürün 1</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.
                      
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={img2} alt="" />
                    <div className={styles.text}>
                        <h4>Ürün 3</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.
                      
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={img3} alt="" />
                    <div className={styles.text}>
                        <h4>Ürün 4</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.
                      
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={img4} alt="" />
                    <div className={styles.text}>
                        <h4>Ürün 4</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque aliquid quasi aperiam at? Consectetur quia deleniti sapiente adipisci harum fugit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam delectus reiciendis odio dolorem consectetur quasi similique, consequatur magnam ducimus molestiae.
                      
                        </p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Products