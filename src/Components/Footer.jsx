import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div>
            <footer>
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Shortly</h2>
                    </div>
                    
                    <div className="col-lg-2">
                        <h5>Features</h5>
                        <a href="#">Link Shortening</a> <br/>
                        <a href="#">Branded Links</a> <br/>
                        <a href="#">Analytics</a>
                    </div>

                    <div className="col-lg-2">
                        <h5>Resources</h5>
                        <a href="#">Blog</a> <br/>
                        <a href="#">Developers</a> <br/>
                        <a href="#">Support</a>
                    </div>

                    <div className="col-lg-2">
                        <h5>Company</h5>
                        <a href="#">About</a> <br/>
                        <a href="#">Our Team</a> <br/>
                        <a href="#">Careers</a> <br/>
                        <a href="#">Contact</a>
                    </div>

                    <div className="col-lg-2 socials">
                       <a href="https://www.facebook.com/login/"><FacebookIcon fontSize="large" /></a>
                       <a href="https://twitter.com/login/"><TwitterIcon fontSize="large" /></a>
                       <a href="https://www.pinterest.com/"><PinterestIcon fontSize="large" /></a>
                       <a href="https://www.instagram.com/"><InstagramIcon fontSize="large" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;