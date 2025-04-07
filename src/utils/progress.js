export const saveProgress = (letter) => {
  try {
    const progress = getProgress();
    if (!progress.includes(letter)) {
      progress.push(letter);
      localStorage.setItem('alphabetProgress', JSON.stringify(progress));
    }
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
};

export const getProgress = () => {
  try {
    const savedProgress = localStorage.getItem('alphabetProgress');
    return savedProgress ? JSON.parse(savedProgress) : [];
  } catch (error) {
    console.error('Failed to get progress:', error);
    return [];
  }
};

export const resetProgress = () => {
  try {
    localStorage.removeItem('alphabetProgress');
  } catch (error) {
    console.error('Failed to reset progress:', error);
  }
};

export const getCompletionPercentage = () => {
  const progress = getProgress();
  return Math.round((progress.length / 26) * 100);
};