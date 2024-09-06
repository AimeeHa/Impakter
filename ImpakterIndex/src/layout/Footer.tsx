import { footerLinks } from '../statics/links';

export default function Footer() {
  return (
    <footer>
      <ul className="flex gap-5">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <h2>{link.title}</h2>
            <ul className="flex flex-col gap-3">
              {link.items.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </footer>
  );
}
