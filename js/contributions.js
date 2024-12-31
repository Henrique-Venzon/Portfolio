window.onload = function () {
  new GitHubCalendar("#github-calendar-01", "Henrique-Venzon", {
    responsive: true,
    tooltips: true,
  });

  // Ocultar elementos desnecessários após o carregamento
  setTimeout(() => {
    // Oculta o texto "Learn how we count contributions"
    const learnHow = document.querySelector("#github-calendar-01 .text-muted");
    if (learnHow) learnHow.style.display = "none";

    // Oculta informações de streaks e contribuições totais
    const streaks = document.querySelectorAll("#github-calendar-01 .contrib-streak");
    streaks.forEach((streak) => (streak.style.display = "none"));

    const contribFooter = document.querySelector("#github-calendar-01 .contrib-footer");
    if (contribFooter) contribFooter.style.display = "none";
  }, 500);
};

const observer = new MutationObserver(() => {
  // Seleciona o elemento que contém o mês "Feb" e altera para "FEV"
  const spanMonth = document.querySelector('td.ContributionCalendar-label span[aria-hidden="true"][style="position: absolute; top: 0"]');
  if (spanMonth && spanMonth.textContent === "Feb") {
    spanMonth.textContent = "FEV";
  }

  // Seleciona o elemento "Less" e altera para "Menos"
  const spanLess = document.querySelector('span[data-view-component="true"].mr-1');
  if (spanLess && spanLess.textContent === "Less") {
    spanLess.textContent = "Menos";
  }

  // Seleciona o elemento "More" e altera para "Mais"
  const spanMore = document.querySelector('span[data-view-component="true"]:not(.mr-1)');
  if (spanMore && spanMore.textContent === "More") {
    spanMore.textContent = "Mais";
  }

  // Desconecta o observer se todos os textos já foram alterados
  if (
    (spanLess && spanLess.textContent === "Menos") &&
    (spanMore && spanMore.textContent === "Mais") &&
    (spanMonth && spanMonth.textContent === "FEV")
  ) {
    observer.disconnect();
  }
});

// Inicia o observador no documento inteiro
observer.observe(document.body, { childList: true, subtree: true });
