import ReactDOM from 'react-dom';
import React from 'react';
import LetterConfetti from '@/components/LetterConfetti';

export const showLetterConfetti = (letter, duration = 5000) => {
  // Create a container for the confetti if it doesn't exist
  let container = document.getElementById('confetti-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'confetti-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '1000';
    document.body.appendChild(container);
  }

  // Render the confetti
  const confettiElement = document.createElement('div');
  container.appendChild(confettiElement);

  // Render the LetterConfetti component into the container
  ReactDOM.render(
    <LetterConfetti letter={letter} active={true} duration={duration} />,
    confettiElement
  );

  // Clean up after the duration
  setTimeout(() => {
    if (container.contains(confettiElement)) {
      ReactDOM.unmountComponentAtNode(confettiElement);
      container.removeChild(confettiElement);
    }
    
    // Remove the container if it's empty
    if (container.childNodes.length === 0) {
      document.body.removeChild(container);
    }
  }, duration + 1000); // Add a bit extra time to ensure animation completes
};