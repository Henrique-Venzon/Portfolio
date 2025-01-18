 window.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bgVideo");

    video.removeAttribute("controls");
    
    video.play().catch(() => {
      video.muted = true;
      video.play();
    });
  });