const readingTime = require('reading-time');

const WORDS_PER_MINUTE = 200;

function formatReadTime(stats) {
  const totalSeconds = Math.max(0, Math.round(stats.time / 1000));

  if (totalSeconds < 60) {
    return `${totalSeconds} sec read`;
  }

  const totalMinutes = Math.round(totalSeconds / 60);
  if (totalMinutes < 60) {
    return `${totalMinutes} min read`;
  }

  const totalHours = Math.round(totalMinutes / 60);
  if (totalHours < 24) {
    return `${totalHours} hr read`;
  }

  const totalDays = Math.round(totalHours / 24);
  return totalDays === 1 ? '1 day read' : `${totalDays} days read`;
}

function readTimeForText(text, options = {}) {
  const stats = readingTime(text, {
    wordsPerMinute: WORDS_PER_MINUTE,
    ...options,
  });
  return formatReadTime(stats);
}

module.exports = {
  WORDS_PER_MINUTE,
  formatReadTime,
  readTimeForText,
};
