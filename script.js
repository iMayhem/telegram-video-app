// Check authentication on page load
function checkAuth() {
  const user = JSON.parse(localStorage.getItem("telegramUser"));
  
  if (user) {
    // User is logged in
    document.getElementById("login").style.display = "none";
    document.getElementById("videoPlayer").style.display = "block";
    loadVideos();
  } else {
    // Not logged in - show login button
    document.getElementById("login").style.display = "block";
    document.getElementById("videoPlayer").style.display = "none";
  }
}

// Load available videos
function loadVideos() {
  const videoLinks = [
    { title: "Lecture 1", url: "https://t.me/c/2642042750/1?embed=1" },
    { title: "Lecture 2", url: "https://t.me/c/2642042750/2?embed=1" }
  ];

  const videoList = document.getElementById("videoList");
  videoList.innerHTML = "";
  
  videoLinks.forEach(video => {
    const button = document.createElement("button");
    button.textContent = video.title;
    button.onclick = () => {
      document.getElementById("videoFrame").src = video.url;
    };
    videoList.appendChild(button);
  });
}

// Initialize
checkAuth();
