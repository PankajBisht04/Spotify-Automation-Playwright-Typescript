import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth/auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://open.spotify.com/');
  await page.getByText('Playlists', { exact: true }).click();
  await page.getByRole('button', { name: 'My Playlist #43 Playlist •' }).click();
  await page.getByTestId('action-bar-row').getByTestId('more-button').click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete My Playlist #43?' }).click();
  await expect(page.getByText('Removed from Your Library.')).toBeVisible();
  await expect(page.getByText('Removed from Your Library.')).toContainText('Removed from Your Library.');
});