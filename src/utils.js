// Utility functions

function formatDate(date) {
  return date.toISOString();
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { formatDate, randomInt };