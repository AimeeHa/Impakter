import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Faqs from './components/faqs';
import LatestInESG from './components/latestInESG';
import SearchBar from './components/searchBar';
import './index.css';
import Layout from './layout/Layout';
import Banner from './components/Banner';
import countries from './statics/countries';
import industries from './statics/industries';
import { ratings } from './statics/ratings';

function App() {
  return (
    <Layout>
      <>
        <Banner
          title="ESG Rating. Sustainability Report. ISO Certificates."
          subtitle="Explore and compare European companies across industries ranked by their sustainability initiatives."
        />

        <section className="main-section bg-white">
          <h2>How to find the ESG score of a company?</h2>
          <p className="max-w-[70%] text-center flex flex-col gap-5">
            <span>Use the Free ESG Score search widget of IMPAKTER INDEX.</span>
            <span className="text-balance">
              Frankly, finding a company's ESG score can be tricky and
              time-consuming because one needs to factor in various reports,
              data, and legal obligations. With IMPAKTER INDEX, our
              sustainability experts have done this for 1000s of European
              companies - across industries - for anyone to view their favorite
              brand's sustainability performance; and compare it with
              alternative brands to make an informed purchase decision.
            </span>
            <span>Completely FREE!</span>
          </p>
        </section>

        {/* List of countries, clickable for finding companies */}
        <section className="main-section bg-bgGreen">
          <h2>Find the ESG score of company by their country of origin</h2>
          <ul className="grid grid-cols-5 gap-x-10 gap-y-3">
            {countries.map((country, i) => (
              <li key={i} className="text-center white-button">
                <a href={`/company-by-country/${country}`}>{country}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* List of industries, clicable for finding companies */}
        <section className="main-section">
          <h2>
            Compare how companies in one industry rank per their ESG score
          </h2>
          <ul className="grid grid-cols-5 gap-x-10 gap-y-3">
            {industries.map((industry, i) => (
              <li key={i}>
                <a
                  href={`/company-by-industry/${industry}`}
                  className="flex flex-col gap-2 justify-center items-center relative
                  w-[12rem] h-[15rem]"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4514/4514899.png"
                    alt={industry}
                    className="object-cover w-full h-full rounded-t-button"
                  />
                  <span
                    className="absolute bottom-0 h-[3.25rem] flex justify-center items-center
                    text-center bg-[rgba(70,87,74,0.8)] text-white w-full rounded-b-button
                    text-small px-1"
                  >
                    {industry}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* List by scores */}
        <section className="main-section bg-bgGreen">
          <h2>Browse the companies by their ESG score</h2>
          <ul className="flex gap-5 justify-evenly items-center w-full">
            {ratings.map((rating, i) => (
              <li key={i}>
                <a
                  href={`/company-by-rating/${rating.rating}`}
                  className="flex flex-col gap-3 justify-center items-center"
                >
                  <img
                    src="https://png.pngtree.com/png-clipart/20220220/ourlarge/pngtree-alphabet-learning-letter-a-for-kids-png-image_227369.png"
                    alt={rating.rating}
                    className="object-cover w-[12rem] h-[12rem] rounded-[50%]"
                  />
                  <span>{rating.meaning}</span>
                  <span>{rating.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="main-section flex flex-col justify-center items-center gap-5">
          <h2>Why ESG Index is important?</h2>
          <p className="max-w-[70%] text-balance text-center">
            ESG indexes are crucial because they provide a standardized way to
            measure and track the sustainability performance of companies, and
            thus help all stakeholders identify those ones with overall positive
            impact.
          </p>
          <div className="flex w-[80%] justify-between items-center mt-[1.5rem]">
            <article className="flex flex-col gap-3 justify-center items-start w-[28rem] ">
              <h3 className="font-[600] text-[1.3rem] self-center">
                For Consumers
              </h3>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4514/4514899.png"
                alt="ESG Index"
                className="object-fit w-full h-[17rem]"
              />
              <p className="font-[600] text-wrap">
                Buy product & services from companies with strong sustainability
                values & practices.
              </p>
              <ul className="w-full text-balance list-disc pl-3">
                <li>Assess the environmental impact of each purchase</li>
                <li>Supporting sustainable European businesses</li>
                <li>Advocating for corporate accountability</li>
              </ul>
            </article>
            <article className="flex flex-col gap-3 justify-center items-start w-[28rem]">
              <h3 className="font-[600] text-[1.3rem] self-center">
                For Businesses
              </h3>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4514/4514899.png"
                alt="ESG Index"
                className="object-fit w-full h-[17rem]"
              />
              <p className="font-[600] text-wrap">
                Improve internal efficiency and branding to gain a competitive
                edge.
              </p>
              <ul className="w-full text-balance list-disc pl-3">
                <li>Attract ESG conscious consumers & investors</li>
                <li>Compliance with European Regulations</li>
                <li>Auditing loop-holes for risk reduction</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="main-section bg-bgGreen">
          <h2>How is the ESG score calculated?</h2>
          <p className="max-w-[70%] text-center text-balance">
            ESG scores are typically calculated using a combination of
            quantitative and qualitative data. Quantitative data might include
            factors like greenhouse gas emissions, water usage, employee
            turnover, and board diversity. Qualitative data can be derived from
            company disclosures, news articles, and industry reports. It's worth
            noting that there's no one fixed way to calculate ESG score, but
            only right methodologies.
          </p>
          <a
            className="group flex justify-center items-center gap-1 text-blue-500
          hover:text-blue-600 cursor-pointer"
          >
            <span className="text-small">IMPAKTER INDEX Methodology</span>
            <span className="group-hover:translate-x-1 duration-200 ease-in-out">
              <FontAwesomeIcon icon={faArrowRight} style={{ width: '10px' }} />
            </span>
          </a>
          <SearchBar />
        </section>

        <LatestInESG />
        <Faqs />
      </>
    </Layout>
  );
}

export default App;
