import { useState } from "react";
import "./DoubtPage.css";

const DoubtPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  const faqs = [
    {
      question: "How to get started learning RISC V?",
      answer:
        "Maven silicon offers the RISC-V RV321 ISA & RTL course. You can refer to RISC-V international YouTube videos to learn about the RISC-V ecosystem and future and for regular updates.",
    },
    {
      question: "What is the purpose of RISC V?",
      answer:
        "RISC V is an open-source instruction set architecture (ISA) designed to enable a new era of processor innovation through open collaboration.",
    },
    {
      question: "Is VLSI a good career?",
      answer:
        "Yes, VLSI is a promising field with a growing demand for skilled professionals in chip design and semiconductor industries.",
    },
    {
      question: "Are there any prerequisites for the VLSI Course?",
      answer:
        "Having a basic understanding of electronics and circuits would be beneficial for anyone looking to start a VLSI course.",
    },
  ];

  return (
    <div className="doubtPage">
      
      <div className="doubtpage-text">
        <h2>To get the latest updates, news, and technical resources</h2>
        <h1>Subscribe to our blog</h1>
        <input
          type="email"
          placeholder="Enter your email."
          required
          className="email"
          />
        <input type="submit" value="Submit" />

      </div>

    
      <div className="doubtquestion">
        <div className="leftside">
          <h1>
            Have Doubts? <span>FAQs</span>
          </h1>
        </div>

        <div className="rightside">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h1 onClick={() => toggleFAQ(index)}>
                <i className={activeIndex === index ? "fas fa-minus" : "fas fa-plus"}></i>
                {faq.question}
              </h1>
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}

          <a href="#" className="a">
            View all FAQs <i className="fa-solid fa-arrow-right"></i>
          </a>

          <div className="contact-doubt">
            <h1>Don’t see your questions answered here?</h1>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtPage;









