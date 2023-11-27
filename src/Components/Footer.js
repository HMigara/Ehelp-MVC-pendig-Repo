import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsInstagram, BsYoutube, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="text-white mb-0">Sing Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your E-mail Address"
                  aria-label="Your E-mail Address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-0">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  NO:80,
                  <br />
                  Galle town,
                  <br />
                  Galle,
                  <br />
                  Sri Lanka.
                  <br />
                  postel code : 80000
                </address>
                <a
                  href="tel:+94 779053849"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +94 779053849
                </a>

                <a
                  href="mailto:eHel@gmail.com"
                  className="mt-2 d-block mb-4 text-white"
                >
                  eHelp@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <a className='text-white' href="">
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a className='text-white' href="">
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className='text-white' href="">
                  <BsYoutube className='fs-4'/>
                  </a>
                  <a className='text-white' href="">
                    <BsGithub className='fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-0">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">privacy policy</Link>
                <Link className="text-white py-2 mb-1">Refund policy</Link>
                <Link className="text-white py-2 mb-1">Shopping policy</Link>
                <Link className="text-white py-2 mb-1">terms & Condition</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-0">Accounts</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-0">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Test items</Link>
                <Link className="text-white py-2 mb-1">Test items</Link>
                <Link className="text-white py-2 mb-1">Test items</Link>
                <Link className="text-white py-2 mb-1">Test items</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by eHub-MVP
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer