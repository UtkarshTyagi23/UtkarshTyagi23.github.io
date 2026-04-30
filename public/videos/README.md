# Video drop folder

Drop project demo videos here as `.mp4` files. Filename should match the `slug`
in `src/data/projects.json` — e.g. `vehicle-insurance.mp4`.

After dropping, the file is automatically served at `/videos/<filename>` by
Astro. Reference it in `projects.json` as `"src": "/videos/vehicle-insurance.mp4"`.

Optional: drop a poster image (first-frame thumbnail) into `../posters/` with
the same base name (e.g. `vehicle-insurance.jpg`) to control what shows before
the video plays.

## Recording tips

- Keep clips under ~60 seconds — visitors don't watch longer.
- 1080p, MP4 (H.264 + AAC) — works in every browser without re-encode.
- Aim for under ~10 MB per clip so the page stays fast.
- If a video is much larger, prefer YouTube and switch the projects.json entry
  to `"type": "youtube"` with the video URL.
