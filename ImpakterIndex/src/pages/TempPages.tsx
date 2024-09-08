import { useLocation } from 'react-router-dom';
import Layout from '../layout/Layout';

export default function TempPages() {
  const location = useLocation();
  const pageName = location.pathname.split('/')[1];
  const formatedPageName = pageName
    .split('-')
    .map((l: string) => l[0].toUpperCase() + l.substring(1))
    .join(' ');

  return (
    <Layout>
      <main className="flex justify-center items-center text-[1.5rem]">
        This is temporary {formatedPageName} page.
      </main>
    </Layout>
  );
}
