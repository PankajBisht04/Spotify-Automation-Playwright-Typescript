import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth/auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://open.spotify.com/');
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').click();
  await page.getByTestId('search-input').fill('Coco Moon');
  await page.getByTestId('top-result-card').getByRole('link', { name: 'Coco Moon' }).click({
    button: 'right'
  });
  await page.getByRole('menuitem', { name: 'Add to playlist' }).click();
  await page.getByRole('menuitem', { name: 'My Playlist #' }).click();

});