const translations = {
    "pt-BR": {
      titleJob: "Desenvolvedor Web",
      subtitleName: "< Henrique Francisco Venzon />",
      aboutMeTitle: "SOBRE",
      aboutMeTitle_2: "MIM",
      aboutMeText_1:
        "Olá, sou Henrique Venzon, estudante de Engenharia de Software e formado no curso Técnico em Desenvolvimento de Sistemas pelo SENAI em Itajaí, Santa Catarina. Com 18 anos, nascido em Jaraguá do Sul e atualmente morando em Itajaí, tenho me dedicado ao aprendizado contínuo de tecnologias web e ao desenvolvimento de soluções inovadoras na área de programação.",
    },
    "en-US": {
      titleJob: "Web Developer",
      subtitleName: "< Henrique Francisco Venzon />",
      aboutMeTitle: "ABOUT",
      aboutMeTitle_2: "ME",
      aboutMeText_1:
        "Hello, I'm Henrique Venzon, Software Engineering student and graduated from the Systems Development Technician course at SENAI in Itajaí, Santa Catarina. At 18 years old, born in Jaraguá do Sul and currently living in Itajaí, I have dedicated myself to continually learning web technologies and developing innovative solutions in the programming area.",
    },
  };
  
  const languageButton = document.getElementById("language-button");
  const languageFlag = document.getElementById("language-flag");
  
  let currentLanguage = "pt-BR";
  
  function updateLanguage(lang) {
    const elementsToTranslate = {
      titleJob: document.getElementById("title-job"),
      subtitleName: document.getElementById("subtitle-name"),
      aboutMeTitle: document.getElementById("aboutmetitle"),
      aboutMeTitle_2: document.getElementById("aboutmetitle_2"),
      aboutMeText_1: document.getElementById("aboutmetext_1"),
    };
  
    const translationsForLang = translations[lang];
    for (const key in translationsForLang) {
      if (elementsToTranslate[key]) {
        elementsToTranslate[key].textContent = translationsForLang[key];
      }
    }
  }
  
  languageButton.addEventListener("click", () => {
    if (currentLanguage === "pt-BR") {
      currentLanguage = "en-US";
      languageFlag.src = "img/bandeira-eua.png";
    } else {
      currentLanguage = "pt-BR";
      languageFlag.src = "img/bandeira-brasil.webp";
    }
    updateLanguage(currentLanguage);
  });
  
  // Inicializar com o idioma padrão
  updateLanguage(currentLanguage);
  