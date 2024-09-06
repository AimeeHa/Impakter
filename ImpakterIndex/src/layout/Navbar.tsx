import navLinks from '../statics/links';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
