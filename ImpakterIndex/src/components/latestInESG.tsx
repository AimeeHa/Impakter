import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LatestInESG() {
  // TODO: find new images for articles
  const articles = [
    {
      title:
        'ESG Essesntials for Businesses: Definition, Frameworks, Criteria, and More',
      action: 'Download E-book',
      img: 'https://picsum.photos/seed/1/328/200',
    },
    {
      title:
        'Sustainable Supplier Checklist: A Self-Assesment for Green Supply Chain Managers',
      action: 'Download Checklist',
      img: 'https://picsum.photos/seed/1/328/200',
    },
    {
      title: 'Choosing the Best ESG Software for your Business',
      action: 'Read More',
      img: 'https://picsum.photos/seed/1/328/200',
    },
    {
      title:
        'Looking for an ESG Software? Ask Yourself These 10 Questions Before You Buy One',
      action: 'Take Quiz',
      img: 'https://picsum.photos/seed/1/328/200',
    },
  ];

  return (
    <section className="main-section">
      <h2>Latest in the world of ESG</h2>
      <section className="w-full flex justify-evenly gap-10 items-start">
        {articles.map((article, i) => {
          return (
            <article key={i} className="w-[328px] flex flex-col">
              <img
                src={article.img}
                alt="article"
                className="w-full h-[207px]"
              />
              <div className="w-full h-[120px] p-3 bg-gray-200 flex flex-col justify-between items-start">
                <h3 className="text-main font-[500]">{article.title}</h3>
                <a
                  className="group flex justify-center items-center gap-1 text-blue-500
                hover:text-blue-600 cursor-pointer"
                >
                  <span className="text-small">{article.action}</span>
                  <span className="group-hover:translate-x-1 duration-200 ease-in-out">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ width: '10px' }}
                    />
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
}
