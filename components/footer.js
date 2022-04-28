import React, { useState, useEffect } from 'react';


function footer() {
    const [isIndexPage, setIsIndexPage] = useState(true);

    useEffect( ()=>
    {
        let path = window.location.pathname
        if (path == "/")
        {
            setIsIndexPage(true) 
        }
        else{
            setIsIndexPage(false)
        }
    }, )
    return (
        <>
            {
                isIndexPage ?
                    <div>
                        <div>
                            <div className="text-center footer-in-index">
                                <img src="assets/images/sign-white.png" className="sign"></img>
                            </div>
                        </div>
                        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
                        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                        <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    </div>
                    :
                    <div>
                        <div>
                            <div className="text-center footer">
                                <img src="assets/images/sign.png" className="sign"></img>
                            </div>
                        </div>
                        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
                        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
                        <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                    </div>
            }
        </>    
    )
}

export default footer
