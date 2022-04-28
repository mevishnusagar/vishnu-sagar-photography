import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Head from 'next/head'

function contactMe() {
    const [loading, setLoading] = useState(true)
    const antIcon = <LoadingOutlined style={{ fontSize: 26 }} spin />;

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 150);
    });
    const [formStatus, setFormStatus] = useState("");
    const [isSubmitSucess, setIsSubmitSucess] = useState(false);
    let submitMessageSuccessStyle = {
        color: "rgb(87 82 87)"
    };
    let submitMessageErrorStyle = {
        color: "#FF0000"
    };
    const submitForm = (e) => {
        $("#submit-form").submit((e) => {
            e.preventDefault()
            console.log("submit fn.")
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbwLORTYjmbKqFlGxIg8qsjlq8DlRO2tLN4QDE-erEsr0WBTth7rrXn_6yUCCcjqzUFs/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    setIsSubmitSucess(true)
                    setFormStatus("Contact me request submitted successfully!")
                    // $('#submit-form')[0].reset()
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error: function (err) {
                    setIsSubmitSucess(false)
                    setFormStatus("Something went wrong, Try again")

                }
            })
        })
    }

    return (
        <div>
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
                    <div>
                        <Head>
                            <link href="/assets/css/contactme.css" rel="stylesheet" />
                            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                        </Head>
                        <div >
                            <div className="contact-form-section">
                                <div className="form-title">
                                    <h2>Contact Me</h2>
                                </div>
                                <div className="contact-form">
                                    <form id="submit-form" action="">
                                        <div className="dual-input">
                                            <div className="first-name">
                                                <label htmlFor="first">First Name*</label>
                                                <input type="text" id="first-name-input" name="firstname" placeholder="enter your first name" required />
                                            </div>
                                            <div className="last-name">
                                                <label htmlFor="last">Last Name</label>
                                                <input type="text" id="last-name-input" name="lastname" placeholder="enter your last name" />
                                            </div>
                                        </div>
                                        <div className="email">
                                            <label htmlFor="email">Email*</label>
                                            <input type="email" id="email-input" name="email" placeholder="enter your address email" required />
                                        </div>
                                        <div className="dual-input">
                                            <div className="phone">
                                                <label htmlFor="phone">Phone*</label>
                                                <input type="tel" id="phone-input" name="phone" placeholder="enter your phone number" required />
                                            </div>
                                            <div className="location">
                                                <label htmlFor="location">Location*</label>
                                                <input type="text" id="location-input" name="location" placeholder="enter where are you from" required />
                                            </div>
                                        </div>
                                        <div className="favourite-part">
                                            <label htmlFor="favourite-part">My favourite part: yourselves!</label>
                                            <textarea id="favourite-part-input" name="yourselves" placeholder="tell me about yourselves" />
                                        </div>
                                        <div className="about">
                                            <label htmlFor="about">About Session*</label>
                                            <textarea id="about-input" name="about" placeholder="tell me which session or what kinda photo service are you looking for?" required />
                                        </div>
                                        <div className="sub">
                                            <input type="submit" value="Send" onClick={(e) => submitForm()} />
                                        </div>
                                        <div className="submit-status" style={isSubmitSucess ? submitMessageSuccessStyle : submitMessageErrorStyle} >{formStatus}</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default contactMe
