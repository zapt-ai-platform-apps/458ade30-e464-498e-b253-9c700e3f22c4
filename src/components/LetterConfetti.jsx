import React, { useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const LetterConfetti = ({ letter, active, duration = 5000 }) => {
  const [windowDimension, setWindowDimension] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [showConfetti, setShowConfetti] = React.useState(active);

  useEffect(() => {
    setShowConfetti(active);
    
    if (active) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [active, duration]);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return showConfetti ? (
    <ReactConfetti
      width={windowDimension.width}
      height={windowDimension.height}
      recycle={false}
      numberOfPieces={200}
      confettiSource={{
        x: windowDimension.width / 2,
        y: windowDimension.height / 3,
        w: 0,
        h: 0
      }}
      // Custom shape to include the letter
      drawShape={ctx => {
        // Regular confetti
        if (Math.random() > 0.3) {
          ctx.beginPath();
          ctx.rect(0, 0, 10, 10);
          ctx.fill();
          return;
        }
        
        // Letter confetti
        ctx.font = "bold 14px Arial";
        ctx.fillText(letter, 0, 0);
      }}
    />
  ) : null;
};

export default LetterConfetti;