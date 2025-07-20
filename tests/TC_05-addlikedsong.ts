import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth/auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://open.spotify.com/');
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('Owl City Fireflies');
  await page.getByTestId('search-input').press('Enter');
  await page.getByTestId('top-result-card').getByRole('link', { name: 'Fireflies' }).click({
    button: 'right'
  });
  await page.getByRole('menuitem', { name: 'Save to your Liked Songs' }).click();
  await expect(page.getByText('Added to Liked Songs.')).toBeVisible();
  await expect(page.getByText('Added to Liked Songs.')).toContainText('Added to Liked Songs.');
  await page.getByRole('button', { name: 'Liked Songs Pinned Playlist' }).click();
  await expect(page.getByTestId('track-list')).toContainText('Fireflies');
});