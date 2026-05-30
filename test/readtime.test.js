const { test } = require('node:test');
const assert = require('node:assert/strict');
const readingTime = require('reading-time');
const {
  WORDS_PER_MINUTE,
  formatReadTime,
  readTimeForText,
} = require('../lib/formatReadTime');

function words(count) {
  return Array.from({ length: count }, (_, i) => `word${i}`).join(' ');
}

test('formatReadTime shows seconds for short text', () => {
  const stats = readingTime(words(50), { wordsPerMinute: WORDS_PER_MINUTE });
  assert.equal(formatReadTime(stats), '15 sec read');
});

test('formatReadTime shows minutes for medium text', () => {
  const stats = readingTime(words(600), { wordsPerMinute: WORDS_PER_MINUTE });
  assert.equal(formatReadTime(stats), '3 min read');
});

test('formatReadTime shows hours for long text', () => {
  const stats = readingTime(words(24000), { wordsPerMinute: WORDS_PER_MINUTE });
  assert.equal(formatReadTime(stats), '2 hr read');
});

test('formatReadTime shows singular day', () => {
  const stats = readingTime(words(288000), { wordsPerMinute: WORDS_PER_MINUTE });
  assert.equal(formatReadTime(stats), '1 day read');
});

test('formatReadTime shows plural days', () => {
  const stats = readingTime(words(864000), { wordsPerMinute: WORDS_PER_MINUTE });
  assert.equal(formatReadTime(stats), '3 days read');
});

test('readTimeForText returns 0 sec read for empty input', () => {
  assert.equal(readTimeForText(' '), '0 sec read');
});

test('readTimeForText uses 200 WPM reading speed', () => {
  assert.equal(readTimeForText(words(150)), '45 sec read');
});
