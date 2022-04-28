import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";


export async function getStaticProps() {

    const images = await Client().query(
        Prismic.Predicates.at("document.type", "portraits_thumbnails")
    );
    return {
        props: {
            indoor_thumbnail: images.results[0].data.indoor_portraits_thumbnail.url,
            outdoor_thumbnail: images.results[0].data.outdoor_portraits_thumbnail.url
        },
    };
}

function Portraits({ indoor_thumbnail, outdoor_thumbnail}) {
    const [loading, setLoading] = useState(true)
    const antIcon = <LoadingOutlined style={{ fontSize: 26 }} spin />;
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    });
    return (
        <div className="container">
            {
                    loading == true ?
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
            <div className="portraits-page">
                <div className="portraits-page-menu">
                    <div className="portraits-page-menu-item">
                        <Link href="indoor">
                            <div>
                                <img src={indoor_thumbnail} />
                                <div className="centered-text">
                                    <h1>INDOOR</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="portraits-page-menu-item">
                        <Link href="outdoor">
                            <div>
                                <img src={outdoor_thumbnail} />
                                <div className="centered-text">
                                    <h1>OUTDOOR</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default Portraits


