import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth/auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://open.spotify.com/');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('menuitem', { name: 'Playlist' }).click();
  await page.getByRole('searchbox', { name: 'Search for songs or episodes' }).click();
  await page.getByRole('searchbox', { name: 'Search for songs or episodes' }).fill('FIreflies');
  await page.getByRole('row', { name: 'Play Fireflies by Owl City Fireflies Owl City Ocean Eyes Add to Playlist' }).getByTestId('add-to-playlist-button').click();
  await expect(page.getByTestId('playlist-tracklist').getByTestId('internal-track-link').locator('div')).toContainText('Fireflies');
});