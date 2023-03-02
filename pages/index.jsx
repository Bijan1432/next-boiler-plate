import React, { Component } from "react";
import Slider from "react-slick";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//icons
import { SlArrowRight } from "react-icons/sl";
//images
import marktet from "../public/crisis 1.png";
import google from "../public/gg.png";
import report from "../public/Mask group (3).png";
import backgroundImg from "../public/banner-report.png";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settingsClients = {
    dots: false,
    infinite: true,
    center: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section
          className="banner"
          style={{
            backgroundImage: `url(${backgroundImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1>
                  Fantasy Sports Market Global Outlook & Forecast 2023-2028
                </h1>
                <div className="cat-group">
                  <Link href="" className="cat">
                    Home
                    <span>
                      <SlArrowRight />
                    </span>
                  </Link>
                  <Link href="" className="cat">
                    Samrt Tech
                    <span>
                      <SlArrowRight />
                    </span>
                  </Link>
                  <Link href="" className="cat">
                    Fantasy Sports Market
                    <span>
                      <SlArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <button className="btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-pack">
          <form action="">
            <div key={`inline-radio`} className="pak-btns mb-3">
              <div className="pak-btn">
                <Form.Check
                  inline
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                />
                <label htmlFor="inline-radio-1">
                  Single report license
                  <div className="pr">$4200.00</div>
                </label>
              </div>
              <div className="pak-btn">
                <Form.Check
                  inline
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                />
                <label htmlFor="inline-radio-2">
                  Single report license
                  <div className="pr">$4200.00</div>
                </label>
              </div>
              <button className="btn-primary">
                checkout
                <div className="pr">$4200.00</div>
              </button>
            </div>
          </form>
        </div>
        <section className="fixed-part m-top m-bot">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="main-p">GO TO SECTION:</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="fix-part">
                  <ul className="fix-menu">
                    <li>
                      <button className="active">ABOUT THE REPORT</button>
                    </li>
                    <li>
                      <button>SUMMARY</button>
                    </li>
                    <li>
                      <button>TABLE OF CONTENTS</button>
                    </li>
                    <li>
                      <button>FAQ</button>
                    </li>
                    <li>
                      <button className="ex-btn">
                        Explore our Subscriptions
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="2em"
                          width="2em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M16 12l-6 6V6z"></path>
                          </g>
                        </svg>
                      </button>
                    </li>
                  </ul>
                  <div className="speak">
                    <h3>Speak With Us</h3>
                    <p>
                      Want to know more about the report or any specific
                      requirement?
                    </p>
                    <Link href="#">Click to Email</Link>
                    <Link href="#">+1-312-235-2040</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="about">
                  <div className="about-head d-flex">
                    <h2>About The Report</h2>
                    <p>
                      REQUEST a SAMPLE
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M16 12l-6 6V6z"></path>
                        </g>
                      </svg>
                    </p>
                  </div>
                  <p className="quote">
                    “Glance through the global fantasy sports market report of
                    more than 259 pages comprising 95 tables and 93 exhibits to
                    develop a deep understanding of the market.”
                  </p>

                  <p>
                    The fantasy sports market is provided for the forecast years
                    2023 to 2028 and a base year of 2022. The market is
                    segmented by sport, gender, platform, and geography for the
                    years considered. The report provides a holistic approach to
                    the global fantasy sports market to enable customers to
                    analyze the industry thoroughly.
                  </p>
                </div>
                <div className="points-4">
                  <div className="points">
                    <div className="point mb-4 d-flex">
                      <div className="icon">
                        <Image src={marktet} />
                      </div>
                      <div className="point-desc">
                        <h3>Market size</h3>
                        <p>
                          Quickly check market conditions in an unfamiliar
                          industry, region or country.
                        </p>
                      </div>
                    </div>
                    <div className="point d-flex">
                      <div className="icon">
                        <Image src={marktet} />
                      </div>
                      <div className="point-desc">
                        <h3>Market size</h3>
                        <p>
                          Quickly check market conditions in an unfamiliar
                          industry, region or country.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="points">
                    <div className="point d-flex">
                      <div className="icon">
                        <Image src={marktet} />
                      </div>
                      <div className="point-desc">
                        <h3>Market size</h3>
                        <p>
                          Quickly check market conditions in an unfamiliar
                          industry, region or country.
                        </p>
                      </div>
                    </div>
                    <div className="point d-flex">
                      <div className="icon">
                        <Image src={marktet} />
                      </div>
                      <div className="point-desc">
                        <h3>Market size</h3>
                        <p>
                          Quickly check market conditions in an unfamiliar
                          industry, region or country.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inter">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h4>Interested in this report?</h4>
                      </div>
                      <div className="col-md-6">
                        <div className="btn-group">
                          <button className="btn-secondary btn-red">
                            ADD TO CART
                            <svg
                              stroke="currentColor"
                              fill="#fff"
                              stroke-width="0"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                              ></path>
                            </svg>
                          </button>
                          <button className="btn-secondary">
                            EXPLORE SUBSCRIPTIONS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sum p-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h2 className="mb-4">Summary</h2>
                        <p>
                          The global fantasy sports market is expected to reach
                          USD 12.87 billion by 2028 from USD 6.45 billion in
                          2022, growing at a CAGR of 12.19%. Fantasy sports has
                          witnessed considerable growth in user base over the
                          last few years owing to the strong attraction towards
                          the various sporting events. Changes across sporting
                          formats, frequent tournaments, and booming sports
                          players’ popularity are some of the factors driving
                          the market in recent years. The fantasy sports
                          business has transformed significantly from a
                          season-long game to a daily service provider. Also,
                          the added feature that enables users to play, utilize
                          their skill sets, and earn some money in the process
                          further promotes the growth of the fantasy sports.
                          Changes across sporting formats, frequent tournaments,
                          and booming sports players. growing at a CAGR of
                          12.19%. Fantasy sports has witnessed considerable
                          growth in user base over the last few years
                        </p>
                        <button> View more +</button>
                      </div>
                      <div className="col-md-6 ps-4">
                        <h3 className="mb-4">Report Preview</h3>
                        <Link href="#">
                          <Image src={report} className="img-fluid" />
                        </Link>

                        <p className="mt-4">
                          <b>
                            <i>Please Note:</i>
                          </b>
                          This is a sample report. All of the figures, graphs,
                          and tables have been redacted. Our reports come in
                          PDF, Powerpoint, Word and Excel Databook formats.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-table p-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="mb-4">Table of Contents</h2>

                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <span>1.</span>
                              Accordion Item #1
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <span>2.</span> Accordion Item #2
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <span>3.</span> Accordion Item #3
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <span>4.</span> Accordion Item #4
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <span>5.</span> Accordion Item #5
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="details p-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>
                          Fantasy sports <br />
                          Market report scope
                        </h2>
                        <table>
                          <thead>
                            <tr>
                              <td>Report Attribute</td>
                              <td>Details</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>MARKET SIZE (2028)</td>
                              <td>USD 12.87 Billion</td>
                            </tr>
                            <tr>
                              <td>MARKET SIZE (2022)</td>
                              <td>USD 6.45 Billion</td>
                            </tr>
                            <tr>
                              <td>CAGR (2022-2028)</td>
                              <td>12.19%</td>
                            </tr>
                            <tr>
                              <td>BASE YEAR</td>
                              <td>2022</td>
                            </tr>
                            <tr>
                              <td>FORECAST YEAR</td>
                              <td>2023-2028</td>
                            </tr>
                            <tr>
                              <td>MARKET SEGMENTS</td>
                              <td>Sports, Gender, Platform, and Geography</td>
                            </tr>
                            <tr>
                              <td>GEOGRAPHIC ANALYSIS</td>
                              <td>
                                North America, Europe, APAC, Latin America, &
                                Middle East
                              </td>
                            </tr>
                            <tr>
                              <td>KEY VENDORS</td>
                              <td>
                                CBS Corporation, DraftKings, FanDuel, Yahoo, and
                                ESPN
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relatd-rports p-top p-bot">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>Other Related Reports</h2>
                      </div>
                      <div className="col-md-12">
                        <Slider {...settings}>
                          <div className="slider-ou">
                            <div className="slide">
                              <h3>
                                Fantasy Sports Market - Global Outlook &
                                Forecast 2023-2028
                              </h3>
                              <div className="pr">$ 695.00</div>
                              <p>
                                The fantasy sports market is provided for the
                                forecast years 2023 to 2028 and a base year of
                                2022. The market is segmented by sport, gender,
                                platform
                              </p>
                              <Link href="#">ADD TO CART</Link>
                            </div>
                          </div>
                          <div className="slider-ou">
                            <div className="slide">
                              <h3>
                                Fantasy Sports Market - Global Outlook &
                                Forecast 2023-2028
                              </h3>
                              <div className="pr">$ 695.00</div>
                              <p>
                                The fantasy sports market is provided for the
                                forecast years 2023 to 2028 and a base year of
                                2022. The market is segmented by sport, gender,
                                platform
                              </p>
                              <Link href="#">ADD TO CART</Link>
                            </div>
                          </div>
                          <div className="slider-ou">
                            <div className="slide">
                              <h3>
                                Fantasy Sports Market - Global Outlook &
                                Forecast 2023-2028
                              </h3>
                              <div className="pr">$ 695.00</div>
                              <p>
                                The fantasy sports market is provided for the
                                forecast years 2023 to 2028 and a base year of
                                2022. The market is segmented by sport, gender,
                                platform
                              </p>
                              <Link href="#">ADD TO CART</Link>
                            </div>
                          </div>
                          <div className="slider-ou">
                            <div className="slide">
                              <h3>
                                Fantasy Sports Market - Global Outlook &
                                Forecast 2023-2028
                              </h3>
                              <div className="pr">$ 695.00</div>
                              <p>
                                The fantasy sports market is provided for the
                                forecast years 2023 to 2028 and a base year of
                                2022. The market is segmented by sport, gender,
                                platform
                              </p>
                              <Link href="#">ADD TO CART</Link>
                            </div>
                          </div>
                          <div className="slider-ou">
                            <div className="slide">
                              <h3>
                                Fantasy Sports Market - Global Outlook &
                                Forecast 2023-2028
                              </h3>
                              <div className="pr">$ 695.00</div>
                              <p>
                                The fantasy sports market is provided for the
                                forecast years 2023 to 2028 and a base year of
                                2022. The market is segmented by sport, gender,
                                platform
                              </p>
                              <Link href="#">ADD TO CART</Link>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inter">
                  <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                      <div className="col-md-8 ">
                        <h4>Interested in this reports?</h4>
                      </div>
                      <div className="col-md-8 mt-2">
                        <div className="btn-group">
                          <button className="btn-secondary btn-red">
                            ADD TO CART
                            <svg
                              stroke="currentColor"
                              fill="#fff"
                              stroke-width="0"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                              ></path>
                            </svg>
                          </button>
                          <button className="btn-secondary">
                            EXPLORE SUBSCRIPTIONS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-table p-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>Frequently Asked Questions</h2>

                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              Accordion Item #1
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              Accordion Item #2
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="two-block p-top p-bot">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="block">
                          <Image src={marktet} />
                          <div className="block-inner">
                            <h3>Download Free Sample</h3>
                            <p>
                              Download free market research reports by Arizton
                              covering, industry overview, market size, market
                              share, markets trends
                            </p>
                            <button>Download</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="block">
                          <Image src={marktet} />
                          <div className="block-inner">
                            <h3>Speak with our analyst</h3>
                            <p>
                              Download free market research reports by Arizton
                              covering, industry overview, market size, market
                              share, markets trends
                            </p>
                            <button>Download</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-clients p-bot">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-3">
                <h3>Our Clients</h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <Slider {...settingsClients}>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                  <div className="company-icon">
                    <Image
                      src={google}
                      width="200"
                      height="100"
                      className="img-fluid"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
