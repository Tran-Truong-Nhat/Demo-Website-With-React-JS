import React from 'react'
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import
{   InboxIcon,
    PhoneIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,}
from "@heroicons/react/outline";


const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Amazon</span>
            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Contact US</span>
                <span className={css.pngLine}>
                  {/* <LocationMarketIcon className={css.icon}/> */}
                  {/* <svg className={css.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                   </svg> */}
                  <span>111 north avenue Orlando, FL 32801</span>
                </span>

                <span className={css.pngLine}>
                  {" "}
                  <PhoneIcon className={css.icon}/>
                  
                  <a href="tel: 123-123-123">123-123-123</a>
                </span>                
              
                <span className={css.pngLine}>
                  <InboxIcon className={css.icon}/>
                  <a href="mailto:support@amazon.com">support@amazon.com</a>
                </span>
              </div>
            </div>


            <div className={css.block}>
              <div className={css.detail}>
                <span>Account</span>
                <span className={css.pngLine}>
                  <LoginIcon className={css.icon}/>
                  <span>Sign In</span>
                </span>
              </div>
            </div>

            <div className={css.block}>
              <div className={css.detail}>
                <span>Company</span>
                <span className={css.pngLine}>
                  <UsersIcon className={css.icon}/>
                  <a href="/about">
                    <p>About us</p>
                  </a>
                  <span>Sign In</span>
                </span>
              </div>
            </div>

            <div className={css.block}>
              <div className={css.detail}>
                <span>Resources</span>
                <span className={css.pngLine}>
                  <LinkIcon className={css.icon}/>
                  <span>Safety Privacy &  Terms</span>
                </span>
              </div>
            </div>
        </div>

        <div className={css.copyRight}>
          <span>Copyright ©2022 by Amazon, Inc.</span>
          <span>All rights reserved.</span>
        </div>
    </div>
  )

}

export default Footer;