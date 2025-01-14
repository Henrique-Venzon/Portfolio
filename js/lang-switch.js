const translations = {
    "pt-BR": {
      titleJob: "Desenvolvedor Web",
      subtitleName: "< Henrique Francisco Venzon />",
      aboutMeTitle: "SOBRE",
      aboutMeTitle_2: "MIM",
      aboutMeText_1:
        "Olá, sou Henrique Venzon, estudante de Engenharia de Software e formado no curso Técnico em Desenvolvimento de Sistemas pelo SENAI em Itajaí, Santa Catarina. Com 18 anos, nascido em Jaraguá do Sul e atualmente morando em Itajaí, tenho me dedicado ao aprendizado contínuo de tecnologias web e ao desenvolvimento de soluções inovadoras na área de programação.",
      aboutMeText_2: 
        "Ao longo da minha formação, adquiri habilidades em HTML, CSS, JavaScript, PHP e MySQL, além de estar aprendendo React e Java. Essas competências me permitem criar aplicações completas, unindo front-end atrativo e funcional ao back-end eficiente. Essa visão ampla dos sistemas me capacita a atuar com versatilidade e eficiência em diversos tipos de projetos.",
      aboutMeText_3: 
        "Meu objetivo é consolidar minha carreira na área de desenvolvimento, contribuindo para projetos que impactem positivamente o mundo. Sou apaixonado por aprender novas tecnologias e superar desafios, acreditando que o crescimento contínuo é fundamental para se destacar no setor de tecnologia. Estou pronto para construir um futuro promissor com dedicação e entusiasmo.", 
      typedStrings: ["Projetos"],
      link_en: "Página para meus links!",
      code_monet_en: "Página de estilização!",
      logconnect_en: "Site educacional de logistica!",
      h1_commit: "Contribuições no GitHub 2024",
      total_en: "Contribuições em 2024: 823",
      feb_en: "Fev",
      apr_en: "Abr",
      may_en: "Mai",
      jui_en: "Jul",
      aug_en: "Ago",
      sep_en: "Set",
      oct_en: "Out",
      dec_en: "Dez",
      keyboard_1: "D",
      keyboard_2: "O",
      midia_en: "REDES SOCIAIS",
      curriculo_en: "CURRÍCULO",
      less: "Menos",
      more: "Mais",
      },
    "en-US": {
      titleJob: "Web Developer",
      subtitleName: "< Henrique Francisco Venzon />",
      aboutMeTitle: "ABOUT",
      aboutMeTitle_2: "ME",
      aboutMeText_1:
        "Hello, I'm Henrique Venzon, Software Engineering student and graduated from the Systems Development Technician course at SENAI in Itajaí, Santa Catarina. At 18 years old, born in Jaraguá do Sul and currently living in Itajaí, I have dedicated myself to continually learning web technologies and developing innovative solutions in the programming area.",
      aboutMeText_2: 
        "Throughout my training, I acquired skills in HTML, CSS, JavaScript, PHP and MySQL, in addition to learning React and Java. These skills allow me to create complete applications, combining attractive and functional front-end with efficient back-end. This broad view of systems enables me to work with versatility and efficiency on different types of projects.",
      aboutMeText_3: 
        "My goal is to consolidate my career in the development area, contributing to projects that positively impact the world. I am passionate about learning new technologies and overcoming challenges, believing that continuous growth is essential to stand out in the technology sector. I am ready to build a promising future with dedication and enthusiasm.",
      typedStrings: ["Projects"],
      link_en: "Page for my links!",
      code_monet_en: "Styling page!",
      logconnect_en: "Logistics educational website!",
      h1_commit: "Contributions on GitHub 2024",
      total_en: "Contributions in 2024: 823",
      feb_en: "Feb",
      apr_en: "Apr",
      may_en: "May",
      jui_en: "Jui",
      aug_en: "Aug",
      sep_en: "Sep",
      oct_en: "Oct",
      dec_en: "Dec",
      keyboard_1: "T",
      keyboard_2: "E",
      midia_en: "SOCIAL MEDIA",
      curriculo_en: "CURRICULOM",
      less: "Less",
      more: "More",
    },
  };
  
  const languageButton = document.getElementById("language-button");
  const languageFlag = document.getElementById("language-flag");
  
  let currentLanguage = "pt-BR";
  let typedInstance = null; 
  
  function updateLanguage(lang) {
    const elementsToTranslate = {
      titleJob: document.getElementById("title-job"),
      subtitleName: document.getElementById("subtitle-name"),
      aboutMeTitle: document.getElementById("aboutmetitle"),
      aboutMeTitle_2: document.getElementById("aboutmetitle_2"),
      aboutMeText_1: document.getElementById("aboutmetext_1"),
      aboutMeText_2: document.getElementById("aboutmetext_2"),
      aboutMeText_3: document.getElementById("aboutmetext_3"),
      link_en: document.getElementById("link_en"),
      code_monet_en: document.getElementById("code-monet-en"),
      logconnect_en: document.getElementById("logconnect_en"),
      h1_commit: document.getElementById("h1-commit"),
      total_en: document.getElementById("total_en"),
      feb_en: document.getElementById("feb_en"),
      apr_en: document.getElementById("apr_en"),
      may_en: document.getElementById("may_en"),
      jui_en: document.getElementById("jui_en"),
      aug_en: document.getElementById("aug_en"),
      sep_en: document.getElementById("sep_en"),
      oct_en: document.getElementById("oct_en"),
      dec_en: document.getElementById("dec_en"),
      keyboard_1: document.getElementById("keyboard_1"),
      keyboard_2: document.getElementById("keyboard_2"),
      midia_en: document.getElementById("midia-en"),
      curriculo_en: document.getElementById("curriculo_en"),
      less: document.getElementById("less"),
      more: document.getElementById("more"),
    };
  
    const translationsForLang = translations[lang];
    for (const key in translationsForLang) {
      if (key !== "typedStrings" && elementsToTranslate[key]) {
        elementsToTranslate[key].textContent = translationsForLang[key];
      }
    }
  
    updateTypedEffect(translationsForLang.typedStrings);
  }
  
  function updateTypedEffect(strings) {
    const element = document.getElementById("element");
  
    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }
  
    element.textContent = "";
  
    setTimeout(() => {
      typedInstance = new Typed(element, {
        strings: strings,
        typeSpeed: 200,
        startDelay: 100,
        backDelay: 2500,
        loop: true,
      });
    }, 50);
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
  
  updateLanguage(currentLanguage);