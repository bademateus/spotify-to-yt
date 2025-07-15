document.getElementById("convertBtn").addEventListener("click", () => {
  const url = document.getElementById("spotifyUrl").value;
  document.getElementById("status").textContent = "You entered: " + url;
});
