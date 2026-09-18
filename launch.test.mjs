import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const page = readFileSync(new URL('./src/app/page.jsx', import.meta.url), 'utf8');

test('ForkSmart project offers the live App Store link and QR', () => {
  assert.equal(page.includes('Coming Soon to iOS'), false);
  assert.equal(page.includes('Mobile App — Upcoming'), false);
  assert.equal(page.includes('upcoming iOS application'), false);
  assert.ok(page.includes('https://apps.apple.com/app/id6782392550'));
  assert.ok(page.includes('/images/forksmart-app-store-qr.svg'));
  assert.ok(existsSync(new URL('./public/images/forksmart-app-store-qr.svg', import.meta.url)));
});
