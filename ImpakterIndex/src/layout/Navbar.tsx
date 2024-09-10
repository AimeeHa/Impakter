import navLinks from '../statics/links';
import logo from '../assets/logo.png';
import FreeScoreButton from '../components/freeScoreButton';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEarthAsia } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const languages = [
    { short: 'EN', long: 'English' },
    { short: 'FR', long: 'French' },
    { short: 'DE', long: 'German' },
    { short: 'ES', long: 'Spanish' },
    { short: 'VN', long: 'Vietnamese' },
  ];
  const [language, setLanguage] = useState('EN');
  const [showList, setShowList] = useState(false);

  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <ul className="flex gap-5 justify-center items-center text-nav font-[500]">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
        <FreeScoreButton className="blue-button" />
        {/* language button */}
        <li
          className="cursor-pointer relative w-max p-2 border-[1px] border-gray-300 rounded-button"
          onClick={() => setShowList(!showList)}
        >
          <div className="appearance-none focus:outline-none flex gap-1 justify-center items-center">
            <FontAwesomeIcon icon={faEarthAsia} />
            <span>{language}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ width: '0.8rem', paddingLeft: '2px' }}
            />
          </div>
          {showList && (
            <ul
              className="absolute top-full left-0 h-max w-max flex flex-col gap-2 mt-3
            bg-white px-2"
            >
              {languages.map((lang, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:bg-gray-200 text-center"
                  onClick={() => {
                    setLanguage(lang.short);
                    setShowList(false);
                  }}
                >
                  {lang.long}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
