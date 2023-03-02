import React from "react";
import Image from "next/image";
import Link from "next/link";
//icons
import { SlArrowRight } from "react-icons/sl";
import { HiMailOpen } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
//images
import logo from "../../public/arizton_logo.svg";
import fb from "../../public/facebook.svg";
import ln from "../../public/linkedin.svg";
import tw from "../../public/twitter.svg";
import pay from "../../public/payment-logo.png";

const Footer = () => {
  return (
    <>
      <div className="fotr">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="widget">
                  <Image
                    src={logo}
                    width="120"
                    height="52"
                    alt="Arizton Logo"
                    className="footer-logo img-fluid"
                  />

                  <div className="contact">
                    <p>NEED ASSISTANCE?</p>
                    <p>
                      <Link href="tel:+1-312-235-2040">
                        <BsFillTelephoneFill /> +1-312-235-2040
                      </Link>
                      <Link href="mailto:enquiry@arizton.com">
                        <HiMailOpen /> enquiry@arizton.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <div className="widget">
                      <h4>THE COMPANY</h4>
                      <ul className="footer-links">
                        <li>
                          <Link href="https://www.arizton.com/about">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link href="https://datacenter.arizton.com/">
                            DATACENTER
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/contact-us">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/our-process">
                            Our Process
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/careers">
                            Career
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/news/press-release">
                            Press Releases
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/blog">Blogs</Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/login">
                            Login / Register
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/faq">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-4">
                    <div className="widget">
                      <h4>PRODUCT &amp; SERVICES</h4>
                      <ul className="footer-links">
                        <li>
                          <Link href="https://www.arizton.com/our-services">
                            SERVICES
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/our-services#advisory-and-custom-research">
                            Advisory &amp; Custom Research
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/our-services#competitive-intelligence-insights">
                            Competitive Intelligence Insights
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/our-services#syndicate-research">
                            Syndicated Research
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-4">
                    <div className="widget">
                      <h4>REPORTS</h4>
                      <ul className="footer-links">
                        <li>
                          <Link href="https://www.arizton.com/market-reports/category/garden-tools">
                            Garden Tool Reports
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/market-reports/category/data-center-knowledge-base">
                            Data Centre Reports
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.arizton.com/our-services">
                            Syndicated Reports
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget">
                  <h4>Register now and get 5% discount on all reports</h4>
                  <div className="subscribe-area">
                    <form
                      ng-submit="subscribe()"
                      className="ng-pristine ng-valid"
                    >
                      <input
                        type="text"
                        ng-model="subscribe_email"
                        placeholder="Email address"
                        ng-keydown="errors=[]"
                        className="ng-pristine ng-untouched ng-valid ng-empty"
                      />
                      <button type="submit" className="btn btn-line">
                        Register
                      </button>
                    </form>
                  </div>

                  <div className="subs-notice ng-binding"></div>
                  <div className="subs-notice"></div>
                </div>
              </div>
            </div>

            <div className="row row-social">
              <div className="col-md-6 col-sm-6">
                <div className="social">
                  <Link
                    href="https://www.facebook.com/AriztonAI/"
                    target="_blank"
                  >
                    <Image
                      className="img-fluid"
                      width="40"
                      height="40"
                      loading="lazy"
                      src={fb}
                    />
                  </Link>
                  <Link href="https://twitter.com/Arizton2" target="_blank">
                    <Image
                      loading="lazy"
                      className="img-fluid"
                      width="40"
                      height="40"
                      src={tw}
                      alt="Twitter Icon"
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/company/13392882/">
                    <Image
                      loading="lazy"
                      className="img-fluid"
                      width="40"
                      height="40"
                      src={ln}
                      alt="Linkedin Icon"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 text-end">
                <h4>Safe &amp; Secure SSL Encrypted</h4>
                <Image
                  loading="lazy"
                  width="220"
                  height="25"
                  src={pay}
                  className="img-responsive ssl"
                />
              </div>
            </div>

            <div className="row row-copyright">
              <div className="col-md-12">
                <div className="line"></div>
              </div>
              <div className="col-md-6">
                <p>
                  Copyright © 2022 Arizton Advisory &amp; intelligence - All
                  Rights Reserved
                </p>
              </div>
              <div className="col-md-6 text-end">
                <Link href="https://www.arizton.com/privacyandpolicy">
                  Privacy Policy
                </Link>{" "}
                -{" "}
                <Link href="https://www.arizton.com/terms-use">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
