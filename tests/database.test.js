const test = require('node:test');
const assert = require('node:assert/strict');

const { validateMongoUrl } = require('../data/database');

test('rejects placeholder values in the MongoDB URL', () => {
  const message = validateMongoUrl('mongodb+srv://user:<db_password>@cluster.example.mongodb.net/test');
  assert.match(message, /placeholder/i);
});

test('accepts a non-placeholder MongoDB URL', () => {
  const message = validateMongoUrl('mongodb+srv://user:realPassword@cluster.example.mongodb.net/test');
  assert.equal(message, null);
});
