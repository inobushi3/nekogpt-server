window.NEKO_DOCS_LOCALES = Object.assign(window.NEKO_DOCS_LOCALES || {}, {
  "es": {
    "ui": {
      "title": "Documentación",
      "back": "Volver al sitio",
      "search": "Buscar en la documentación...",
      "noResults": "No se encontraron secciones.",
      "groups": [
        "Empieza aquí",
        "Conoce las funciones",
        "Integraciones y ayuda"
      ],
      "heroEyebrow": "GUÍA PARA EMPEZAR",
      "heroTitle": "Entiende cómo funciona NekoGPT.",
      "heroLead": "Descubre cómo tu compañera recibe mensajes, prepara respuestas, habla e interactúa con lo que ocurre a su alrededor. Sin necesidad de programar.",
      "badges": [
        "De lo básico al uso diario",
        "Ejemplos prácticos",
        "Sin programación"
      ],
      "version": "Guía de funcionamiento de NekoGPT · actualizada en octubre de 2026",
      "noteLabel": "Importante",
      "sectionLabel": "CÓMO FUNCIONA",
      "sourceDate": "Referencia técnica: 13 de octubre de 2026",
      "footer": "La tecnología explicada de forma sencilla.",
      "brand": "NekoGPT • Documentación"
    },
    "sections": {
      "overview": {
        "title": "¿Qué es NekoGPT?",
        "lead": "Imagínalo como una compañera de escritorio formada por varias partes que trabajan juntas, no como una sola IA capaz de hacerlo todo.",
        "paragraphs": [
          "NekoGPT combina un chat, personajes Live2D o 3D, modelos de inteligencia artificial, reconocimiento y generación de voz, memoria y conexiones opcionales con juegos y aplicaciones.",
          "Tú eliges la personalidad, la apariencia, el modelo de IA y la forma de interactuar. Algunas funciones son automáticas; otras requieren activación y configuración."
        ],
        "note": "NekoGPT organiza la experiencia. El modelo de IA seleccionado genera las respuestas, mientras que la apariencia y la voz funcionan como capas independientes."
      },
      "flow": {
        "title": "El recorrido de un mensaje",
        "lead": "Cuando hablas con tu compañera, el proceso suele ser así:",
        "steps": [
          [
            "Hablas o escribes",
            "La entrada es texto o audio convertido en texto."
          ],
          [
            "Se prepara el contexto",
            "Se reúnen la conversación, la personalidad y la información relevante."
          ],
          [
            "Responde la IA",
            "El proveedor y modelo elegidos generan una respuesta."
          ],
          [
            "La respuesta cobra vida",
            "Aparece el texto; opcionalmente se añaden voz, labios y movimientos."
          ],
          [
            "Acciones opcionales",
            "Las integraciones pueden reaccionar o usar acciones autorizadas."
          ]
        ],
        "after": "Ejemplo: preguntas «¿Cómo me fue en el juego?». Si el juego está integrado y autorizado, sus eventos pueden ayudar a responder. Sin integración, la IA no sabe automáticamente qué ocurrió."
      },
      "modules": {
        "title": "Las piezas que forman NekoGPT",
        "lead": "Cada módulo cumple una función diferente. Pueden combinarse sin tener que activar todos a la vez.",
        "headers": [
          "Función",
          "Para qué sirve",
          "En la práctica"
        ],
        "rows": [
          [
            "Chat",
            "Lugar donde se desarrolla la conversación.",
            "Escribir y leer respuestas."
          ],
          [
            "Modelo de IA",
            "Genera respuestas basadas en el contexto.",
            "Elegir un modelo local o en la nube."
          ],
          [
            "Persona",
            "Define el estilo de conversación y ajustes del personaje.",
            "Crear una personalidad propia."
          ],
          [
            "Avatar Live2D / 3D",
            "Da una apariencia visual a la compañera.",
            "Importar modelos y ajustar animaciones."
          ],
          [
            "Voz",
            "Convierte audio en texto y texto en voz.",
            "Hablar con micrófono y escuchar respuestas."
          ],
          [
            "Memoria",
            "Recupera información guardada relevante.",
            "Recordar preferencias registradas."
          ],
          [
            "Visión",
            "Usa imágenes o capturas como contexto si está habilitada.",
            "Comentar una imagen o ventana compartida."
          ],
          [
            "Integraciones",
            "Conecta eventos y acciones de otras aplicaciones.",
            "Game Bridge, Discord y más funciones configuradas."
          ]
        ]
      },
      "persona": {
        "title": "Persona y avatar no son lo mismo",
        "lead": "Una diferencia útil al personalizar NekoGPT:",
        "cards": [
          [
            "♡",
            "Persona: cómo es",
            "Incluye personalidad, estilo de respuesta y enlaces a ajustes como IA y voz. Cambiarla puede modificar la conversación sin cambiar el modelo Live2D o 3D."
          ],
          [
            "✿",
            "Avatar: cómo se ve",
            "Es el modelo Live2D o 3D que aparece en pantalla. Los modelos Live2D ofrecen expresiones y movimientos, mientras que los modelos 3D VRM pueden utilizar poses y animaciones compatibles."
          ]
        ],
        "note": "Skins, expresiones y movimientos dependen de los archivos y las capacidades del modelo. Cambiar la apariencia no cambia automáticamente la personalidad."
      },
      "ai": {
        "title": "¿De dónde viene la inteligencia?",
        "lead": "NekoGPT no depende de un único proveedor. Puedes configurar uno y escoger un modelo disponible.",
        "headers": [
          "Tipo",
          "Ejemplos del app",
          "Qué debes saber"
        ],
        "rows": [
          [
            "Local",
            "Ollama y LM Studio",
            "La generación puede ocurrir en tu equipo con modelos instalados; el rendimiento depende del hardware."
          ],
          [
            "En la nube",
            "Google Gemini, OpenAI, OpenRouter y Anthropic Claude",
            "Normalmente requiere internet, cuenta y clave de API; los límites y costos dependen del proveedor."
          ],
          [
            "Personalizado",
            "Servicios compatibles con OpenAI",
            "Configura el servidor o dirección de un servicio compatible."
          ]
        ],
        "note": "La calidad, velocidad y capacidad de analizar imágenes dependen del modelo. No todos admiten visión ni las mismas funciones."
      },
      "memory": {
        "title": "¿Cómo funciona la memoria?",
        "lead": "El programa puede guardar información y buscar fragmentos útiles más adelante, como un cuaderno de recuerdos que consulta cuando conviene.",
        "paragraphs": [
          "El historial inmediato del chat no es lo mismo que las memorias guardadas. El historial mantiene el contexto de la conversación actual; las memorias se buscan por relevancia cuando la pregunta lo requiere.",
          "NekoGPT dispone de recuperación textual y semántica (RAG), con ámbitos separados, incluso por persona. Esto no significa memoria perfecta: depende de lo guardado, lo recuperado y la configuración."
        ],
        "process": [
          "Guardar información",
          "Buscar notas relevantes",
          "Añadirlas al contexto",
          "Responder con contexto"
        ],
        "note": "La memoria no implica vigilancia continua ni garantiza que la IA lo recuerde todo. Solo utiliza información registrada y recuperada."
      },
      "senses": {
        "title": "Escuchar, hablar y ver",
        "lead": "NekoGPT puede trabajar con más que texto. Estas funciones son opcionales y se configuran por separado.",
        "cards": [
          [
            "♫",
            "Escuchar (STT)",
            "El audio del micrófono se convierte en texto. Se pueden configurar motores locales o proveedores externos."
          ],
          [
            "◖",
            "Hablar (TTS)",
            "Un motor de voz convierte la respuesta en audio. La animación de la boca puede seguir la reproducción."
          ],
          [
            "◎",
            "Interpretar imágenes",
            "Con el permiso y el modelo adecuados, imágenes o capturas pueden formar parte del contexto. No observa la pantalla automáticamente."
          ]
        ],
        "process": [
          "Entrada",
          "Texto para la IA",
          "Respuesta",
          "Voz y avatar"
        ],
        "note": "La voz y la visión pueden necesitar modelos adicionales, permisos del sistema o servicios en línea."
      },
      "games": {
        "title": "¿Cómo interactúa con juegos?",
        "lead": "Game Bridge permite que juegos y mods compatibles compartan eventos y acciones que la compañera puede usar.",
        "paragraphs": [
          "Un juego necesita una integración propia: abrir NekoGPT no significa poder controlar cualquier juego. Game Bridge es compatible con el protocolo Neuro SDK y exige autorización por sesión para ejecutar acciones del juego.",
          "Las reacciones automáticas pueden centrarse en victorias, peligros o descubrimientos, en lugar de comentar cada evento. La frecuencia es configurable y la IA decide si un comentario resulta apropiado."
        ],
        "steps": [
          [
            "Conectar",
            "Inicia Game Bridge y conecta un juego o mod compatible."
          ],
          [
            "Autorizar",
            "Selecciona las acciones permitidas. La confianza dinámica es opcional y vale para la sesión autorizada."
          ],
          [
            "Interactuar",
            "La IA puede considerar eventos del juego, comentar y ejecutar únicamente acciones autorizadas."
          ]
        ],
        "note": "Una acción ya enviada al juego puede continuar aunque retires la autorización. Revisa las acciones antes de aprobarlas."
      },
      "started": {
        "title": "¿Por dónde empezar?",
        "lead": "Un orden sencillo para tu primera sesión:",
        "steps": [
          [
            "Elige un personaje",
            "Abre el app y selecciona o importa un modelo visual."
          ],
          [
            "Ajusta la persona",
            "Define el estilo de conversación y la personalidad."
          ],
          [
            "Configura una IA",
            "Escoge un proveedor y modelo disponible. Configura el acceso cuando sea necesario."
          ],
          [
            "Prueba el chat",
            "Empieza escribiendo para comprobar cómo responde."
          ],
          [
            "Activa funciones adicionales",
            "Explora el micrófono, la voz, la memoria, la visión y las integraciones poco a poco."
          ]
        ],
        "note": "Los nombres exactos de los botones pueden cambiar. Esta guía explica la lógica general, no cada pantalla."
      },
      "faq": {
        "title": "Preguntas frecuentes",
        "items": [
          [
            "¿Necesito programar?",
            "No para el chat y los ajustes comunes. Algunas integraciones requieren mods o herramientas adicionales."
          ],
          [
            "¿Funciona sin conexión?",
            "Las funciones locales pueden funcionar con modelos y dependencias instalados. Los servicios en la nube y las integraciones en línea requieren internet."
          ],
          [
            "¿Cambiar el avatar cambia la personalidad?",
            "No necesariamente. Apariencia, persona, modelo de IA y voz son ajustes distintos, aunque puedan vincularse."
          ],
          [
            "¿Puede ver toda mi pantalla?",
            "No automáticamente. Debes habilitar la captura y utilizar un modelo compatible."
          ],
          [
            "¿Controla cualquier juego?",
            "No. El juego debe ofrecer una integración compatible y debes autorizar las acciones."
          ]
        ]
      },
      "source": {
        "title": "Acerca de esta documentación",
        "lead": "Esta guía te ayuda a entender NekoGPT sin necesidad de conocer su implementación técnica.",
        "paragraphs": [
          "Descubre cómo funcionan y se conectan las personalidades, los avatares, los modelos de IA, la memoria, la voz y las integraciones. La idea es explicar para qué sirve cada función en el uso diario.",
          "Las funciones disponibles pueden variar según la versión instalada, los modelos elegidos y la configuración. Seguiremos ampliando esta documentación a medida que NekoGPT evolucione."
        ],
        "note": "NekoGPT no es un proyecto de código abierto. Esta guía explica el uso y el funcionamiento general de la aplicación; no ofrece su código fuente."
      }
    }
  },
  "fr": {
    "ui": {
      "title": "Documentation",
      "back": "Retour au site",
      "search": "Rechercher dans la documentation...",
      "noResults": "Aucune section trouvée.",
      "groups": [
        "Bien démarrer",
        "Comprendre les fonctionnalités",
        "Intégrations et aide"
      ],
      "heroEyebrow": "LE GUIDE POUR DÉBUTER",
      "heroTitle": "Comprendre le fonctionnement de NekoGPT.",
      "heroLead": "Découvrez comment votre compagne reçoit les messages, prépare ses réponses, parle et réagit à son environnement. Sans connaissances en programmation.",
      "badges": [
        "Les bases, simplement",
        "Exemples concrets",
        "Sans programmation"
      ],
      "version": "Guide de fonctionnement de NekoGPT · mis à jour en octobre 2026",
      "noteLabel": "À savoir",
      "sectionLabel": "FONCTIONNEMENT",
      "sourceDate": "Référence technique : 13 octobre 2026",
      "footer": "La technologie rendue plus simple à comprendre.",
      "brand": "NekoGPT • Documentation"
    },
    "sections": {
      "overview": {
        "title": "Qu'est-ce que NekoGPT ?",
        "lead": "Imaginez une compagne de bureau composée de plusieurs éléments qui collaborent, plutôt qu'une seule IA capable de tout faire.",
        "paragraphs": [
          "NekoGPT réunit une interface de chat, des personnages Live2D ou 3D, des modèles d'IA au choix, la reconnaissance et la synthèse vocales, la mémoire et des connexions facultatives à des applications ou jeux.",
          "Vous choisissez la personnalité, l'apparence, le modèle d'IA et votre façon d'interagir. Certaines fonctions sont automatiques ; d'autres doivent être activées et configurées."
        ],
        "note": "NekoGPT organise l'expérience. Le modèle d'IA choisi génère les réponses, tandis que le visuel et la voix restent des éléments distincts."
      },
      "flow": {
        "title": "Le parcours d'un message",
        "lead": "Une conversation suit généralement ces étapes :",
        "steps": [
          [
            "Vous parlez ou écrivez",
            "La saisie est du texte ou de l'audio transcrit."
          ],
          [
            "Le contexte est préparé",
            "La conversation, la personnalité et les informations utiles sont réunies."
          ],
          [
            "L'IA répond",
            "Le fournisseur et le modèle sélectionnés génèrent la réponse."
          ],
          [
            "La réponse prend vie",
            "Le texte apparaît ; la voix et les mouvements peuvent l'accompagner."
          ],
          [
            "Actions facultatives",
            "Les intégrations peuvent réagir ou effectuer des actions autorisées."
          ]
        ],
        "after": "Exemple : vous demandez « Comment s'est passée ma partie ? ». Si le jeu est connecté et autorisé, ses événements peuvent enrichir la réponse. Sans intégration, l'IA ne sait pas automatiquement ce qui s'est passé."
      },
      "modules": {
        "title": "Les principaux éléments du logiciel",
        "lead": "Chaque module a son rôle. Ils fonctionnent ensemble sans devoir être tous activés.",
        "headers": [
          "Fonction",
          "Son rôle",
          "Au quotidien"
        ],
        "rows": [
          [
            "Chat",
            "L'espace des conversations.",
            "Écrire des messages et lire les réponses."
          ],
          [
            "Modèle d'IA",
            "Génère les réponses à partir du contexte.",
            "Choisir un modèle local ou un service en ligne."
          ],
          [
            "Persona",
            "Définit le comportement et les paramètres du personnage.",
            "Créer sa propre personnalité."
          ],
          [
            "Avatar Live2D / 3D",
            "Donne une apparence à votre compagne.",
            "Importer des modèles et ajuster les animations."
          ],
          [
            "Voix",
            "Convertit la parole en texte et inversement.",
            "Parler au micro et écouter les réponses."
          ],
          [
            "Mémoire",
            "Retrouve des informations enregistrées pertinentes.",
            "Se rappeler des préférences sauvegardées."
          ],
          [
            "Vision",
            "Utilise des images ou captures si cette fonction est activée.",
            "Commenter une image ou une fenêtre partagée."
          ],
          [
            "Intégrations",
            "Connecte les événements et actions d'autres applications.",
            "Game Bridge, Discord et outils configurés."
          ]
        ]
      },
      "persona": {
        "title": "Persona et avatar : deux choses différentes",
        "lead": "Une distinction importante pour personnaliser NekoGPT :",
        "cards": [
          [
            "♡",
            "Persona : sa personnalité",
            "Elle regroupe le caractère, le style de réponse et des préférences comme l'IA ou la voix. La modifier peut changer la conversation sans remplacer le modèle Live2D ou 3D."
          ],
          [
            "✿",
            "Avatar : son apparence",
            "C'est le modèle Live2D ou 3D affiché à l'écran. Les modèles Live2D disposent d'expressions et de mouvements, tandis que les modèles 3D VRM peuvent utiliser des poses et animations compatibles."
          ]
        ],
        "note": "Skins, expressions et mouvements dépendent des fichiers et capacités du modèle choisi. Changer d'apparence ne change pas automatiquement la personnalité."
      },
      "ai": {
        "title": "D'où vient l'intelligence ?",
        "lead": "NekoGPT n'est pas lié à une seule IA. Vous sélectionnez un fournisseur et un modèle disponible.",
        "headers": [
          "Type",
          "Exemples intégrés",
          "À retenir"
        ],
        "rows": [
          [
            "Local",
            "Ollama et LM Studio",
            "La génération peut se faire sur votre ordinateur avec des modèles installés ; les performances dépendent de la machine."
          ],
          [
            "Cloud",
            "Google Gemini, OpenAI, OpenRouter et Anthropic Claude",
            "Nécessite généralement internet, un compte et une clé API ; coûts et limites dépendent du fournisseur."
          ],
          [
            "Personnalisé",
            "Services compatibles OpenAI",
            "Configurez l'adresse et les paramètres du service compatible."
          ]
        ],
        "note": "Qualité, vitesse et capacité à interpréter les images varient d'un modèle à l'autre. Ils ne prennent pas tous en charge la vision."
      },
      "memory": {
        "title": "Comment fonctionne la mémoire ?",
        "lead": "Le logiciel peut enregistrer des informations et retrouver les éléments utiles plus tard, comme un carnet de souvenirs.",
        "paragraphs": [
          "L'historique de la conversation actuelle est distinct des souvenirs consultables. L'historique maintient le fil du dialogue ; les souvenirs enregistrés peuvent être recherchés quand une question s'y rapporte.",
          "NekoGPT propose une recherche textuelle et sémantique (RAG), avec des espaces séparés, notamment selon la persona. Ce n'est pas une mémoire parfaite : tout dépend des données enregistrées, retrouvées et des paramètres."
        ],
        "process": [
          "Sauvegarder une information",
          "Chercher les souvenirs utiles",
          "Les ajouter au contexte",
          "Répondre en contexte"
        ],
        "note": "La mémoire n'est pas une surveillance continue ni une garantie de tout retenir. Elle utilise seulement les informations réellement enregistrées et retrouvées."
      },
      "senses": {
        "title": "Écouter, parler et voir",
        "lead": "NekoGPT peut utiliser d'autres informations que du texte. Chaque fonction reste facultative.",
        "cards": [
          [
            "♫",
            "Écouter (STT)",
            "La voix captée par le micro est transformée en texte, grâce à un moteur local ou à un service configuré."
          ],
          [
            "◖",
            "Parler (TTS)",
            "Un moteur vocal transforme la réponse en audio. Les mouvements de la bouche peuvent suivre la lecture."
          ],
          [
            "◎",
            "Comprendre des images",
            "Avec l'autorisation et un modèle compatible, images et captures peuvent enrichir le contexte. La capture de l'écran n'est pas automatique."
          ]
        ],
        "process": [
          "Entrée",
          "Texte pour l'IA",
          "Réponse",
          "Voix et avatar"
        ],
        "note": "La parole et la vision peuvent nécessiter des modèles supplémentaires, des autorisations système ou un service en ligne."
      },
      "games": {
        "title": "Comment interagit-elle avec les jeux ?",
        "lead": "Game Bridge permet aux jeux et mods compatibles de communiquer des événements et des actions à NekoGPT.",
        "paragraphs": [
          "Un jeu doit disposer d'une intégration dédiée : lancer NekoGPT ne permet pas de contrôler n'importe quel jeu. Game Bridge prend en charge le protocole Neuro SDK et exige une autorisation de session pour envoyer des actions.",
          "Les réactions automatiques peuvent privilégier les moments marquants — victoire, danger ou découverte — plutôt que chaque petit événement. Vous réglez la fréquence et l'IA décide si une réaction est pertinente."
        ],
        "steps": [
          [
            "Connecter",
            "Lancez Game Bridge et connectez un jeu ou mod compatible."
          ],
          [
            "Autoriser",
            "Choisissez les actions permises. La confiance dynamique est facultative et limitée à la session approuvée."
          ],
          [
            "Interagir",
            "L'IA peut tenir compte des événements, commenter et exécuter uniquement les actions autorisées."
          ]
        ],
        "note": "Une action déjà transmise au jeu peut continuer après la révocation. Vérifiez les actions proposées avant de les approuver."
      },
      "started": {
        "title": "Comment bien commencer ?",
        "lead": "Un ordre simple pour votre première utilisation :",
        "steps": [
          [
            "Choisissez un personnage",
            "Lancez NekoGPT puis sélectionnez ou importez un modèle visuel."
          ],
          [
            "Réglez la persona",
            "Définissez le style de dialogue et la personnalité."
          ],
          [
            "Configurez l'IA",
            "Choisissez un fournisseur et un modèle ; configurez l'accès aux services cloud si nécessaire."
          ],
          [
            "Essayez le chat",
            "Commencez par un message texte pour voir comment elle répond."
          ],
          [
            "Activez les options ensuite",
            "Explorez progressivement le micro, la voix, la mémoire, la vision et les intégrations."
          ]
        ],
        "note": "Les noms exacts des boutons peuvent évoluer. Ce guide explique le principe, pas chaque écran."
      },
      "faq": {
        "title": "Questions fréquentes",
        "items": [
          [
            "Faut-il savoir programmer ?",
            "Non pour les conversations et paramètres ordinaires. Certaines intégrations externes nécessitent des mods ou outils supplémentaires."
          ],
          [
            "Est-ce utilisable sans internet ?",
            "Les fonctions locales peuvent fonctionner avec des modèles et dépendances installés. Les fournisseurs cloud et intégrations en ligne ont besoin d'une connexion."
          ],
          [
            "Changer l'avatar modifie-t-il sa personnalité ?",
            "Pas nécessairement. Apparence, persona, IA et voix sont des paramètres distincts qui peuvent être liés dans un profil."
          ],
          [
            "Voit-elle tout mon écran ?",
            "Pas automatiquement. La capture doit être activée et le modèle choisi doit être compatible."
          ],
          [
            "Peut-elle contrôler tous les jeux ?",
            "Non. Chaque jeu doit proposer une intégration compatible et les actions doivent être approuvées."
          ]
        ]
      },
      "source": {
        "title": "À propos de cette documentation",
        "lead": "Ce guide vous aide à comprendre NekoGPT sans avoir besoin de connaître son fonctionnement technique interne.",
        "paragraphs": [
          "Découvrez comment la personnalité, les avatars, les modèles d'IA, la mémoire, la voix et les intégrations fonctionnent ensemble. Le but est de présenter l'utilité de chaque fonction au quotidien.",
          "Les fonctionnalités peuvent varier selon la version installée, les modèles choisis et les paramètres activés. Nous enrichirons cette documentation à mesure que NekoGPT évoluera."
        ],
        "note": "NekoGPT n'est pas un projet open source. Ce guide explique l'utilisation et le fonctionnement général de l'application ; il ne donne pas accès à son code source."
      }
    }
  }
});