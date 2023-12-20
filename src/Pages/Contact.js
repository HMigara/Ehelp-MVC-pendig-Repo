import React from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

export const Contact = () => {
  return (
    <>
      <BreadCrum title="Contact" />
      <Meta title={"Contact"} />

      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63480.83754045486!2d80.17079713471479!3d6.055975350122374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!5e0!3m2!1sen!2slk!4v1703046191330!5m2!1sen!2slk"
                width="600"
                height="450"
                className="boder-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-titel mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Pnone Number"
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Comment"
                        rows="4"
                        className="form-control w-100"
                        cols="30"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-titel mb-4">Get in Touch with Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                       
                        <AiOutlineHome className="fs-5" />
                        <address className='mb-0'>bno:221,galle Sri lanka</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+94779053849">077 9053 849</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:harimigara@gmail.com">Harimigara@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                       
                        <BiInfoCircle className="fs-5" />
                        <p className='mb-0'>24/7 Open</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 