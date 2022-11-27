import styles from './sectionImg.module.scss'
import img from "../../assets/img/call-me-lamb-xjL4qcXPpQQ-unsplash.jpg"

const SectionImg = ({title}) => {
    return (
        <section className={styles.imgBox}>
            <img src={img} alt="" />
            <div className={styles.text}>
                {title}
            </div>
        </section >
    )
}

export default SectionImg