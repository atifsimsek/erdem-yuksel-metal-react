import { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from '../../Components/Header/Header';
import styles from "./homepage.module.scss"
import img1 from "../../assets/img/Slider/christopher-burns-8KfCR12oeUM-unsplash.jpg"
import img2 from "../../assets/img/Slider/ant-rozetsky-SLIFI67jv5k-unsplash.jpg"
import img3 from "../../assets/img/Slider/pexels-anamul-rezwan-1145434.jpg"
import img4 from "../../assets/img/Slider/c-d-x-RE4KOQzKig4-unsplash.jpg"
import img5 from "../../assets/img/spencer-davis-SVfXlChg9HI-unsplash.jpg"
import { VscFoldDown } from "react-icons/vsc"
import { RiTeamFill } from "react-icons/ri"
import { MdOutlineSupport, MdOutlineMiscellaneousServices } from "react-icons/md"
import Projects from '../../Components/Projects/Projects';
import Footer from "../../Components/Footer/Footer"



const HomePage = () => {


    const [visible, setVisible] = useState(false);


    useEffect(() => {

        const headerFixed = () => {
            if (window.scrollY >= "150") {
                setVisible(true)
            }
            else {
                setVisible(false)
            }
        }
        window.addEventListener("scroll", headerFixed)
        return () => window.removeEventListener("scroll", headerFixed)
    }, [])



    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    };
    return (
        <div className={styles.homepage}>

            <section className={styles.sliderContiner}>
                <Slider {...settings}>
                    <div className={styles.slide}>
                        <img className={styles.sliderImg} src={img1} alt="" />
                        <div className={styles.text}>
                            <h1>Başlık 1</h1>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem magni consequuntur <br /> blanditiis officiis laudantium vero illum quidem tempore eos.</p>
                        </div>
                        <div className={styles.overlay}>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <img className={styles.sliderImg} src={img2} alt="" />
                        <div className={styles.text}>
                            <h1>Başlık 2</h1>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem magni consequuntur <br /> blanditiis officiis laudantium vero illum quidem tempore eos.</p>
                        </div>
                        <div className={styles.overlay}>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <img className={styles.sliderImg} src={img3} alt="" />
                        <div className={styles.text}>
                            <h1>Başlık 3</h1>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem magni consequuntur <br /> blanditiis officiis laudantium vero illum quidem tempore eos.</p>
                        </div>
                        <div className={styles.overlay}>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <img className={styles.sliderImg} src={img4} alt="" />
                        <div className={styles.text}>
                            <h1>Başlık 4</h1>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem magni consequuntur <br /> blanditiis officiis laudantium vero illum quidem tempore eos.</p>
                        </div>
                        <div className={styles.overlay}>
                        </div>
                    </div>
                </Slider>
                <VscFoldDown size={50} className={`${styles.down} ${visible && styles.hideDown}`} />
            </section>
            <Header />

            <section className={styles.containerWhy}>
                <div className={styles.container}>
                    <img src={img5} alt="" />
                    <div className={styles.box}>
                        <div className={styles.description}>
                            <h3>Neden Biz ?</h3>
                            <h2>Başlık 2</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, et nemo mollitia voluptate, ipsam velit voluptas distinctio, enim beatae quasi autem vitae rerum ut similique saepe quibusdam corrupti sapiente sit doloremque fuga eius ratione incidunt! Sint quasi accusamus non incidunt magni ut recusandae reiciendis! Nam voluptate suscipit animi officia, earum quaerat, error quia magni esse delectus repellat tempore, quisquam eos. Expedita et itaque vero dicta quibusdam nulla, neque necessitatibus, adipisci facilis reiciendis ullam fugit cum corporis quia? Id, quia adipisci.
                            </p>
                        </div>
                        <div className={styles.icons}>
                            <div>
                                <span><RiTeamFill size={35} /></span>
                                <span>Profesyonel Çalışanlar</span>
                            </div>
                            <div>
                                <span><MdOutlineMiscellaneousServices size={35} /></span>
                                <span>Akıllı Servis Çözümleri</span>
                            </div>
                            <div>
                                <span><MdOutlineSupport size={35} /></span>
                                <span>Kesintisiz Destek</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <Projects />
            <Footer />

        </div>
    )
}

export default HomePage