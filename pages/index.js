import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
export async function getStaticProps() {

    const images = await Client().query(
        Prismic.Predicates.at("document.type", "automotive_page")
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



function index({ image_links }) {

    useEffect(() => {
        var slide = document.querySelectorAll('.slide');
        var current = 0;
        start();
        setInterval(() => next(), 5000)

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
