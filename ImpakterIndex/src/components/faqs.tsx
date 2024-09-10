import { useState } from 'react';
import faqs from '../statics/faqList';

export default function Faqs() {
  const [isAnswerVisible, setIsAnswerVisible] = useState<Boolean[]>([false]);
  console.log(isAnswerVisible);

  return (
    <section className="main-section">
      <h2>FAQs on ESG, Sustainability & CSRD</h2>
      <ul className="flex flex-col gap-5 w-full">
        {faqs.map((faq, i) => {
          return (
            <li
              key={i}
              className="border-solid border-[1px] border-gray-400 p-[0.5rem]
              rounded-button flex flex-col gap-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsAnswerVisible((prev) => {
                  const newIsAnswerVisible = [...prev];
                  newIsAnswerVisible[i] = !newIsAnswerVisible[i];
                  return newIsAnswerVisible;
                });
              }}
            >
              <p className="font-[600]">{faq.question}</p>
              <p className={isAnswerVisible[i] ? 'visible' : 'hidden'}>
                {faq.answer}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
