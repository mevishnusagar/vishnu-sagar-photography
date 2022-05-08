import React from 'react';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";



export async function getStaticProps() {

    const images = await Client().query(
        Prismic.Predicates.at("document.type", "about_page_image")
    );
    return {
        props: {
            about_page_image: images.results[0].data.about_page_image.url
        },
    };
}

function About({ about_page_image }) {
    return (
        <div className="aboutpage-image-content">
            <div className="container">
                <div className="aboutpage-image">
                    <img src={about_page_image} alt="Vishnu Sagar" ></img>
                </div>
                <div className="aboutpage-description-container">
                    <h2 className="aboutpage-description"> Hello,
                        I'm Vishnusagar.</h2>
                    <p className="aboutpage-description">
                        I'm a photographer.  Feel free to call me 'Vish'. I've always been a follow your heart kind of a guy. When I decided to pursue photography,
                        I didn't exactly know where the journey would take me. But here I am living out this dream. I've been recognized by two awards while graduating in photography.
                        My forte is landscape and portraits because I’m inspired by light, music, travel and a bit vulnerability. When I'm not exploring the city, you can find me in
                        the beautiful Canadian wilderness. My work is personal, while it's a collection of moments and feelings. You'll find bits and pieces of my heart as well.
                    </p>
                </div>
            </div>

        </div>

    )
}

export default About

