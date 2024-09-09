import navLinks from '../statics/links';
import logo from '../assets/logo.png';
import FreeScoreButton from '../components/freeScoreButton';

export default function Navbar() {
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
        <div className="bg-blue-500 text-white rounded-[50%]">EN</div>
        {/*temp*/}
      </ul>
    </nav>
  );
}
