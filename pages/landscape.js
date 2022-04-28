import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


export async function getStaticProps() {

    const images = await Client().query(
        Prismic.Predicates.at("document.type", "landscape_page")
    );
    let image_links = [];
    {
        images.results.map((image, index) => (
            (image.data.images_group.map((pic, index) => (
                image_links.push(pic.image.url)
            )))
        ))
    }
    return {
        props: {
            image_links: image_links
        },
    };
}

function Landscape({ image_links }) {
    const [flag, setFlag] = useState(3)
    const [width, setwidth] = useState(0)
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState("none")
    const [open, setOpen] = useState("")
    const [imagesrc, setImagesrc] = useState(" ")
    const [imagelinks, setImagelinks] = useState([])
    const [startingX, setStartingX] = useState();
    const [startingY, setStartingY] = useState();
    const [movingX, setMovingX] = useState();
    const [movingY, setMovingY] = useState();
    const antIcon = <LoadingOutlined style={{ fontSize: 26 }} spin />;
    useEffect(() => {

        var grid = document.querySelector('.grid');
        var colc = new Colcade(grid, {
            columns: '.grid-col',
            items: '.grid-item'
        });
        setImagelinks(image_links)
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
        let size = imagelinks.length
        let index = imagelinks.findIndex(img => img == imagesrc);
        if (index == size - 1) {
            index = 0;
        }
        else {
            index++
        }
        let nextImage = imagelinks[index]
        setImagesrc(nextImage)
    }
    const prevImage = () => {
        setStartingX(0)
        console.log(startingX)
        let size = imagelinks.length
        let index = imagelinks.findIndex(img => img == imagesrc);
        if (index == 0) {
            index = size - 1;
        }
        else {
            index--
        }
        let nextImage = imagelinks[index]
        setImagesrc(nextImage)
        
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
        console.log("movingX: ",movingX)
        var movey = event.touches[0].clientY
        setMovingY(movey)
    }
    const touchEnd = () => {
        if (startingX+30 < movingX){
            console.log("right")
            console.log(startingX)
            prevImage()
        }
        else if (startingX-30 > movingX){
            console.log("left")
            console.log(startingX)
            nextImage()
            
        }
    }

    return (

        <div>
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
                            {image_links.map((image_url, index) => (

                                <div className="grid-item" key={index}>

                                    <img src={image_url} className="images" style={flag == 2 && index % 2 ? inputStyle2 : inputStyle} onClick={() => displayImage(image_url)} />
                                </div>
                            ))}
                        </div>
                        
                }
            </div>
            <div className="modalp">
                <div className="preview-container">
                    <div className="right" onClick={() => nextImage()} title="Next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className ="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div>
                        <img src={imagesrc} className="full-img" onTouchStart = {() => touchStart(event)} onTouchMove={() => touchMove(event)} onTouchEnd={() => touchEnd()} />
                    </div>
                    <div className="left" onClick={() => prevImage()} title="Previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className ="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                </div>


            </div>


        </div>

    )
}

export default Landscape
