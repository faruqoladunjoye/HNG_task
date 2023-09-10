const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  const currentUTCTime = currentDate.toISOString().split(".")[0] + "Z";

  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUTCTime,
    track: track,
    github_file_url:
      "https://github.com/faruqoladunjoye/HNG_task/blob/main/task.js",
    github_repo_url: "https://github.com/faruqoladunjoye/HNG_task",
    status_code: 200,
  };
  res.json(response);
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
