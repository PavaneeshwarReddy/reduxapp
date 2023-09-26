import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: '🤔 What is the purpose of this website?',
      answer:
        '👉 The purpose of this website is to serve as an educational tool, demonstrating how state management works using Redux. It prioritizes functionality over visual appeal.',
    },
    {
      question: '🙋‍♂️ Can I contribute to this website?',
      answer:
        '👍 Yes, absolutely! This website\'s repository is open to the public. Feel free to contribute, develop, and implement more complex state management examples.',
    },
    {
      question: '🧐 Is Redux suitable for small applications like a counter app?',
      answer:
        '✅ Yes, Redux can be used for small applications like a counter app. However, it may be an overkill for very simple applications, potentially introducing unnecessary complexity.',
    },
    {
      question: '🚀 How can I get started with Redux?',
      answer:
        '📚 To kickstart your journey with Redux, head over to the official Redux documentation and tutorials available on the Redux website. You\'ll find detailed guidance on setting up and utilizing Redux in your projects.',
    },
    // Add more questions and answers as needed
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <div className="faq-container" style={{ width: "100%", display: 'flex', alignItems: "center", justifyContent: "center", gap: "10px", flexDirection: "column" }}>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index} style={{ alignSelf: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <button
            className="faq-question"
            onClick={() => toggleAnswer(index)}
            style={{ alignSelf: "center" }}
          >
            {faq.question}
          </button>
          {activeQuestion === index && (
            <p className="faq-answer" style={{ backgroundColor: "black", color: 'white' }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
