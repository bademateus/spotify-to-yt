document.getElementById("convertBtn").addEventListener("click", () => {
  const url = document.getElementById("spotifyUrl").value;
  const playlistId = extractPlaylistId(url);

  if (playlistId) {
    console.log("Playlist ID:", playlistId);
    document.getElementById("status").textContent = "Found Playlist ID: " + playlistId;
  } else {
    document.getElementById("status").textContent = "Invalid Spotify playlist URL.";
  }
});

// Function to extract the playlist ID from Spotify URL
function extractPlaylistId(url) {
  const match = url.match(/playlist\/([a-zA-Z0-9]+)(\?si=.*)?/);
  return match ? match[1] : null;
}
