const username = "Henrique-Venzon";

async function fetchContributions() {
  const response = await fetch(`https://api.github.com/users/${username}/events`);
  
  if (!response.ok) {
    console.error("Erro ao buscar os dados");
    return [];
  }
  
  const events = await response.json();
  return events.filter(event => event.type === "PushEvent");
}

async function renderContributions() {
  const events = await fetchContributions();
  const contributions = {};
  
  events.forEach(event => {
    const date = new Date(event.created_at).toISOString().split("T")[0];
    contributions[date] = (contributions[date] || 0) + event.payload.size;
  });

  const container = document.getElementById("contributions");
  const today = new Date();
  
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today - i * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const level = Math.min(contributions[date] || 0, 4);
    const div = document.createElement("div");
    div.className = "contribution";
    div.setAttribute("data-level", level);
    container.appendChild(div);
  }
}

renderContributions();
