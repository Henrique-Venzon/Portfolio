window.onload = function () {
  new GitHubCalendar("#github-calendar-01", "Henrique-Venzon", {
    responsive: true,
    tooltips: true,
  });

  setTimeout(() => {
    const learnHow = document.querySelector("#github-calendar-01 .text-muted");
    if (learnHow) learnHow.style.display = "none";

    const streaks = document.querySelectorAll("#github-calendar-01 .contrib-streak");
    streaks.forEach((streak) => (streak.style.display = "none"));

    const contribFooter = document.querySelector("#github-calendar-01 .contrib-footer");
    if (contribFooter) contribFooter.style.display = "none";
  }, 500);
};

const observer = new MutationObserver(() => {
  const spanMonth = document.querySelector('td.ContributionCalendar-label span[aria-hidden="true"][style="position: absolute; top: 0"]');
  if (spanMonth && spanMonth.textContent === "Feb") {
    spanMonth.textContent = "FEV";
  }

  const spanLess = document.querySelector('span[data-view-component="true"].mr-1');
  if (spanLess && spanLess.textContent === "Less") {
    spanLess.textContent = "Menos";
  }

  const spanMore = document.querySelector('span[data-view-component="true"]:not(.mr-1)');
  if (spanMore && spanMore.textContent === "More") {
    spanMore.textContent = "Mais";
  }

  if (
    (spanLess && spanLess.textContent === "Menos") &&
    (spanMore && spanMore.textContent === "Mais") &&
    (spanMonth && spanMonth.textContent === "FEV")
  ) {
    observer.disconnect();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

const elements = document.querySelectorAll('td.ContributionCalendar-label span[aria-hidden="true"]');

elements.forEach(element => {
  element.style.fontSize = '20pt'; 
});


document.querySelectorAll('td').forEach(td => {
  if (td.textContent.trim() === '') {
      td.style.display = 'none';
  }
});