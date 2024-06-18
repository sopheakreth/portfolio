import React, { useState, useEffect } from 'react';
// import './TextCycle.css'; // Import CSS file for animations

const HeaderCycle: React.FC = () => {
  const texts: string[] = [
    "I’m a Software Engineer",
    "I’m a Backend Developer",
    "I’m a Java Developer",
    "I’m a Web Developer"
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0); // Start from the first text

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length); // Cycle through texts
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Run effect once on component mount

  return (
    <div className="text-cycle-container">
      {texts.map((text, index) => (
        <div key={index} className={`text-wrapper ${index === currentIndex ? 'active' : ''}`}>
          <h2>{text}</h2>
        </div>
      ))}
    </div>
  );
};

export default HeaderCycle;


