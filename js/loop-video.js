window.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bgVideo");

    // Garante que o vídeo seja reproduzido sem mostrar duração ou controles
    video.play().catch(() => {
      // Em caso de falha, tenta reproduzir novamente com mutação garantida
      video.muted = true;
      video.play();
    });

    // Remove qualquer atributo de controle que possa causar exibição visual
    video.removeAttribute("controls");
  });