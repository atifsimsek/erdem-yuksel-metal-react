import styles from "./projects.module.scss"
import Slider from "react-slick"
import projects from "../../api/projects"
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"
const Projects = () => {


    function NextBtn({ onClick }) {
        return (
            <button className={styles.arrowButton} onClick={onClick}>
                <MdArrowForwardIos className={styles.arrowNext} size={28} />
            </button>


        );
    }

    function PrevBtn({ onClick }) {
        return (
            <button className={styles.arrowButton} onClick={onClick}>
                <MdArrowBackIos className={styles.arrowPrev} size={28} />
            </button>
        );
    }





    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    }


    return (
        <div className={styles.projects}>
            <h1>Projelerimiz</h1>
            <div className={styles.projectContainer}>
                <Slider  {...settings}>
                    {projects.map(proje => (
                        <div className={styles.projeBox} key={proje.id}>
                            <img src={proje.image} alt="" />
                            <div className={styles.text}>
                                <h3>{proje.title}</h3>
                                <p>{proje.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>



            </div>

        </div>
    )
}

export default Projects