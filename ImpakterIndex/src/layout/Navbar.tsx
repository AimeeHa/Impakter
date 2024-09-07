import navLinks from '../statics/links';
import logo from '../assets/logo.png';
import FreeScoreButton from '../components/freeScoreButton';

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul className="flex gap-3 justify-center items-center">
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
