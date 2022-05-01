import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import Head from 'next/head'
export async function getStaticProps() {

    const images = await Client().query(
        Prismic.Predicates.at("document.type", "slider")
    );
    let image_links = [];
    {
        images.results.map((image, index) => (
            (image.data.images_group.map((pic, index) => (
                image_links.push(pic.image.url)
            )))
        ))
    }
    image_links.reverse()
    return {
        props: {
            image_links: image_links
        },
    };
}



function index({ image_links }) {

    useEffect(() => {
        var slide = document.querySelectorAll('.slide');
        var current = 0;
        start();
        setInterval(() => next(), 2500)

    }, []);

    function start() {
        cls();
        slide[current].style.display = 'block';
    }

    function cls() {
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }
    }

    function next() {
        cls();
        if (current === slide.length - 1) current = -1;
        current++;

        slide[current].style.display = 'block';
        slide[current].style.opacity = 0.4;

        var x = 0.4;
        var intX = setInterval(function () {
            x += 0.1;
            slide[current].style.opacity = x;
            if (x >= 1) {
                clearInterval(intX);
                x = 0.4;
            }
        }, 100);

    }

    return (
        <div >
            <Head>
                <title>Vishnu Sagar Photography</title>
                <meta property="og:type" content="website" />
                <meta
                    name="keywords"
                    content="photography, photographer, photographer in canada, canada photography, canada, 
                    canada photography, india, canada photography  vishnu sagar, vishnu sagar photography, 
                    blacks photography, nude photography, 
                    portrait photography, landscape photography, real estate photography,
                    product photography, wedding photography, street photography, types of photography, maternity photography, 
                    nature photography, car photography, commercial photography, photography hashtags
                    body photography, long exposure photography"
                />
                <meta
                    property="og:title"
                    content="Vishnu Sagar Photography - Portfolio"
                />
                <meta
                    name="description"
                    content="Vishnu Sagar is photographer in canada"
                />
                <meta property="og:url" content="https://www.vishnusagarphotography.com/" />
                <meta property="og:site_name" content="Vishnu Sagar Photography" />
            </Head>
            <div>
                <div className="slider-container">
                    {image_links.map((image_url, index) => (
                        <div className="slide " style={{ backgroundImage: "url(" + image_url + ")" }} >
                            <div className="caption">
                                <h1 className="slide-page-heading">VISHNU SAGAR</h1>
                                <p>Photographer Based In Canada</p>
                                <div className="button-container ">
                                    <Link href="/home"><div className="slider-button ">PORTFOLIO</div></Link>
                                    {/* <div className="slider-button ">
                                        <a href="https://www.instagram.com/mevishnusagar/?hl=en">INSTAGRAM</a>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <script type="text/javascript" src="assets/js/slider.js"></script>
        </div>


    );

}

export default index
