import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth/auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://open.spotify.com/');
  await page.getByTestId('search-input').fill('Fireflies Owl City');
  await page.getByTestId('herocard-click-handler').click();
  await expect(page.getByTestId('track-page')).toContainText('Song');
  await expect(page.getByTestId('entityTitle').getByRole('heading')).toContainText('Fireflies');
  await expect(page.getByTestId('creator-link')).toContainText('Owl City');
});