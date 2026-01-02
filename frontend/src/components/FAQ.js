import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQContainer = styled.section`
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 25px 30px;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
  
  &:hover {
    background: #f8fafc;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 30px 25px;
  color: #666;
  line-height: 1.6;
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "What is OnTech and how does it work?",
      answer: "OnTech is a comprehensive platform for UI/UX designers to showcase their portfolios, collaborate with clients, and manage design projects. It provides tools for project management, client feedback, and professional portfolio presentation."
    },
    {
      question: "How much does OnTech cost?",
      answer: "We offer three pricing tiers: Starter ($29/month), Professional ($79/month), and Enterprise ($199/month). Each plan includes different features and project limits. You can start with a free trial to explore the platform."
    },
    {
      question: "Can I collaborate with clients on OnTech?",
      answer: "Yes! OnTech includes built-in collaboration tools that allow clients to provide feedback, approve designs, and track project progress in real-time. Communication is streamlined through our platform."
    },
    {
      question: "Is my work secure on OnTech?",
      answer: "Absolutely. We use enterprise-grade security measures including SSL encryption, secure data centers, and regular security audits. Your designs and client information are protected with the highest security standards."
    },
    {
      question: "Can I customize my portfolio?",
      answer: "Yes, OnTech offers extensive customization options for your portfolio. You can choose from various templates, customize colors and layouts, and even use your own domain for a professional presentation."
    },
    {
      question: "Do you offer customer support?",
      answer: "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our Professional and Enterprise plans include priority support with faster response times."
    }
  ];

  return (
    <FAQContainer>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Find answers to common questions about OnTech
        </p>
      </div>

      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <FAQQuestion onClick={() => toggleItem(index)}>
            {faq.question}
            {openItems.has(index) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </FAQQuestion>
          
          <AnimatePresence>
            {openItems.has(index) && (
              <FAQAnswer
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </FAQAnswer>
            )}
          </AnimatePresence>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;