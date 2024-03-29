import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link'
export async function getStaticProps() {

    const servicetCategories = await Client().query(
        Prismic.Predicates.at("document.type", "services")
    );
    const activeservicetCategories = servicetCategories.results.filter(category => category.data.visible == true)
    console.log("filtered:", activeservicetCategories[0])
    activeservicetCategories.sort((a, b) => a.data.order - b.data.order)
    return {
        props: {
            servicetCategories: activeservicetCategories,
        },
    };
}

export default function apphead() {
    const Route = useRouter()
    const homePage = ["home"]
    const portraitsPage = ["portraits", "indoor", "outdoor"]
    const servicesPage = ["services"]
    const landscapePage = ["landscape"]
    const automotivePage = ["automotive"]
    const aboutPage = ["about"]
    const contactMePage = ["contact-me"]
    const [isIndexPage, setIsIndexPage] = useState(true);
    const [isHomePage, setIsHomePage] = useState(true);



    useEffect(() => {
        let path = window.location.pathname
        if (path == "/") {
            setIsIndexPage(true)
        }
        else {
            setIsIndexPage(false)
        }
    }, [Route])

    const changePageIndicator = () => {
        const currentPageUrl = Route.pathname || "";
        const [_, baseUrl] = currentPageUrl.split("/") || []
        if (homePage.includes(baseUrl)) {
            document.querySelector("#home-active").classList.add("active")
            document.querySelector("#portraits-active").classList.remove("active")
            document.querySelector("#services-active").classList.remove("active")
            document.querySelector("#landscape-active").classList.remove("active")
            // document.querySelector("#automotive-active").classList.remove("active")
            document.querySelector("#about-active").classList.remove("active")
            document.querySelector("#contact-me-active").classList.remove("active")
        } else if (portraitsPage.includes(baseUrl)) {
            document.querySelector("#portraits-active").classList.add("active")
            document.querySelector("#home-active").classList.remove("active")
            document.querySelector("#services-active").classList.remove("active")
            document.querySelector("#landscape-active").classList.remove("active")
            // document.querySelector("#automotive-active").classList.remove("active")
            document.querySelector("#about-active").classList.remove("active")
            document.querySelector("#contact-me-active").classList.remove("active")
        } else if (servicesPage.includes(baseUrl)) {
            document.querySelector("#services-active").classList.add("active")
            document.querySelector("#home-active").classList.remove("active")
            document.querySelector("#landscape-active").classList.remove("active")
            // document.querySelector("#automotive-active").classList.remove("active")
            document.querySelector("#about-active").classList.remove("active")
            document.querySelector("#portraits-active").classList.remove("active")
            document.querySelector("#contact-me-active").classList.remove("active")
        } else if (landscapePage.includes(baseUrl)) {
            document.querySelector("#landscape-active").classList.add("active")
            document.querySelector("#home-active").classList.remove("active")
            document.querySelector("#portraits-active").classList.remove("active")
            document.querySelector("#services-active").classList.remove("active")
            // document.querySelector("#automotive-active").classList.remove("active")
            document.querySelector("#about-active").classList.remove("active")
            document.querySelector("#contact-me-active").classList.remove("active")
        } else if (automotivePage.includes(baseUrl)) {
            // document.querySelector("#automotive-active").classList.add("active")
            document.querySelector("#home-active").classList.remove("active")
            document.querySelector("#portraits-active").classList.remove("active")
            document.querySelector("#services-active").classList.remove("active")
            document.querySelector("#landscape-active").classList.remove("active")
            document.querySelector("#about-active").classList.remove("active")
            document.querySelector("#contact-me-active").classList.remove("active")
        } else if (aboutPage.includes(baseUrl)) {
            document.querySelector("#about-active").classList.add("active")
            document.querySelector("#home-active").classList.remove("active")
            document.querySelector("#portraits-active").classList.remove("active")
            document.querySelector("#services-active").classList.remove("active")
            document.querySelector("#landscape-active").classList.remove("active")
            // document.querySelector("#automotive-active").classList.remove("active")
            document.querySelector("#contact-me-active").classList.remove("active")
        } else if (contactMePage.includes(baseUrl)) {
            document.querySelector("#contact-me-active").classList.add("active")
            document.querySelector("#home-active").classList.remove("active")
            document.querySelector("#portraits-active").classList.remove("active")
            document.querySelector("#services-active").classList.remove("active")
            document.querySelector("#landscape-active").classList.remove("active")
            // document.querySelector("#automotive-active").classList.remove("active")
            document.querySelector("#about-active").classList.remove("active")
        }
    }
    useEffect(() => {
        if (isIndexPage) {
            setTimeout(() => {
                changePageIndicator()
            }, 1000);
        }
        else {
            changePageIndicator()
        }
    }, [Route])



    return (
        <>
            {
                isIndexPage ?
                    <>
                    </>
                    :
                    <div>
                        <div className="header">
                            <div className="logo">
                                <Link href="/home" ><img src="/assets/images/black-height-updated.png" alt="Vishnu Sagar Photography" className="main-page-logo"></img></Link>
                            </div>
                            <div className="navbar">
                                <div id="home-active">
                                    <Link className="nav-item nav-item-home" href="/home" >
                                        Home
                                    </Link>
                                </div>
                                <div id="portraits-active">
                                    <Link className="nav-item nav-item-portraits" href="/portraits" >
                                        Portraits
                                    </Link>
                                </div>
                                <div id="services-active">
                                    <Link className="nav-item nav-item-portraits" href="/services" >
                                        Services
                                    </Link>
                                </div>
                                <div id="landscape-active">
                                    <Link className="nav-item nav-item-fourthpage" href="/landscape">
                                        Landscape
                                    </Link>
                                </div>
                                {/* <div id="automotive-active">
                                    <Link className="nav-item nav-item-fourthpage" href="/automotive" >
                                        Automotive
                                    </Link>
                                </div> */}
                                <div id="about-active">
                                    <Link className="nav-item nav-item-about" href="/about" >
                                        About
                                    </Link>
                                </div>
                                <div id="contact-me-active">
                                    <Link className="nav-item nav-item-contact-me" href="/contact-me">
                                        Contact Me
                                    </Link>
                                </div>

                            </div>
                            <div className="social-icons">
                                <div>
                                    <a className="btn" href="https://www.facebook.com/mevishnusagar" ><i
                                        className="fa fa-facebook fa-sm"></i>
                                    </a>
                                </div>
                                <div>
                                    <a className="btn" href="https://twitter.com/iamvishnusagar/" ><i
                                        className="fa fa-twitter fa-sm"></i>
                                    </a>
                                </div>
                                <div>
                                    <a className="btn" href="https://www.instagram.com/vishnusagar_vijayan/" ><i
                                        className="fa fa-instagram fa-sm"></i>
                                    </a>
                                </div>
                                <div>
                                    <a className="btn" href="https://wa.me/+12263766078" ><i
                                        className="fa fa-whatsapp fa-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-header sticky-top ">
                            <div className="logo-container">
                                <Link href="/home"><img src="/assets/images/black-height-updated.png" alt="Vishnu Sagar Photography" className="mobile-logo" /></Link>
                            </div>
                            <div className="menu-button">
                                <input type="checkbox" id="burger-toggle" />
                                <label htmlFor="burger-toggle" className="burger-menu">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </label>
                                <div className="menu ">
                                    <div className="menu-inner">
                                        <ul className="menu-nav">
                                            <li className="menu-nav-item" id="home-active"><a className="menu-nav-link" href="/home"><span>
                                                <div>Home</div>
                                            </span></a></li>
                                            <li className="menu-nav-item" id="portraits-active"><a className="menu-nav-link" href="/portraits"><span>
                                                <div>Portraits</div>
                                            </span></a></li>
                                            <li className="menu-nav-item" id="services-active"><a className="menu-nav-link" href="/services"><span>
                                                <div>Services</div>
                                            </span></a></li>
                                            <li className="menu-nav-item" id="landscape-active"><a className="menu-nav-link" href="/landscape"><span>
                                                <div>Landscape</div>
                                            </span></a></li>
                                            {/* <li className="menu-nav-item" ><a className="menu-nav-link" href="/automotive"><span id="automotive-active">
                                                <div>Automotive</div>
                                            </span></a></li> */}
                                            {/* <li className="menu-nav-item"><a className="menu-nav-link" href="/commercial"><span>
                                                <div>Commercial</div>
                                            </span></a></li> */}
                                            <li className="menu-nav-item" ><a className="menu-nav-link" href="/about"><span id="about-active">
                                                <div >About</div>
                                            </span></a></li>
                                            <li className="menu-nav-item" id="contact-me-active"><a className="menu-nav-link" href="/contact-me"><span>
                                                <div>Contact Me</div>
                                            </span></a></li>
                                            <li>
                                                <div className="social-icons">
                                                    <div>
                                                        <a className="btn" href="https://www.facebook.com/mevishnusagar" ><i
                                                            className="fa fa-facebook fa-sm"></i>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a className="btn" href="https://twitter.com/iamvishnusagar/" ><i
                                                            className="fa fa-twitter fa-sm"></i>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a className="btn" href="https://www.instagram.com/vishnusagar_vijayan/" ><i
                                                            className="fa fa-instagram fa-sm"></i>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a className="btn" href="https://wa.me/+12263766078" ><i
                                                            className="fa fa-whatsapp fa-sm"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="sgr-logo">
                                        <img src="/assets/images/sign.png" className="sign" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
