import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Head from 'next/head'


export async function getStaticProps() {

    const prismicData = await Client().query(
        Prismic.Predicates.at("document.type", "home_page")
    );
    console.log(prismicData.results)
    let images_Data = prismicData.results[0].data.images_group
    images_Data.reverse()
    let meta_title = prismicData?.results[0]?.data?.meta_title[0]?.text
    let meta_keywords = prismicData?.results[0]?.data?.meta_keywords[0]?.text
    let meta_ogImage = Object.keys(prismicData?.results[0]?.data?.social_media_image_thumbnail).length > 0 ?
        prismicData?.results[0]?.data?.social_media_image_thumbnail.url : ""
    return {
        props: {
            images_Data: images_Data,
            meta_title: meta_title,
            meta_keywords: meta_keywords,
            meta_ogImage: meta_ogImage

        },
    };
}

function Home({ images_Data, meta_title, meta_keywords, meta_ogImage }) {
    const [flag, setFlag] = useState(3)
    const [width, setwidth] = useState(0)
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState("none")
    const [open, setOpen] = useState("")
    const [imagesrc, setImagesrc] = useState(" ")
    const [imagesData, setImagesData] = useState([])
    const [startingX, setStartingX] = useState();
    const [startingY, setStartingY] = useState();
    const [movingX, setMovingX] = useState();
    const [movingY, setMovingY] = useState();
    const antIcon = <LoadingOutlined style={{ fontSize: 26 }} spin />;
    const [pageUrl, setPageUrl] = useState("")
    useEffect(() => {

        var grid = document.querySelector('.grid');
        var colc = new Colcade(grid, {
            columns: '.grid-col',
            items: '.grid-item'
        });
        setPageUrl(window.location.href)
        setImagesData(images_Data)
        setwidth(window.screen.width)
        setTimeout(() => {
            setLoading(true)
        }, 500);
        setTimeout(() => {
            setDisplay("flex")
        }, 1000);
    });
    useEffect(() => {
        if (window.screen.width < 768) {
            setFlag(2)
        }
        else {
            setFlag(3)
        }
    }, [width]);

    let inputStyle = {
        borderRight: "8px solid white",
        borderBottom: "8px solid white"
    };
    let inputStyle2 = {
        borderBottom: "8px solid white"
    };
    const displayImage = (image_url) => {
        setImagesrc(image_url)
        const modalp = document.querySelector(".modalp");
        modalp.classList.add("open");

        modalp.addEventListener("click", (e) => {
            if (e.target.classList.contains("modalp")) {
                modalp.classList.remove("open");
            }
        })
    }
    const nextImage = () => {
        setStartingX(0)
        console.log(startingX)
        let size = imagesData.length
        let index = imagesData.findIndex(img => img.image.url == imagesrc);
        if (index == size - 1) {
            index = 0;
        }
        else {
            index++
        }
        let nextImage = imagesData[index]
        setImagesrc(nextImage.image.url)
    }
    const prevImage = () => {
        setStartingX(0)
        console.log(startingX)
        let size = imagesData.length
        let index = imagesData.findIndex(img => img.image.url == imagesrc);
        if (index == 0) {
            index = size - 1;
        }
        else {
            index--
        }
        let nextImage = imagesData[index]
        setImagesrc(nextImage.image.url)

    }
    const touchStart = (event) => {
        setStartingX(0)
        var startx = event.touches[0].clientX
        setStartingX(startx)
        console.log(startingX)
        var starty = event.touches[0].clientY
        setStartingY(starty)
    }
    const touchMove = (event) => {
        var movex = event.touches[0].clientX
        setMovingX(movex)
        console.log(startingX)
        console.log("movingX: ", movingX)
        var movey = event.touches[0].clientY
        setMovingY(movey)
    }
    const touchEnd = () => {
        if (startingX + 30 < movingX) {
            console.log("right")
            console.log(startingX)
            prevImage()
        }
        else if (startingX - 30 > movingX) {
            console.log("left")
            console.log(startingX)
            nextImage()

        }
    }

    return (

        <div>
            <Head>
                {/* -- Primary Meta Tags -- */}
                <title>{meta_title}</title>
                <meta name="title" content={meta_title} />
                <meta name="description" content="Fashion, commercial, portrait and landscape photographer based out of London, Ontario" />

                {/* -- Open Graph / Facebook -- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta
                    property="og:title"
                    content={meta_title}
                />
                <meta property="og:description" content="Fashion, commercial, portrait and landscape photographer based out of London, Ontario" />
                <meta property="og:image" content={meta_ogImage.length > 0 ? meta_ogImage : "/assets/images/sgr.JPG"} />

                {/* -- Twitter - */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={pageUrl} />
                <meta property="twitter:title" content={meta_title} />
                <meta property="twitter:description" content="Fashion, commercial, portrait and landscape photographer based out of London, Ontario" />
                <meta property="twitter:image" content={meta_ogImage.length > 0 ? meta_ogImage : "/assets/images/sgr.JPG"} />
                <meta
                    name="keywords"
                    content={meta_keywords}
                />
                <meta property="og:site_name" content="Vishnu Sagar Photography" />
                <meta name="author" content="Vishnu Sagar" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="gallery-container">
                {
                    loading == false ?
                        <div className="gallery-container" >
                            <div className="text-center loader-container">
                                <div>
                                    <Spin indicator={antIcon} />
                                </div>
                                <div>
                                    <h2>loading..</h2>
                                </div>
                            </div>
                            <div className="grid">
                            </div>
                        </div>
                        :
                        <div className="grid" style={{ display: display }}>
                            <div className="grid-col grid-col--1">

                            </div>
                            <div className="grid-col grid-col--2">

                            </div>
                            <div className="grid-col grid-col--3">

                            </div>
                            <div className="grid-col grid-col--4">

                            </div>
                            {images_Data.map((item, index) => (

                                <div className="grid-item" key={index}>

                                    <img src={item.image.url} alt={item.image.alt} className="images" style={flag == 2 && index % 2 ? inputStyle2 : inputStyle} onClick={() => displayImage(item.image.url)} />
                                </div>
                            ))}
                        </div>

                }
            </div>
            <div className="modalp">
                <div className="preview-container">
                    <div className="right" onClick={() => nextImage()} title="Next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div>
                        <img src={imagesrc} className="full-img" onTouchStart={() => touchStart(event)} onTouchMove={() => touchMove(event)} onTouchEnd={() => touchEnd()} />
                    </div>
                    <div className="left" onClick={() => prevImage()} title="Previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
