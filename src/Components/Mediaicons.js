import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
function Media() {
  return (
    <>
      <div className="text-center my-5">
        <div className="row">
          <a
            href="https://twitter.com/AdnanMuzavor"
            target="blank"
            className="icon col-md-2 col-4 mx-auto anima "
          >
            <TwitterIcon />
          </a>
          {/* <a className="icon col-md-2 col-4 mx-auto vanima" target="blank">
            <WhatsAppIcon />
          </a>
          <a className="icon col-md-2 col-4 mx-auto anima" target="blank">
            <FacebookIcon />
          </a> */}
          <a
            href="https://www.instagram.com/p/CX9BVTapFdb/?utm_medium=copy_a"
            className="icon col-md-2 col-4 mx-auto vanima"
            target="blank"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.aedin.com/in/adnan-shah-muzavor-753160203"
            className="icon col-md-2 col-4 mx-auto anima"
            target="blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </>
  );
}

export default Media;
