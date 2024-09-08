import Layout from '../layout/Layout';
import { footerLinks } from '../statics/links';

export interface TopCompanies {
  title: string;
  link: string;
}

export default function TopCompanies() {
  const topCompanies: TopCompanies[] = footerLinks[0].items;

  return (
    <Layout>
      <ul>
        {topCompanies.map((company, i) => {
          return (
            <li key={i}>
              <a href={company.link}>{company.title}</a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
