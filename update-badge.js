// Example: Fetch number of followers from GitHub API
import fetch from 'node-fetch';

async function getFollowers(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data.followers;
}

async function updateBadge() {
  const username = 'rmaloloyon'; // Replace with your GitHub username
  const followers = await getFollowers(username);

  console.log(`::set-output name=followers::${followers}`);
}

updateBadge();
