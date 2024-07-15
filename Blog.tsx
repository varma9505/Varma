import React from "react";
import inno from './images/life-at-innostes.jpg'
import { Description, Title } from "@mui/icons-material";
import './Blog.css'
import meaning from './images/meaning-of-innostes.jpg'
import { blog, blog1, blog2, blog3 } from "./data/data";
const Blog = () => {
    
    return (
        <div>
            <div className="container">
                <div className="row text-center mt-3">
                    {blog.map((e) => {
                        return (
                            <div className="col-lg-12 col-sm-12 col-md-12">
                                <div>
                                    <h1>{e.Title}</h1>
                                    <p>{e.Description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-8 col-md-8">
                        <div className="card p-3 mb-3">
                            <div className="cardbody">


                                <img src={inno} />



                                {blog1.map((e) => {
                                    return (
                                        <div className="col-lg-11 col-sm-11 col-md-11">
                                            <h1>{e.Title}</h1>
                                            <p>{e.Description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-md-4">
                        <div className="card p-2">
                            <div className="cardbody">
                                {blog2.map((e) => {
                                    return (
                                        <div className="row">
                                            <div className="col-lg-5 col-sm-5 col-md-5">
                                                <img src={inno} width={"100%"} />
                                            </div>
                                            <div className="col-lg-7 col-sm-7 col-md-7">
                                                <a className="rr" href="/blog"><p className="rtc rr">{e.Header}</p></a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-8 col-md-8">
                        <div className="card p-3 mb-3">
                            <div className="cardbody">
                                <img src={meaning} width={"100%"} />
                            </div>
                            {blog3.map((e) => {
                                return (
                                    <div>
                                        <h1 className="p-3">{e.Title}</h1>
                                        <p>{e.Header}</p>
                                       <a className="rr" href="/continue"> <p>{e.Subheader}</p></a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-md-4">
                        <div className="card p-3">
                            <div className="cardbody">
                                <div className="row">
                                    <div className="col-5">
                                        <img src={meaning} width={"100%"} />
                                    </div>
                                     <div className="col-7">
                                     {blog2.map((e) => {
                                        return (
                                            <div>
                                              <a className="rr" href="/blog">  <p className="rtc rr">{e.Subheader}</p></a>
                                            </div>
                                        )
                                    })}
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog
