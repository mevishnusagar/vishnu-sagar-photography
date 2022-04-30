import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";


export async function getStaticProps() {

    const portraitCategories = await Client().query(
        Prismic.Predicates.at("document.type", "portraits")
    );
    const activePortraitCategories = portraitCategories.results.filter(category => category.data.visible == true)
    console.log("filtered:", activePortraitCategories)
    activePortraitCategories.sort((a,b) => a.data.order - b.data.order)
    return {
        props: {
            portraitCategories: activePortraitCategories
        },
    };
}

function Portraits({ portraitCategories }) {
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
                            {
                                portraitCategories.map((category, index) => (
                                    <div className="portraits-page-menu-item">
                                        <Link href={`/portraits/${category.uid}`}>
                                            <div>
                                                <img src={category.data.thumbnail.url} />
                                                <div className="centered-text">
                                                    <h1>{category.data.page_name[0].text}</h1>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
            }
        </div>
    )
}

export default Portraits


