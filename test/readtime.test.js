const { test } = require('node:test');
const assert = require('node:assert/strict');
const readingTime = require('reading-time');

test('reading-time returns text for sample input', () => {
  const stats = readingTime('hello world '.repeat(50));
  assert.match(stats.text, /min read|sec read/);
});
