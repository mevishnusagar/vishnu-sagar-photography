import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import Head from 'next/head'


export async function getStaticProps() {

    const servicetCategories = await Client().query(
        Prismic.Predicates.at("document.type", "services")
    );
    const activeservicetCategories = servicetCategories.results.filter(category => category.data.visible == true)
    console.log("filtered:", activeservicetCategories)
    activeservicetCategories.sort((a, b) => a.data.order - b.data.order)
    let meta_keywords = []
    for (let i = 0; i < activeservicetCategories.length; i++) {
        let category_name = activeservicetCategories[i].data.page_name[0].text + " Photography"
        meta_keywords.push(category_name)
    }
    return {
        props: {
            servicetCategories: activeservicetCategories,
            meta_keywords: meta_keywords
        },
    };
}

function Services({ servicetCategories, meta_keywords }) {
    const [loading, setLoading] = useState(true)
    const antIcon = <LoadingOutlined style={{ fontSize: 26 }} spin />;
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    });
    return (
        <div className="container">
            <Head>
                <title>services - Vishnu Sagar Photography</title>
                <meta property="og:type" content="website" />
                <meta
                    name="keywords"
                    content={meta_keywords}
                />
                <meta
                    property="og:title"
                    content="servicets - Vishnu Sagar Photography"
                />
                <meta
                    name="description"
                    content="Fashion, commercial, servicet and landscape photographer based out of London, Ontario"
                />
                <meta property="og:url" content="https://www.vishnusagarphotography.com/" />
                <meta property="og:site_name" content="Vishnu Sagar Photography" />
            </Head>
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
                                servicetCategories.map((category, index) => (
                                    <div className="portraits-page-menu-item">
                                        <Link href={`/services/${category.uid}`}>
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

export default Services


