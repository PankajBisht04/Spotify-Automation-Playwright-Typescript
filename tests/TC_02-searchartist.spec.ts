import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth/auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://open.spotify.com/');
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('Owl City');
  await page.getByTestId('top-result-card').getByRole('link', { name: 'Owl City' }).click();
  await expect(page.getByTestId('adaptiveEntityTitle').locator('span')).toContainText('Owl City');
  await expect(page.getByTestId('artist-page')).toContainText('Verified Artist');
});