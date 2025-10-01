const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/latest-version', (req, res) => {
  const latestVersion = process.env.LATEST_VERSION || "1.0.3";
  const apkUrl = process.env.APK_URL || "https://drive.google.com/file/d/1vghxJ5FjIk6TPmuAHeacuNlr6W1jDb5X/view?usp=drivesdk";
  const updateNotes = process.env.UPDATE_NOTES || "Initial release.";
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
