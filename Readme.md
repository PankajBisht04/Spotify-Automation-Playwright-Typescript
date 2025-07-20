 
🎵 Spotify App Test Suite
This repository contains a set of automated tests for validating key functionality of the  App, including song search, artist search, playlist management, and album interactions. 

Since Spotify uses 0auth you need to save cookies in a folder auth. Inside this directory save cookies with auth.json
For the first login time run use the following command: 
`npx playwright codegen --save-storage=auth/auth.json`

Requirements:

Internet Connection
Spotify Account
Node.js: v22.17.1
Version: 5.8.3
Playwright: Version 1.54.1

To create tests use: 
`npx playwright codegen --load-storage=auth/auth.json https://open.spotify.com`

To run tests in cmd use:
`npx playwright test` 

To run tests in gui use:
`npx playwright test --ui`

Tests cases are stored inside tests folder.
Configuration can be done via playwright.config.ts.
By default parallel running is disabled.

✅ Test Cases
1. Search Song
Objective: Validate that searching by song name returns the correct song.

2. Search Artist
Objective: Validate that searching by artist name returns the correct artist.

3. Create Playlist and Add Song
Objective: Ensure a new playlist can be created and songs can be added to it.

4. Search Album and Add All Tracks to Playlist
Objective: Test that an album's full track list can be added to a playlist.

5. Add Playlist Tracks to Album (Reverse Association)
Objective: Validate the functionality to associate playlist tracks with an album.

6. Delete Playlist
Objective: Ensure that playlists can be successfully deleted.