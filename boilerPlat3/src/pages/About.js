import React, { Component } from 'react';
import ColorCircle from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from './logo.png';
import { SketchPicker } from 'react-color';
import './App.css';
import './min.css';
import './App3.css';



class About extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="site-heading d-none d-lg-block">
          <span className="site-heading-upper">美 Utsukushi</span>
        </h1>


        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div className="container">
            {/* <!-- <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"></a> -->
            <!-- <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> --> */}
            <div className="collapse navbar-collapse px-lg-4 animated fadeInDown" id="navbarResponsive">
              <div className="navbar-nav mx-auto px-lg-4">
                <div className="cta-inner text-center rounded">

                    <span className="section-heading-lowersection-heading mb-4">what are your features?</span>

                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- <div className="container">
          <div className="row">
            <div className="col-sm">

            </div>
            <div className="col-sm">

            </div>
            <div className="col-sm">

            </div>
          </div>
        </div> --> */}



        <section className="page-section cta">
          <div className="container">

    </div>


    <div className="container-fluid animated bounceInRight">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <div className="cta-inner text-center rounded">

            <ul className="gallery row">
              <li className="col-sm">
                EYE COLOR
              </li>
              <li className="col-sm">
                HAIR COLOR
              </li>
              <li className="col-sm">
                SKIN COLOR
              </li>
            </ul>

    </div>
      </div>
        </div>
          </div>

          <div className="container-fluid animated bounceInLeft">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className="cta-inner text-center rounded">

                  <ul className="gallery row">
                    <li className="col-sm">
                      <div className="thumb blue col"></div>
                      <div className="thumb green col"></div>
                      <div className="thumb brown col"></div>
                      <div className="thumb hazel col"></div>
                    </li>
                    <li className="col-sm">
                      <div className="thumb blonde col"></div>
                      <div className="thumb brown2 col"></div>
                      <div className="thumb black col"></div>
                      <div className="thumb red col"></div>
                    </li>
                    <li className="col-sm">
                      <div className="thumb light col"></div>
                      <div className="thumb med col"></div>
                      <div className="thumb dark col"></div>
                      <div className="thumb darker col"></div>
                    </li>
                  </ul>

          </div>
            </div>
              </div>
                </div>
        </section>

        {/* <footer
          <div className="container">
            <p className="m-0 small">Copyright &copy; The Glam Squad 2018</p>
          </div>
        </footer> */}
      </div>
    );
  }
}

export default About;
