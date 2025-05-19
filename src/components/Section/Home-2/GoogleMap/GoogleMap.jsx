"use client"
import Link from 'next/link'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function GoogleMap() {
  return (
    <section  className="google-map-one">
      <div  className="container clearfix">
        <div  className="google-map-one__content clearfix">
          <div  className="inner-box">
            <div  className="title-box text-center">
              <h2>Contact With Us</h2>
            </div>
            <Accordion
              defaultActiveKey="0"
               className=" accordion-two map-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h2>
                    <span></span>
                    New York Office
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div  className="accrodion-content">
                    <div  className="inner">
                      <ul  className="accrodion-content-list">
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-pin"></span>
                          </div>
                          <p>Hounslow</p>
                        </li>
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-paper-plane"></span>
                          </div>
                          <p>
                            <Link href="mailto:operations@oneclickhandling.co.uk">operations@oneclickhandling.co.uk</Link>
                          </p>
                        </li>

                        <li>
                          <div  className="icon-box">
                            <span  className="icon-out-call"></span>
                          </div>
                          <p><Link href="tel:123456789">0333 404 0298</Link></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h2>
                    <span></span>
                    Canada Office
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div  className="accrodion-content">
                    <div  className="inner">
                      <ul  className="accrodion-content-list">
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-pin"></span>
                          </div>
                          <p>Jones Street, New York, USA</p>
                        </li>

                        <li>
                          <div  className="icon-box">
                            <span  className="icon-paper-plane"></span>
                          </div>
                          <p>
                            <Link href="mailto:oneclickhandling.co.uk"
                            >oneclickhandling.co.uk</Link>
                          </p>
                        </li>
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-out-call"></span>
                          </div>
                          <p><Link href="tel:0333 404 029"></Link></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h2>
                    <span></span>
                    London Office
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <div  className="accrodion-content">
                    <div  className="inner">
                      <ul  className="accrodion-content-list">
                        <li>
                          <div  className="icon-box">
                            <span  className="icon-pin"></span>
                          </div>
                          <p>Hounslow</p>
                        </li>

                        <li>
                          <div  className="icon-box">
                            <span  className="icon-paper-plane"></span>
                          </div>
                          <p>
                            <Link href="mailto:oneclickhandling.co.uk"
                            >oneclickhandling.co.uk</Link>
                          </p>
                        </li>

                        <li>
                          <div  className="icon-box">
                            <span  className="icon-out-call"></span>
                          </div>
                          <p><Link href="tel:0333 404 0298">0333 404 0298</Link></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
         className="google-map-one__map"
        allowfullscreen>
      </iframe>
    </section>
  )
}