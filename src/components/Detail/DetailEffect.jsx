import { useState, useEffect } from 'react';
import style from './DetailEffect.module.css';

const DetailEffect = ({ text }) => {
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
    }, 250); // Adjust the typing speed here

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return <span className={style.DetailEffect}>{visibleText}</span>;
};

export default DetailEffect;