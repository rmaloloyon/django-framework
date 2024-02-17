// Example: Fetch number of followers from GitHub API
const fetch = require('node-fetch');

async function getFollowers(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data.followers;
}

async function updateBadge() {
  const username = 'your-username'; // Replace with your GitHub username
  const followers = await getFollowers(username);

  console.log(`::set-output name=followers::${followers}`);
}

updateBadge();
