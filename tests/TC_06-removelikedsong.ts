import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth/auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://open.spotify.com/');
  await page.getByRole('button', { name: 'Liked Songs Pinned Playlist' }).click();
  await page.getByRole('gridcell', { name: 'Fireflies Owl City' }).first().click({
    button: 'right'
  });
  await page.getByRole('menuitem', { name: 'Remove from your Liked Songs' }).click();
  await expect(page.getByText('Removed from Liked Songs.')).toBeVisible();
  await expect(page.getByText('Removed from Liked Songs.')).toContainText('Removed from Liked Songs.');
});