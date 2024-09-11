import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { footerLinks } from '../statics/links';
import { TopCompanies } from './TopCompanies';
import Banner from '../components/Banner';

export default function SingleCompanyPage() {
  const topCompanies: TopCompanies[] = footerLinks[0].items;
  const { id } = useParams();
  const company = topCompanies[parseInt(id!) - 1];

  return (
    <Layout>
      <Banner
        title={`Is ${company.title} A Sustainable Company?`}
        subtitle="Find out more interesting insights about their journey to sustainability."
      />
      <section className="h-[var(--main-height)] flex justify-center items-center text-[1.5rem]">
        This is {company.title} page.
      </section>
    </Layout>
  );
}
