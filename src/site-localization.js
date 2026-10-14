/* Translations for NekoGPT's custom landing sections.
   The original language menu already switches pt/en/es/fr; observe its HTML lang
   instead of installing a separate selector or overriding native translations. */
(() => {
  'use strict';
  const dictionary = {
  "pt": {
    "trailer": "TRAILER",
    "trailerAria": "Trailer do NekoGPT",
    "scroll": "ROLAR",
    "scrollAria": "Ir para o trailer",
    "resources": "RECURSOS",
    "highlights": "Pontos principais",
    "live2dTitle": "Faça upload dos seus próprios modelos Live2D",
    "live2dBody": "Crie a personalidade do jeito que quiser, faça upload de skins para seu Live2D. O limite é o céu.",
    "chatTitle": "Chat com diversas funções a se explorar",
    "chatBody": "Sistema de RP, onde você deixa sua conversa duas vezes mais imersiva, um sistema de ASMR para... bem, você decide. Explore e tenha uma experiência incrível.",
    "model3dTitle": "Faça upload dos seus próprios modelos 3D também",
    "model3dBody": "Adicione animações VRMA, configure 100% do seu jeito e explore recursos únicos. Divirta-se!",
    "gameplay": "GAMEPLAY",
    "gameplayTitle": "Jogue e faça lives com sua companheira",
    "gameplayBody": "Ela interage com você, pode ver o que você está fazendo, ajudar, dar dicas e até oferecer apoio emocional. Você decide!",
    "peopleNav": "Usuários e Criador",
    "peopleTitle": "USUÁRIOS E CRIADOR",
    "peopleIntro": "Experiências reais de usuários que usaram o NekoGPT e ajudaram o projeto a crescer com seus feedbacks.",
    "peopleLetter": "Eu, criador do NekoGPT, agradeço a todos que confiaram no projeto desde o início. Ele é incrível graças a todos que deram seus feedbacks. Respeito a opinião de todos e sempre busco o melhor. Talvez o NekoGPT seja bom porque faço o que realmente amo. Espero continuar nessa caminhada e tornar este app cada vez mais incrível.",
    "jhonBody": "O primeiro comprador do NekoGPT, tem ajudado bastante com feedback, sempre com boas ideias.",
    "beardBody": "Beard está sempre ajudando na qualidade de vida do app e dando boas ideias para facilitar o uso.",
    "shinobuBody": "Criador do NekoGPT, inspirado na Neuro-sama e um pouquinho em Nekopara (dá para imaginar por quê, né?).",
    "footerLead": "Siga no Twitter, inscreva-se no canal para acompanhar o projeto e entre no Discord para fazer parte da comunidade e participar de eventos e sorteios.",
    "footerAria": "Rodapé e redes sociais do NekoGPT",
    "socialNav": "Redes sociais",
    "twitterAria": "ShinobuDev no X (Twitter)",
    "youtubeAria": "NekoGPT no YouTube",
    "discordAria": "Comunidade NekoGPT no Discord",
    "steamAria": "Encontrar NekoGPT na Steam (abre em outra aba)",
    "steamTitle": "NekoGPT na Steam",
    "steamRegion": "NekoGPT na Steam",
    "mediaError": "Seu navegador não suporta a reprodução deste vídeo.",
    "live2dAria": "Demonstração da personalização de modelos Live2D no NekoGPT",
    "chatAria": "Demonstração dos recursos de chat do NekoGPT",
    "model3dAria": "Demonstração da personalização de modelos 3D no NekoGPT",
    "gameplayAria": "Gameplay com a companheira NekoGPT",
    "peopleAria": "Usuários e Criador do NekoGPT",
    "jhonAria": "Vídeo de Jhon_456 usando o NekoGPT, sem áudio",
    "beardAria": "Vídeo de Beard usando o NekoGPT, sem áudio",
    "shinobuAlt": "Arte original do NekoGPT, com personagem de orelhas de gato e logo rosa"
  },
  "en": {
    "trailer": "TRAILER",
    "trailerAria": "NekoGPT trailer",
    "scroll": "SCROLL",
    "scrollAria": "Go to the trailer",
    "resources": "FEATURES",
    "highlights": "Highlights",
    "live2dTitle": "Upload your own Live2D models",
    "live2dBody": "Create any personality you like and upload custom skins for your Live2D model. The sky is the limit.",
    "chatTitle": "A chat full of features to explore",
    "chatBody": "Make roleplay twice as immersive, try the ASMR system, or... well, that's up to you. Explore and enjoy an amazing experience.",
    "model3dTitle": "Upload your own 3D models, too",
    "model3dBody": "Add VRMA animations, customize everything your way, and discover unique features. Have fun!",
    "gameplay": "GAMEPLAY",
    "gameplayTitle": "Play games and stream with your companion",
    "gameplayBody": "She interacts with you, sees what you're doing, helps out, shares tips, and can even offer emotional support. It's up to you!",
    "peopleNav": "Users & Creator",
    "peopleTitle": "USERS & CREATOR",
    "peopleIntro": "Real experiences from people who use NekoGPT and helped the project grow through their feedback.",
    "peopleLetter": "As the creator of NekoGPT, I thank everyone who believed in the project from the beginning. Your feedback is what makes it special. I value everyone's opinions and always strive to do better. Maybe NekoGPT is good because I genuinely love what I do. I hope to keep moving forward and making this app more amazing with every step.",
    "jhonBody": "NekoGPT's first buyer, who has helped a lot with feedback and always brings great ideas.",
    "beardBody": "Beard is always helping improve the app's quality of life and suggesting ideas to make it easier to use.",
    "shinobuBody": "Creator of NekoGPT, inspired by Neuro-sama and a little by Nekopara (you can probably guess why, right?).",
    "footerLead": "Follow us on Twitter, subscribe to our channel for project updates, and join Discord to be part of the community and take part in events and giveaways.",
    "footerAria": "NekoGPT footer and social media",
    "socialNav": "Social media",
    "twitterAria": "ShinobuDev on X (Twitter)",
    "youtubeAria": "NekoGPT on YouTube",
    "discordAria": "NekoGPT community on Discord",
    "steamAria": "Find NekoGPT on Steam (opens in a new tab)",
    "steamTitle": "NekoGPT on Steam",
    "steamRegion": "NekoGPT on Steam",
    "mediaError": "Your browser does not support this video.",
    "live2dAria": "NekoGPT Live2D model customization demo",
    "chatAria": "NekoGPT chat features demo",
    "model3dAria": "NekoGPT 3D model customization demo",
    "gameplayAria": "Gameplay with your NekoGPT companion",
    "peopleAria": "NekoGPT users and creator",
    "jhonAria": "Silent video of Jhon_456 using NekoGPT",
    "beardAria": "Silent video of Beard using NekoGPT",
    "shinobuAlt": "Original NekoGPT artwork featuring a cat-eared character and pink logo"
  },
  "es": {
    "trailer": "TRÁILER",
    "trailerAria": "Tráiler de NekoGPT",
    "scroll": "DESLIZA",
    "scrollAria": "Ir al tráiler",
    "resources": "FUNCIONES",
    "highlights": "Puntos destacados",
    "live2dTitle": "Sube tus propios modelos Live2D",
    "live2dBody": "Crea la personalidad que quieras y sube skins para tu modelo Live2D. ¡El cielo es el límite!",
    "chatTitle": "Un chat con muchas funciones por explorar",
    "chatBody": "Haz que tus conversaciones de rol sean el doble de inmersivas, prueba el sistema ASMR o... bueno, tú decides. ¡Explora y disfruta de una experiencia increíble!",
    "model3dTitle": "También puedes subir tus propios modelos 3D",
    "model3dBody": "Añade animaciones VRMA, personaliza todo a tu gusto y descubre funciones únicas. ¡Diviértete!",
    "gameplay": "GAMEPLAY",
    "gameplayTitle": "Juega y haz directos con tu compañera",
    "gameplayBody": "Interactúa contigo, ve lo que estás haciendo, te ayuda, te da consejos e incluso puede ofrecerte apoyo emocional. ¡Tú eliges!",
    "peopleNav": "Usuarios y creador",
    "peopleTitle": "USUARIOS Y CREADOR",
    "peopleIntro": "Experiencias reales de usuarios que probaron NekoGPT y ayudaron al proyecto a crecer con sus comentarios.",
    "peopleLetter": "Como creador de NekoGPT, agradezco a todos los que confiaron en el proyecto desde el principio. Sus comentarios han sido esenciales para mejorarlo. Respeto todas las opiniones y siempre intento dar lo mejor de mí. Tal vez NekoGPT sea bueno porque hago lo que realmente amo. Espero seguir este camino y hacer que la aplicación sea cada vez más increíble.",
    "jhonBody": "El primer comprador de NekoGPT, que ha ayudado mucho con sus comentarios y siempre aporta grandes ideas.",
    "beardBody": "Beard siempre ayuda a mejorar la experiencia de uso de la aplicación y propone buenas ideas para facilitar su manejo.",
    "shinobuBody": "Creador de NekoGPT, inspirado por Neuro-sama y un poquito por Nekopara (seguro que te imaginas por qué, ¿no?).",
    "footerLead": "Síguenos en Twitter, suscríbete al canal para estar al día del proyecto y únete a Discord para formar parte de la comunidad y participar en eventos y sorteos.",
    "footerAria": "Pie de página y redes sociales de NekoGPT",
    "socialNav": "Redes sociales",
    "twitterAria": "ShinobuDev en X (Twitter)",
    "youtubeAria": "NekoGPT en YouTube",
    "discordAria": "Comunidad de NekoGPT en Discord",
    "steamAria": "Buscar NekoGPT en Steam (abre una pestaña nueva)",
    "steamTitle": "NekoGPT en Steam",
    "steamRegion": "NekoGPT en Steam",
    "mediaError": "Tu navegador no admite este vídeo.",
    "live2dAria": "Demostración de personalización de modelos Live2D en NekoGPT",
    "chatAria": "Demostración del chat de NekoGPT",
    "model3dAria": "Demostración de modelos 3D en NekoGPT",
    "gameplayAria": "Gameplay con tu compañera NekoGPT",
    "peopleAria": "Usuarios y creador de NekoGPT",
    "jhonAria": "Vídeo sin audio de Jhon_456 usando NekoGPT",
    "beardAria": "Vídeo sin audio de Beard usando NekoGPT",
    "shinobuAlt": "Arte original de NekoGPT con personaje de orejas de gato y logotipo rosa"
  },
  "fr": {
    "trailer": "BANDE-ANNONCE",
    "trailerAria": "Bande-annonce de NekoGPT",
    "scroll": "DÉFILER",
    "scrollAria": "Aller à la bande-annonce",
    "resources": "FONCTIONNALITÉS",
    "highlights": "Points forts",
    "live2dTitle": "Importez vos propres modèles Live2D",
    "live2dBody": "Créez la personnalité de votre choix et importez des skins pour votre modèle Live2D. Votre seule limite, c'est votre imagination !",
    "chatTitle": "Un chat aux multiples fonctions à découvrir",
    "chatBody": "Rendez vos jeux de rôle deux fois plus immersifs, essayez le mode ASMR ou... à vous de décider. Explorez et profitez d'une expérience incroyable !",
    "model3dTitle": "Importez aussi vos propres modèles 3D",
    "model3dBody": "Ajoutez des animations VRMA, personnalisez tout à votre façon et découvrez des fonctions uniques. Amusez-vous !",
    "gameplay": "GAMEPLAY",
    "gameplayTitle": "Jouez et diffusez vos parties avec votre compagne",
    "gameplayBody": "Elle interagit avec vous, voit ce que vous faites, vous aide, vous donne des conseils et peut même vous apporter du soutien moral. À vous de choisir !",
    "peopleNav": "Utilisateurs et créateur",
    "peopleTitle": "UTILISATEURS ET CRÉATEUR",
    "peopleIntro": "Des témoignages de personnes qui utilisent NekoGPT et ont aidé le projet à grandir grâce à leurs retours.",
    "peopleLetter": "En tant que créateur de NekoGPT, je remercie toutes les personnes qui ont cru au projet dès le début. Vos retours ont beaucoup contribué à son développement. Je respecte tous les avis et je cherche toujours à faire mieux. Si NekoGPT est apprécié, c'est peut-être parce que j'aime vraiment ce que je fais. J'espère poursuivre cette aventure et rendre l'application toujours plus incroyable.",
    "jhonBody": "Le tout premier acheteur de NekoGPT, qui nous aide beaucoup avec ses retours et propose toujours de bonnes idées.",
    "beardBody": "Beard aide constamment à améliorer le confort d'utilisation de l'application et propose de bonnes idées pour la rendre plus simple.",
    "shinobuBody": "Créateur de NekoGPT, inspiré par Neuro-sama et un peu par Nekopara (vous devinez sûrement pourquoi, non ?).",
    "footerLead": "Suivez-nous sur Twitter, abonnez-vous à la chaîne pour suivre le projet et rejoignez Discord pour participer à la communauté, aux événements et aux concours.",
    "footerAria": "Pied de page et réseaux sociaux de NekoGPT",
    "socialNav": "Réseaux sociaux",
    "twitterAria": "ShinobuDev sur X (Twitter)",
    "youtubeAria": "NekoGPT sur YouTube",
    "discordAria": "Communauté NekoGPT sur Discord",
    "steamAria": "Rechercher NekoGPT sur Steam (s'ouvre dans un nouvel onglet)",
    "steamTitle": "NekoGPT sur Steam",
    "steamRegion": "NekoGPT sur Steam",
    "mediaError": "Votre navigateur ne prend pas en charge cette vidéo.",
    "live2dAria": "Démonstration des modèles Live2D de NekoGPT",
    "chatAria": "Démonstration du chat de NekoGPT",
    "model3dAria": "Démonstration des modèles 3D de NekoGPT",
    "gameplayAria": "Jouer avec votre compagne NekoGPT",
    "peopleAria": "Utilisateurs et créateur de NekoGPT",
    "jhonAria": "Vidéo muette de Jhon_456 utilisant NekoGPT",
    "beardAria": "Vidéo muette de Beard utilisant NekoGPT",
    "shinobuAlt": "Illustration originale de NekoGPT avec personnage aux oreilles de chat et logo rose"
  }
};
  // Keep existing text for missing keys, while extending custom sections.
  for (const [code, pack] of Object.entries(window.nekoExtraLanguages || {})) {
    dictionary[code] = { ...dictionary.en, ...pack.custom };
  }
  const selectors = {
  "trailer": ".nekogpt-trailer-heading h2",
  "resources": "#nekogpt-resources-heading",
  "highlights": ".nekogpt-resources-subheading > span:nth-child(2)",
  "live2dTitle": ".nekogpt-resources-layout .nekogpt-resources-copy h3",
  "live2dBody": ".nekogpt-resources-layout .nekogpt-resources-description",
  "chatTitle": ".nekogpt-chat-feature .nekogpt-resources-copy h3",
  "chatBody": ".nekogpt-chat-feature .nekogpt-resources-description",
  "model3dTitle": ".nekogpt-3d-feature .nekogpt-resources-copy h3",
  "model3dBody": ".nekogpt-3d-feature .nekogpt-resources-description",
  "gameplay": ".nekogpt-gameplay-feature .nekogpt-resources-eyebrow",
  "gameplayTitle": ".nekogpt-gameplay-feature .nekogpt-resources-copy h3",
  "gameplayBody": ".nekogpt-gameplay-feature .nekogpt-resources-description",
  "peopleNav": ".site-header .nav-links a[href=\"#usuarios-e-criador\"]",
  "peopleTitle": ".nekogpt-creators-section-title",
  "peopleIntro": "#nekogpt-creators-title",
  "peopleLetter": ".nekogpt-creators-message",
  "jhonBody": ".nekogpt-creator-card--jhon .nekogpt-creator-card-copy > p:last-child",
  "beardBody": ".nekogpt-creator-card--beard .nekogpt-creator-card-copy > p:last-child",
  "shinobuBody": ".nekogpt-creator-card--shinobu .nekogpt-creator-card-copy > p:last-child",
  "footerLead": ".nekogpt-social-footer__caption"
};
  const attributes = [
  [
    "#trailer",
    "aria-label",
    "trailerAria"
  ],
  [
    ".neko-motion-scroll",
    "textContent",
    "scroll"
  ],
  [
    ".neko-motion-scroll",
    "aria-label",
    "scrollAria"
  ],
  [
    "#usuarios-e-criador",
    "aria-label",
    "peopleAria"
  ],
  [
    "#nekogpt-footer",
    "aria-label",
    "footerAria"
  ],
  [
    ".nekogpt-social-footer__links",
    "aria-label",
    "socialNav"
  ],
  [
    ".nekogpt-social-footer__link[href*=\"x.com/\"]",
    "aria-label",
    "twitterAria"
  ],
  [
    ".nekogpt-social-footer__link[href*=\"youtube.com/\"]",
    "aria-label",
    "youtubeAria"
  ],
  [
    ".nekogpt-social-footer__link[href*=\"discord.com/\"]",
    "aria-label",
    "discordAria"
  ],
  [
    "#neko-steam-wishlist",
    "aria-label",
    "steamRegion"
  ],
  [
    ".neko-steam-wishlist__link",
    "aria-label",
    "steamAria"
  ],
  [
    ".neko-steam-wishlist__link",
    "title",
    "steamTitle"
  ],
  [
    ".nekogpt-resources-layout video",
    "aria-label",
    "live2dAria"
  ],
  [
    ".nekogpt-chat-feature video",
    "aria-label",
    "chatAria"
  ],
  [
    ".nekogpt-3d-feature video",
    "aria-label",
    "model3dAria"
  ],
  [
    ".nekogpt-gameplay-feature video",
    "aria-label",
    "gameplayAria"
  ],
  [
    ".nekogpt-creator-card--jhon video",
    "aria-label",
    "jhonAria"
  ],
  [
    ".nekogpt-creator-card--beard video",
    "aria-label",
    "beardAria"
  ],
  [
    ".nekogpt-creator-card--shinobu img",
    "alt",
    "shinobuAlt"
  ]
];

  const getLocale = () => {
    const language = (document.documentElement.lang || 'pt').toLowerCase().split('-')[0];
    return Object.prototype.hasOwnProperty.call(dictionary, language) ? language : 'pt';
  };
  const applyTranslations = () => {
    const locale = getLocale();
    const copy = dictionary[locale];
    Object.entries(selectors).forEach(([key, selector]) => {
      document.querySelectorAll(selector).forEach(element => {
        if (element.textContent !== copy[key]) element.textContent = copy[key];
      });
    });
    attributes.forEach(([selector, attr, key]) => {
      document.querySelectorAll(selector).forEach(element => {
        if (attr === 'textContent') {
          if (element.textContent !== copy[key]) element.textContent = copy[key];
        } else if (element.getAttribute(attr) !== copy[key]) {
          element.setAttribute(attr, copy[key]);
        }
      });
    });
    // Always translate the unobtrusive fallback text inside custom players, too.
    document.querySelectorAll('#features video, #usuarios-e-criador video, #trailer video')
      .forEach(video => {
        const fallback = Array.from(video.childNodes).find(node => node.nodeType === 3 && node.nodeValue.trim());
        if (fallback && fallback.nodeValue.trim() !== copy.mediaError) fallback.nodeValue = copy.mediaError;
      });
  };
  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      applyTranslations();
    });
  };
  applyTranslations();

  // The native selector updates <html lang="..."> on each language change.
  new MutationObserver(schedule).observe(document.documentElement, {attributes:true,attributeFilter:['lang']});
  document.querySelectorAll('[data-lang-option]').forEach(button => {
    button.addEventListener('click', schedule);
  });
  // If a section is added asynchronously after the first render, localize it once.
  const host = document.body;
  const delayed = new MutationObserver(() => {
    if (document.querySelector('#nekogpt-footer') && document.querySelector('#usuarios-e-criador')) {
      schedule();
      delayed.disconnect();
    }
  });
  if (!document.querySelector('#nekogpt-footer')) delayed.observe(host, {childList:true,subtree:true});
})();