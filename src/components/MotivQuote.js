import React, { useEffect, useState } from 'react';
import '/home/ianmannn/Codesmith Linux/Projects/Solo Project/src/styles/MotivQuote.css';

const MotivQuote = () => {
  const [quote, setQuote] = useState({ text: "LOADING...", author: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const randomQuoteIndex = Math.floor(Math.random() * data.length);
        let i;
        let author = data[randomQuoteIndex].author;
        let authorCleaned = author.includes(',') ? author.split(',')[0] : author;
        setQuote({text: data[randomQuoteIndex].text, author: authorCleaned });
        console.log({text: data[randomQuoteIndex].text, author: authorCleaned })
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (!quote.text) {
    return <div className="quote">Loading...</div>;
  }

  return (
    <div className="quote">
      <p>"{quote.text}" - {quote.author}</p>
    </div>
  );
};

export default MotivQuote;

