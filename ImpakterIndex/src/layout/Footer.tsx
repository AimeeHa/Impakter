import { footerLinks } from '../statics/links';
import logo from '../assets/footerLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      {/* Book Demo group */}
      <section className="h-[23rem] flex flex-col justify-center items-center gap-8 max-w-[60%]">
        <h1 className="text-h1 text-wrap text-center font-[600]">
          Looking for an ESG solution for your business?
        </h1>
        <div className="w-[75%] flex justify-between items-center">
          <button className="white-button">Free ESG Rating</button>
          <button className="blue-button">Book a Demo</button>
        </div>
      </section>

      {/* Footer links */}
      <section className="flex flex-grow gap-12">
        <div className="min-w-[300px] max-w-[400px] flex flex-col gap-5">
          <img src={logo} alt="logo" />
          <div className="flex flex-col gap-3">
            <p className="text-balance">
              Impakter informs you through the eco news site and empowers your
              sustainable lifestyle with its eco products marketplace.
            </p>
            <p className="font-[600]">IMPAKTER Limited</p>
            <p>Company number: 10806931 </p>
            <p className="text-balance">
              Impakter is a publication that is identified by the following
              International Standard Serial Number (ISSN) is the following
              2515-9569 (Printed) and 2515-9577 (online - Website).
            </p>
            <p className="font-[600]">Registered Office Address </p>
            <p>
              32 Lots Road <br />
              London, SW10 0QJ <br />
              United Kingdom
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <p>Get the latest ESG news of your industry</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-solid border-[1px] border-gray-400 rounded-button
                py-2 px-3"
              />
              <button className="blue-button">Subscribe</button>
            </form>
          </div>
        </div>
        <ul className="flex gap-8">
          {footerLinks.map((link, index) => (
            <li key={index} className="flex flex-col gap-3">
              <h2 className="font-[600] min-h-[3rem]">{link.title}</h2>
              <ul className="flex flex-col gap-3 max-w-[10rem]">
                {link.items.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Social media */}
      <section className="flex flex-col gap-4 pb-4">
        <div className="flex justify-center items-center gap-6">
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} className="footerSNS" />
          </a>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ width: '34px', height: '35px', opacity: '0.85' }}
            />
          </a>
          <a href="https://www.x.com">
            <FontAwesomeIcon icon={faSquareXTwitter} className="footerSNS" />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faSquareInstagram} className="footerSNS" />
          </a>
        </div>
        <p>© IMPAKTER, LLC, 2024. All rights reserved.</p>
      </section>
    </footer>
  );
}
