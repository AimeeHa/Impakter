import Faqs from './components/faqs';
import LatestInESG from './components/latestInESG';
import SearchBar from './components/searchBar';
import './index.css';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <>
        <section>TBU</section>
        <SearchBar />
        <LatestInESG />
        <Faqs />
      </>
    </Layout>
  );
}

export default App;
