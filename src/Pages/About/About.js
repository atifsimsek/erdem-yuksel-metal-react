import syles from "./about.module.scss"
import Header from "../../Components/Header/Header"
import img from "../../assets/img/call-me-lamb-xjL4qcXPpQQ-unsplash.jpg"

const About = () => {
  return (
    <div style={{height:"2500rem"}}>
      <div className={syles.header}>
        <Header />
      </div>
      <section className={syles.imgBox}>
          <img src={img}  alt="" />
        </section>
    </div>
  )
}

export default About