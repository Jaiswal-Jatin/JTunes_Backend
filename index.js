const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/latest-version', (req, res) => {
  const latestVersion = process.env.LATEST_VERSION || "1.0.6";
  const apkUrl = process.env.APK_URL || "https://github.com/Jaiswal-Jatin/JTunes/releases/download/JTunes/JTunes.apk";
  const updateNotes = process.env.UPDATE_NOTES || [
    "Bug fixes and performance improvements",
    "Improved app stability",
    "Faster loading speed",
    "Enhanced user experience",
    "Security updates",
    "Minor UI improvements",
    "New features added"
  ];
  const forceUpdate = process.env.FORCE_UPDATE === 'true';

  res.json({
    version: latestVersion,
    apk_url: apkUrl,
    update_notes: updateNotes,
    force_update: forceUpdate
  });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
