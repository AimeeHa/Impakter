import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LatestInESG() {
  // TODO: find new images for articles
  const articles = [
    {
      title:
        'ESG Essesntials for Businesses: Definition, Frameworks, Criteria, and More',
      action: 'Download E-book',
      img: 'https://effas.com/wp-content/uploads/2023/05/ESG-Essentials-Austria.png',
    },
    {
      title:
        'Sustainable Supplier Checklist: A Self-Assesment for Green Supply Chain Managers',
      action: 'Download Checklist',
      img: 'https://aavenir.com/wp-content/uploads/2022/08/Blog_ESG-Compliance.jpg',
    },
    {
      title: 'Choosing the Best ESG Software for your Business',
      action: 'Read More',
      img: 'https://s3.us-east-1.amazonaws.com/primeglobal-assets/pages/News/_600x300_crop_center-center_none/Van-Havermaet-Cover.png',
    },
    {
      title:
        'Looking for an ESG Software? Ask Yourself These 10 Questions Before You Buy One',
      action: 'Take Quiz',
      img: 'https://img1.wsimg.com/isteam/ip/d76c5c42-507d-4646-8d81-b5360b4b7a47/IMG_1687.jpg',
    },
  ];

  return (
    <section className="main-section">
      <h2>Latest in the world of ESG</h2>
      <section className="w-full flex justify-evenly gap-10 items-start">
        {articles.map((article, i) => {
          return (
            <article
              key={i}
              className="w-[328px] flex flex-col border-[1px] border-[#D1D5DB] rounded-button"
            >
              <img
                src={article.img}
                alt="article"
                className="w-full h-[207px] object-cover object-top rounded-t-button"
              />
              <div
                className="w-full h-[120px] p-3 bg-[#f2f5f2] flex flex-col justify-between
              items-start rounded-b-button"
              >
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
