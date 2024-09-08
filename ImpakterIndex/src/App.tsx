import Faqs from './components/faqs';
import LatestInESG from './components/latestInESG';
import SearchBar from './components/searchBar';
import './index.css';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <>
        <section className="main-section">TBU</section>
        <SearchBar />
        {/* TODO: change to component that contain this search bar*/}
        <LatestInESG />
        <Faqs />
      </>
    </Layout>
  );
}

export default App;
