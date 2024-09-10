import { footerLinks } from '../statics/links';
import logo from '../assets/footerLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import DemoButton from '../components/demoButton';
import FreeScoreButton from '../components/freeScoreButton';

export default function Footer() {
  return (
    <>
      {/* Book Demo group */}
      <section className="h-[23rem] flex flex-col justify-center items-center gap-8 w-full">
        <h1 className="text-h1 text-center font-[600] text-balance">
          Looking for an ESG solution <br /> for your business?
        </h1>
        <div className="w-[50%] flex justify-evenly items-center">
          <FreeScoreButton className="white-button" />
          <DemoButton />
        </div>
      </section>

      <footer>
        {/* Footer links */}
        <section className="w-full flex flex-grow gap-12 justify-between 2xl:max-w-[1440px]">
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
                <button
                  className="blue-button"
                  onClick={(e) => e.preventDefault()}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <ul className="flex gap-8">
            {footerLinks.map((link, index) => (
              <li key={index} className="flex flex-col gap-3">
                <h3 className="font-[600] min-h-[3rem]">{link.title}</h3>
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
        <section className="flex flex-col gap-4">
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
    </>
  );
}
