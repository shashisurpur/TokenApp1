import React from 'react'
import './styles/contactUs.css'

const ContactUs = () => {
    return (
        <>
        <div className="container-lg">
            <div className="text-center text-uppercase">
                <h2>Contact Details</h2>
            </div>
            
            <div className="row cardContainer">
                <div className="col-sm-6">
                    <div className="card customeCard ">
                    <div className="card-body">
                        <h5 className="card-title cardTitle text-center">Personal Details</h5>
                        <div className="card-text cardText text-left">
                            <dl className="row">
                                <dt className="col-sm-5">Name</dt>
                                <dd className="col-sm-5"> Shashidhar V Surpur</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Address</dt>
                                <dd className="col-sm-5"> Shashidhar V Surpur C/O Vasant R Surpur,Madhihal main road,Dharwad</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Qualification</dt>
                                <dd className="col-sm-5">MCA</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Skills</dt>
                                <dd className="col-sm-5">
                                    Java Script <br/>
                                    React Js <br/>
                                    Java <br/>
                                    Android <br/>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card customeCard">
                    <div className="card-body">
                        <h5 className="card-title cardTitle text-center">Contacts </h5>
                        <dl className="row">
						    <dt className="col-sm-6">Email</dt>
						    <dd className="col-sm-6">shashisurpurv@gmail.com</dd>
					    </dl>
                        <dl className="row">
						    <dt className="col-sm-6">Mobile No</dt>
						    <dd className="col-sm-6">8792948307 </dd>
					    </dl>
                        <dl className="row">
						    <dt className="col-sm-6">What's app No</dt>
						    <dd className="col-sm-6">7411790739 </dd>
					    </dl>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default ContactUs
