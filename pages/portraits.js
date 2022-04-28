import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Portraits() {
    const [loading, setLoading] = useState(false)
    const antIcon = <LoadingOutlined style={{ fontSize: 26 }} spin />;

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 500);
    });
    return (
        <div className="container">
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
            <div className="portraits-page">
                <div className="portraits-page-menu">
                    <div className="portraits-page-menu-item">
                        <Link href="indoor">
                            <div>
                                <img src="assets/images/indoor.jpeg" />
                                <div className="centered-text">
                                    <h1>INDOOR</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="portraits-page-menu-item">
                        <Link href="outdoor">
                            <div>
                                <img src="assets/images/outdoor.jpeg" />
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
        // <div class="container">
        //     <div className="portraits-page">
        //         <div class="row portraits-page-menu">
        //             <div class="col-12 portraits-page-menu-item col-md-6">
        //                 <Link href="indoor">
        //                     <img src="assets/images/indoor.jpeg" />
        //                 </Link>
        //                 <div>
        //                     <h1>INDOOR</h1>
        //                 </div>
        //             </div>
        //             <div class="col-12 portraits-page-menu-item col-md-6">
        //                 <Link href="indoor">
        //                     <img src="assets/images/outdoor.jpeg" />
        //                 </Link>
        //                 <div>
        //                     <h1>OUTDOOR</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Portraits


