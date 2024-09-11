import Banner from '../components/Banner';
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
      <Banner
        title="Top Sustainable Companies"
        subtitle="See who are at the top in keeping sustainability their priority."
      />
      <ul className="main-section">
        {topCompanies.map((company, i) => {
          return (
            <li key={i} className="hover:underline hover:underline-offset-4">
              <a href={company.link}>{company.title}</a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
