// List of your Telegram video links (replace these with your actual links)
const videoLinks = [
  { title: "Lecture 1", url: "https://t.me/c/2642042750/1?embed=1" },
  { title: "Lecture 2", url: "https://t.me/c/2642042750/2?embed=1" },
  { title: "Lecture 3", url: "https://t.me/c/2642042750/3?embed=1" },
  { title: "Lecture 4", url: "https://t.me/c/2642042750/4?embed=1" },
  { title: "Lecture 5", url: "https://t.me/c/2642042750/5?embed=1" },
  { title: "Lecture 6", url: "https://t.me/c/2642042750/6?embed=1" },
  { title: "Lecture 7", url: "https://t.me/c/2642042750/7?embed=1" },
  { title: "Lecture 8", url: "https://t.me/c/2642042750/8?embed=1" },
  { title: "Lecture 9", url: "https://t.me/c/2642042750/9?embed=1" },
  { title: "Lecture 10", url: "https://t.me/c/2642042750/10?embed=1" },
  { title: "Lecture 11", url: "https://t.me/c/2642042750/11?embed=1" },
];

// Check if user is already logged in
function checkLogin() {
  const user = localStorage.getItem("telegramUser");
  if (user) {
    document.getElementById("login").style.display = "none";
    document.getElementById("videoPlayer").style.display = "block";
    loadVideos();
  }
}

// Load video buttons into the list
function loadVideos() {
  const videoList = document.getElementById("videoList");
  videoLinks.forEach(video => {
    const button = document.createElement("button");
    button.textContent = video.title;
    button.onclick = () => playVideo(video.url);
    videoList.appendChild(button);
  });
}

// Play the selected video in the iframe
function playVideo(url) {
  document.getElementById("videoFrame").src = url;
}

// Telegram sends user data here after login
window.onTelegramAuth = (user) => {
  localStorage.setItem("telegramUser", JSON.stringify(user));
  checkLogin();
};

// Check login status when page loads
checkLogin();
