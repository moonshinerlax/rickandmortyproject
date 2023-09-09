import { useState, useEffect } from 'react';
import style from './AboutEffect.module.css';

const AboutEffect = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setVisibleText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed here

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return <span className={style.typingeffect}>{visibleText}</span>;
};

export default AboutEffect;
