import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import Head from 'next/head'
export async function getStaticProps() {

    const prismicData = await Client().query(
        Prismic.Predicates.at("document.type", "slider")
    );
    let image_links = [];
    {
        prismicData.results.map((image, index) => (
            (image.data.images_group.map((pic, index) => (
                image_links.push(pic.image.url)
            )))
        ))
    }
    image_links.reverse()
    let meta_title = prismicData?.results[0]?.data?.meta_title[0]?.text
    let meta_keywords = prismicData?.results[0]?.data?.meta_keywords[0]?.text
    let meta_ogImage = Object.keys(prismicData?.results[0]?.data?.social_media_image_thumbnail).length != 0 ?
        prismicData?.results[0]?.data?.social_media_image_thumbnail.url : ""
    return {
        props: {
            image_links: image_links,
            meta_title: meta_title,
            meta_keywords: meta_keywords,
            meta_ogImage: meta_ogImage
        },
    };
}



function index({ image_links, meta_title, meta_keywords, meta_ogImage }) {
    const [pageUrl, setPageUrl] = useState("")
    useEffect(() => {
        var slide = document.querySelectorAll('.slide');
        var current = 0;
        setPageUrl(window.location.href)
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
                <meta name="google-site-verification" content="yQTvrjew0Y8Ab9mTVqlg11EoEypDiAkMmifROtxK6hk" />
                <meta property="og:site_name" content="Vishnu Sagar Photography" />
                <meta name="author" content="Vishnu Sagar" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
