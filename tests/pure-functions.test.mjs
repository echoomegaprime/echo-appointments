import { test } from 'node:test';
import assert from 'node:assert/strict';
import { timingSafeEqual } from '../src/index.ts';

test('timingSafeEqual: identical strings match', () => {
  assert.equal(timingSafeEqual('a-real-secret-key', 'a-real-secret-key'), true);
});

test('timingSafeEqual: different values of equal length do not match', () => {
  assert.equal(timingSafeEqual('a-real-secret-key', 'a-fake-secret-key'), false);
});

test('timingSafeEqual: different-length values do not match', () => {
  assert.equal(timingSafeEqual('short', 'a-much-longer-value'), false);
});

test('timingSafeEqual: case-sensitive', () => {
  assert.equal(timingSafeEqual('Secret', 'secret'), false);
});

test('timingSafeEqual: undefined never matches, in either position', () => {
  assert.equal(timingSafeEqual(undefined, 'secret'), false);
  assert.equal(timingSafeEqual('secret', undefined), false);
  assert.equal(timingSafeEqual(undefined, undefined), false);
});
