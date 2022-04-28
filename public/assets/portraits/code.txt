import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Head from 'next/head' 
export async function getStaticProps()
{
  
  const images = await Client().query(
    Prismic.Predicates.at("document.type","portraits")
  );
    let image_links = [];
    {images.results.map((image, index) => (
                  
                
        (image.data.images_group.map((pic, index) => (
            image_links.push(pic.image.url)
        )))
    ))} 
    
  return {
    props: {
        image_links: image_links

      
    },
  };
}

function portraits({ image_links }) {
    const [flag,setFlag] = useState(3)
    const [width,setwidth] = useState(0)
    const [loading,setLoading] = useState(false)
    const [display,setDisplay] = useState("none")
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    useEffect(() => {
       
        var grid = document.querySelector('.grid');
        var colc = new Colcade( grid, {
        columns: '.grid-col',
        items: '.grid-item'
        });
        setwidth(window.screen.width)
        setTimeout(() => {
            setLoading(true)
            }, 1400);
        setTimeout(() => {
            setDisplay("flex")
            }, 2000);
    } );
    useEffect(() => {   
        if(window.screen.width<768)
        {
            setFlag(2)
        }
        else{
            setFlag(3)
        }
    },[width]);
    
    let inputStyle = {
        borderRight: "7px solid white",
        borderBottom: "7px solid white"
    };
    let inputStyle2 = {
        borderBottom: "7px solid white"
    };
    const funct = () =>{

    }
    return (
        <div>
            <div className="gallery-container">
                {
                    loading == false ? 
                    <div >
                        <div className="portraits-loader">
                            <img src="assets/images/portraits.jpg" onClick={funct()} />
                        </div>
                        <div className="loader-name">
                            <div className="name"><pre>P O R T R A I T S</pre></div>
                        </div>
                        <div className="grid">

                        </div>
                    </div>
                    : 
                    <div >
                        <div className="grid" style={{display:display}} >
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
                                    <img src={image_url} className="images"  style={ flag == 2 && index % 2 ? inputStyle2 : inputStyle} />
                                </div> 
                            ))} 
                        </div>
                    </div>
                    }
            </div>
            
        </div>
        
    )
}

export default portraits

