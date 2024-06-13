import React, { useEffect, useState } from 'react';

const MotivQuote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://zenquotes.io/api/random');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuote(data[0]); // Assuming the API returns an array with one quote object
        console.log('DATA:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (!quote) {
    return <div className="quote">Loading...</div>;
  }

  return (
    <div className="quote">
      <p>{quote.q} - {quote.a}</p> {/* Assuming `q` is the quote text and `a` is the author */}
    </div>
  );
};

export default MotivQuote;
