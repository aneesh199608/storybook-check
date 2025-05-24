import React, { useEffect, useRef } from 'react';
import './ButtonBase.js'; // <-- Import the Web Component

const MyButton = ({ label = 'Click Me', onClick }) => {
  const ref = useRef(null);

  useEffect(() => {
    const current = ref.current;
    if (current && onClick) {
      current.addEventListener('click', onClick);
    }
    return () => {
      if (current && onClick) {
        current.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return <my-button ref={ref} label={label}></my-button>;
};

export default MyButton;
