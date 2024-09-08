import faqs from '../statics/faqList';

export default function Faqs() {
  return (
    <section>
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqs.map((faq, i) => {
          return (
            <li key={i}>
              <p>{faq.question}</p>
              {/* TODO: show answer only when question clicked */}
              <p>{faq.answer}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
