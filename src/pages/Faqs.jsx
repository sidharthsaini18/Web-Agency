import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQs = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We specialize in frontend and fullstack web development, UI/UX design, SEO optimization, and Fiverr gig branding.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Basic websites take 3–5 days, fullstack apps may take 7–10 days depending on complexity and requirements.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer 15 days of free support after delivery. Extended maintenance plans are also available.",
    },
    {
      question: "Can you help with Fiverr gig optimization?",
      answer:
        "Absolutely! We help with gig structure, copywriting, pricing strategy, and SEO-friendly tags.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we work with clients worldwide and adapt to their timezone, language, and platform preferences.",
    },
  ];

  return (
    <section className="text-light py-5">
      <Navbar />
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Frequently Asked Questions</h1>
          <p className="text-warning fs-5">Answers to common queries</p>
        </div>

        <div className="accordion bg-dark" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item bg-dark text-light" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed bg-secondary text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FAQs;
