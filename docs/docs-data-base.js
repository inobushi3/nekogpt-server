window.NEKO_DOCS_LOCALES = Object.assign(window.NEKO_DOCS_LOCALES || {}, {
  "pt": {
    "ui": {
      "title": "Documentação",
      "back": "Voltar ao site",
      "search": "Pesquisar nesta documentação...",
      "noResults": "Nenhuma seção encontrada.",
      "groups": [
        "Comece por aqui",
        "Entenda os recursos",
        "Integrações e ajuda"
      ],
      "heroEyebrow": "GUIA PARA QUEM ESTÁ COMEÇANDO",
      "heroTitle": "Entenda como o NekoGPT funciona.",
      "heroLead": "Uma explicação clara de como a sua companheira recebe mensagens, constrói respostas, ganha voz e interage com o que acontece ao seu redor. Sem precisar ler código.",
      "badges": [
        "Do básico ao funcionamento",
        "Exemplos reais",
        "Sem programação"
      ],
      "version": "Guia de funcionamento do NekoGPT · atualizado em outubro de 2026",
      "noteLabel": "Vale saber",
      "sectionLabel": "COMO FUNCIONA",
      "sourceDate": "Referência técnica: 13 de outubro de 2026",
      "footer": "Feito para deixar a tecnologia mais fácil de entender.",
      "brand": "NekoGPT • Documentação"
    },
    "sections": {
      "overview": {
        "title": "O que é o NekoGPT?",
        "lead": "Pense nele como uma companheira de desktop composta por várias peças que trabalham juntas — não como uma única IA que faz tudo sozinha.",
        "paragraphs": [
          "O NekoGPT reúne uma janela de conversa, personagens Live2D ou 3D, opções de inteligência artificial, reconhecimento e síntese de voz, memória e integrações com outros programas ou jogos.",
          "Você escolhe a personalidade, a aparência, o modelo de IA e como quer interagir. Algumas coisas acontecem automaticamente, outras só entram em ação depois que você ativa e configura o recurso."
        ],
        "note": "O NekoGPT organiza a experiência. Quem gera a resposta é o modelo de IA que você selecionou; a aparência e a voz são camadas independentes."
      },
      "flow": {
        "title": "O caminho de uma mensagem",
        "lead": "Quando você conversa com sua companheira, o aplicativo segue aproximadamente este caminho:",
        "steps": [
          [
            "Você fala ou digita",
            "A entrada pode ser texto ou áudio convertido em texto."
          ],
          [
            "O contexto é reunido",
            "A conversa, a persona e informações relevantes ajudam a formar a solicitação."
          ],
          [
            "A IA responde",
            "O provedor e o modelo escolhidos produzem a resposta."
          ],
          [
            "Ela ganha expressão",
            "O chat exibe o texto; voz, boca e movimentos podem acompanhar."
          ],
          [
            "Ações, se permitidas",
            "Integrações podem reagir a eventos ou executar ações autorizadas."
          ]
        ],
        "after": "Exemplo: você pergunta “Como foi meu dia no jogo?”. Se o jogo estiver integrado e autorizado, os acontecimentos recebidos podem ajudar a IA a responder. Sem integração, ela não sabe automaticamente o que aconteceu."
      },
      "modules": {
        "title": "As peças que formam o aplicativo",
        "lead": "Cada parte resolve um problema diferente. Elas se combinam, mas não precisam estar todas ativas ao mesmo tempo.",
        "headers": [
          "Recurso",
          "Para que serve",
          "Na prática"
        ],
        "rows": [
          [
            "Chat",
            "É onde a conversa acontece e onde você acompanha as respostas.",
            "Digitar, ler e continuar uma conversa."
          ],
          [
            "Modelo de IA",
            "Interpreta o contexto e gera o texto da resposta.",
            "Escolher um modelo local ou um serviço online."
          ],
          [
            "Persona",
            "Define o jeito de conversar e configurações ligadas à personagem.",
            "Uma companheira tímida, animada ou com seu próprio estilo."
          ],
          [
            "Avatar Live2D / 3D",
            "Dá uma representação visual à personagem.",
            "Importar modelos, ajustar aparência e animações."
          ],
          [
            "Voz",
            "Transforma fala em texto e texto em áudio.",
            "Falar pelo microfone e ouvir a resposta."
          ],
          [
            "Memória",
            "Recupera informações salvas relevantes para a conversa.",
            "Retomar preferências ou fatos já registrados."
          ],
          [
            "Visão",
            "Permite usar imagens ou capturas como contexto, quando ativada.",
            "Comentar uma janela ou imagem compartilhada."
          ],
          [
            "Integrações",
            "Conectam a companheira a eventos e ações externas.",
            "Game Bridge, Discord e outros recursos configurados."
          ]
        ]
      },
      "persona": {
        "title": "Persona não é a mesma coisa que avatar",
        "lead": "Essa diferença é importante para entender a personalização:",
        "cards": [
          [
            "♡",
            "Persona: quem ela é",
            "Reúne personalidade, estilo de resposta e vínculos com configurações como modelo de IA e voz. Mudar a persona pode mudar a experiência de conversa sem precisar trocar o desenho."
          ],
          [
            "✿",
            "Avatar: como ela aparece",
            "É o modelo visual. No Live2D, desenhos em camadas recebem expressões e movimentos. No 3D, modelos VRM podem usar animações, poses e movimentos compatíveis."
          ]
        ],
        "note": "Skins, expressões, animações e ajustes dependem dos arquivos e das capacidades do modelo escolhido. Trocar de visual não altera automaticamente a personalidade."
      },
      "ai": {
        "title": "De onde vem a inteligência?",
        "lead": "O NekoGPT é flexível: ele não está preso a uma única IA. Você configura um provedor e escolhe um modelo disponível.",
        "headers": [
          "Tipo",
          "Exemplos presentes no app",
          "O que considerar"
        ],
        "rows": [
          [
            "Local",
            "Ollama e LM Studio",
            "A geração pode acontecer no seu computador, conforme os modelos e serviços instalados; depende do desempenho da máquina."
          ],
          [
            "Na nuvem",
            "Google Gemini, OpenAI, OpenRouter e Anthropic Claude",
            "Normalmente exige conexão, conta e chave de API; limites e custos dependem do provedor."
          ],
          [
            "Personalizado",
            "Serviços compatíveis com a API OpenAI",
            "Você informa o endereço e as configurações de um serviço compatível."
          ]
        ],
        "note": "A qualidade, a velocidade e recursos como visão variam conforme o modelo escolhido. Nem todo modelo consegue interpretar imagens ou executar todas as modalidades."
      },
      "memory": {
        "title": "Como funciona a memória?",
        "lead": "O aplicativo pode guardar informações e buscar trechos relevantes para enriquecer uma resposta futura — uma espécie de caderno de lembranças consultado na hora certa.",
        "paragraphs": [
          "Há uma diferença entre o histórico imediato da conversa e a memória recuperável. O histórico ajuda a manter o assunto atual; as memórias salvas podem ser pesquisadas por relevância quando fazem sentido para a pergunta.",
          "O NekoGPT utiliza recuperação textual e semântica (RAG) e separação de escopos, inclusive por persona. Isso não significa lembrança perfeita: o resultado depende do que foi salvo, do que foi encontrado e das configurações."
        ],
        "process": [
          "Informação salva",
          "Busca por relevância",
          "Trecho no contexto",
          "Resposta contextualizada"
        ],
        "note": "Memória não é vigilância permanente nem garantia de que a IA nunca se esquecerá de algo. Ela trabalha com dados efetivamente registrados e recuperados."
      },
      "senses": {
        "title": "Fala, escuta e visão",
        "lead": "O NekoGPT pode trabalhar com mais do que texto. Esses recursos são independentes e dependem das opções ativadas.",
        "cards": [
          [
            "♫",
            "Ouvir você (STT)",
            "O áudio do microfone é reconhecido e transformado em texto. Pode usar mecanismos locais ou provedores configurados."
          ],
          [
            "◖",
            "Responder com voz (TTS)",
            "A resposta em texto é transformada em fala por um mecanismo de voz escolhido. A animação da boca pode acompanhar o áudio."
          ],
          [
            "◎",
            "Interpretar imagens",
            "Com permissão e um modelo compatível, imagens, capturas de tela ou quadros podem entrar como contexto. Sem isso, a IA não enxerga sua tela por padrão."
          ]
        ],
        "process": [
          "Entrada",
          "Texto para a IA",
          "Resposta",
          "Voz e avatar"
        ],
        "note": "Fala e visão podem exigir modelos extras, permissões do sistema, configuração de entrada ou conexão com um serviço externo."
      },
      "games": {
        "title": "Como ela interage com jogos?",
        "lead": "O Game Bridge permite que jogos e mods compatíveis contem ao NekoGPT o que acontece e ofereçam ações para a companheira usar.",
        "paragraphs": [
          "Um jogo precisa ter integração própria: abrir o NekoGPT não faz com que ele controle qualquer jogo sozinho. O Game Bridge usa um protocolo compatível com o Neuro SDK, recebe informações e ações oferecidas pelo jogo e exige autorização de sessão para executá-las.",
          "Reações automáticas podem levar em conta eventos importantes, como uma vitória, um perigo ou uma descoberta, em vez de comentar cada pequeno acontecimento. A frequência pode ser ajustada e a IA ainda decide se faz sentido comentar."
        ],
        "steps": [
          [
            "Conecte",
            "Inicie o Game Bridge e conecte um jogo ou mod compatível."
          ],
          [
            "Autorize",
            "Escolha as ações que a IA pode usar; confiança automática é opcional e vale para a sessão aprovada."
          ],
          [
            "Acompanhe",
            "A IA recebe contexto, pode comentar acontecimentos e executar apenas ações autorizadas."
          ]
        ],
        "note": "Uma ação já enviada ao jogo pode continuar mesmo depois de você revogar a permissão. Por isso, confira as ações disponíveis antes de autorizar."
      },
      "started": {
        "title": "Por onde começar?",
        "lead": "Se você acabou de conhecer o NekoGPT, vale seguir uma ordem simples:",
        "steps": [
          [
            "Escolha sua personagem",
            "Abra o aplicativo e selecione ou importe o visual que quiser usar."
          ],
          [
            "Ajuste a persona",
            "Defina o estilo de conversa e a personalidade que combina com você."
          ],
          [
            "Configure a inteligência artificial",
            "Selecione um provedor e modelo disponível. Se for serviço online, configure o acesso necessário."
          ],
          [
            "Teste uma conversa",
            "Comece pelo texto e veja como a personagem responde antes de adicionar outros recursos."
          ],
          [
            "Ative extras aos poucos",
            "Depois explore microfone, voz, memória, visão e integrações, conforme sua necessidade."
          ]
        ],
        "note": "Os nomes exatos dos botões podem variar entre versões. Este guia explica a lógica geral, não cada clique da interface."
      },
      "faq": {
        "title": "Dúvidas comuns",
        "items": [
          [
            "Preciso saber programar?",
            "Não para conversar ou configurar os recursos comuns. Algumas integrações externas podem exigir ferramentas próprias ou instalação de mods."
          ],
          [
            "Ele funciona sem internet?",
            "É possível usar recursos locais com modelos e componentes instalados. Provedores em nuvem, serviços online e algumas integrações precisam de conexão."
          ],
          [
            "Se eu importar outro modelo, a personalidade muda?",
            "Não necessariamente. Visual, persona, provedor de IA e voz são configurações diferentes, embora possam estar vinculadas em um perfil."
          ],
          [
            "Ela vê tudo o que faço o tempo todo?",
            "Não automaticamente. A captura precisa estar habilitada e o modelo escolhido precisa ser capaz de analisar esse conteúdo."
          ],
          [
            "A IA pode controlar qualquer jogo?",
            "Não. O jogo precisa oferecer uma integração compatível, e as ações precisam estar autorizadas pelo usuário."
          ]
        ]
      },
      "source": {
        "title": "Sobre esta documentação",
        "lead": "Este guia foi feito para você entender o NekoGPT sem precisar conhecer os detalhes técnicos do aplicativo.",
        "paragraphs": [
          "Aqui você encontra explicações sobre as funções, a personalidade da companheira, os avatares, a inteligência artificial, a memória, a voz e as integrações. A ideia é mostrar o que cada recurso faz e como eles se conectam no dia a dia.",
          "Os recursos disponíveis podem mudar conforme a versão instalada, o modelo escolhido e as configurações ativadas. Os tutoriais serão ampliados conforme o NekoGPT evoluir."
        ],
        "note": "O NekoGPT não é um projeto open source. Esta documentação explica o uso e o funcionamento geral do aplicativo; ela não disponibiliza seu código-fonte."
      }
    }
  },
  "en": {
    "ui": {
      "title": "Documentation",
      "back": "Back to website",
      "search": "Search this documentation...",
      "noResults": "No matching sections.",
      "groups": [
        "Start here",
        "Understanding features",
        "Integrations & help"
      ],
      "heroEyebrow": "A FRIENDLY STARTER GUIDE",
      "heroTitle": "How NekoGPT works, simply explained.",
      "heroLead": "See how your companion receives messages, builds replies, speaks, and reacts to what is happening around you. No coding knowledge needed.",
      "badges": [
        "From basics to daily use",
        "Practical examples",
        "No code required"
      ],
      "version": "NekoGPT functionality guide · updated October 2026",
      "noteLabel": "Good to know",
      "sectionLabel": "HOW IT WORKS",
      "sourceDate": "Technical reference: October 13, 2026",
      "footer": "Making technology easier to understand.",
      "brand": "NekoGPT • Documentation"
    },
    "sections": {
      "overview": {
        "title": "What is NekoGPT?",
        "lead": "Think of it as a desktop companion made of several parts working together — not one magical AI that does everything by itself.",
        "paragraphs": [
          "NekoGPT brings together chat, Live2D or 3D characters, AI model choices, speech input and output, memory, and optional connections to apps or games.",
          "You choose the personality, appearance, AI model, and how you interact. Some features happen automatically; others must be enabled and configured."
        ],
        "note": "NekoGPT organizes the experience. Your chosen AI model generates replies, while appearance and speech are separate layers."
      },
      "flow": {
        "title": "What happens when you send a message?",
        "lead": "A conversation generally follows this path:",
        "steps": [
          [
            "You type or speak",
            "Input can arrive as text or speech transcribed into text."
          ],
          [
            "Context is prepared",
            "Conversation, persona, and relevant information shape the request."
          ],
          [
            "The AI replies",
            "Your selected provider and model generate the answer."
          ],
          [
            "The reply comes alive",
            "Text appears in chat; voice, lip sync, and motions may accompany it."
          ],
          [
            "Optional actions",
            "Connected apps can trigger reactions or approved actions."
          ]
        ],
        "after": "Example: you ask “How did I do in that game?”. If a game integration is connected and approved, received events can inform the answer. Without an integration, the AI does not automatically know what happened."
      },
      "modules": {
        "title": "The main parts of the app",
        "lead": "Each module solves a different problem. They work together, but you don't have to use them all.",
        "headers": [
          "Feature",
          "What it does",
          "In everyday use"
        ],
        "rows": [
          [
            "Chat",
            "Where conversations take place.",
            "Send messages and read replies."
          ],
          [
            "AI model",
            "Uses context to generate a text response.",
            "Pick a local model or a cloud provider."
          ],
          [
            "Persona",
            "Defines conversational style and character settings.",
            "Create a shy, upbeat, or unique personality."
          ],
          [
            "Live2D / 3D avatar",
            "Gives the companion an appearance.",
            "Import models, adjust looks and animations."
          ],
          [
            "Voice",
            "Converts speech to text and text to audio.",
            "Talk through a microphone and hear replies."
          ],
          [
            "Memory",
            "Retrieves relevant saved information.",
            "Bring back preferences and recorded details."
          ],
          [
            "Vision",
            "Makes images or captures available as context if enabled.",
            "Discuss a shared screen or picture."
          ],
          [
            "Integrations",
            "Connects events and actions from other apps.",
            "Game Bridge, Discord, and configured features."
          ]
        ]
      },
      "persona": {
        "title": "Persona and avatar are different",
        "lead": "A useful distinction when customizing NekoGPT:",
        "cards": [
          [
            "♡",
            "Persona: who she is",
            "Includes personality, reply style, and links to choices such as AI model and voice. Changing persona can change the conversation without changing the artwork."
          ],
          [
            "✿",
            "Avatar: what she looks like",
            "This is the visual model. Live2D animates layered artwork; 3D VRM models can use compatible motions, poses, and animations."
          ]
        ],
        "note": "Skins, expressions, and animations depend on the chosen model's files and capabilities. A new appearance does not automatically change personality."
      },
      "ai": {
        "title": "Where does the intelligence come from?",
        "lead": "NekoGPT is not tied to one AI. You configure a provider and select an available model.",
        "headers": [
          "Type",
          "Examples in the app",
          "What to know"
        ],
        "rows": [
          [
            "Local",
            "Ollama and LM Studio",
            "Generation can run on your computer with installed models and services; your hardware affects speed."
          ],
          [
            "Cloud",
            "Google Gemini, OpenAI, OpenRouter, Anthropic Claude",
            "Usually needs internet, an account, and an API key; limits and costs are provider-specific."
          ],
          [
            "Custom",
            "OpenAI-compatible services",
            "Use a compatible endpoint with the appropriate configuration."
          ]
        ],
        "note": "Quality, speed, and image support vary by model. Not every model can understand images or support every interaction."
      },
      "memory": {
        "title": "How does memory work?",
        "lead": "The app can save information and retrieve relevant pieces later — like a notebook it checks when useful.",
        "paragraphs": [
          "The immediate chat history is different from long-term searchable memories. Chat history helps the current conversation flow; saved memories may be searched when they relate to a new question.",
          "NekoGPT supports text and semantic retrieval (RAG), with separate scopes including personas. This is not perfect recall: it depends on what was saved, retrieved, and enabled."
        ],
        "process": [
          "Save information",
          "Find relevant notes",
          "Add to context",
          "Generate a contextual reply"
        ],
        "note": "Memory is not permanent surveillance or a promise that the AI remembers everything. It uses information that has actually been saved and retrieved."
      },
      "senses": {
        "title": "Listening, speaking, and seeing",
        "lead": "NekoGPT can work with more than text. These abilities are optional and configured independently.",
        "cards": [
          [
            "♫",
            "Understand your voice (STT)",
            "Microphone audio becomes text. Local recognition engines and configured providers may be available."
          ],
          [
            "◖",
            "Speak back (TTS)",
            "A selected speech engine turns a response into audio. Lip-sync can follow playback."
          ],
          [
            "◎",
            "Understand images",
            "When enabled and supported by the AI model, pictures or screen captures can provide context. NekoGPT does not automatically watch your screen."
          ]
        ],
        "process": [
          "Input",
          "Text for AI",
          "Response",
          "Speech and avatar"
        ],
        "note": "Audio and vision may need extra models, operating-system permissions, or cloud services."
      },
      "games": {
        "title": "How can she interact with games?",
        "lead": "Game Bridge lets compatible games and mods send events to NekoGPT and expose actions that your companion may perform.",
        "paragraphs": [
          "The game needs its own integration: running NekoGPT cannot control any random game. Game Bridge is compatible with the Neuro SDK protocol, receives game-defined actions, and requires session authorization before sending actions.",
          "Automatic reactions can prioritize meaningful moments — winning, danger, or discoveries — rather than commenting on every small event. You can change frequency, while the AI decides whether a comment fits."
        ],
        "steps": [
          [
            "Connect",
            "Start Game Bridge and connect a compatible game or mod."
          ],
          [
            "Approve",
            "Select actions the AI may use. Dynamic trust is optional and scoped to the approved session."
          ],
          [
            "Interact",
            "The AI can consider game context, comment on events, and use approved actions only."
          ]
        ],
        "note": "An action already sent to a game may continue even after access is revoked. Check the available actions before approving them."
      },
      "started": {
        "title": "Where should I start?",
        "lead": "A simple setup order for your first session:",
        "steps": [
          [
            "Choose a character",
            "Open the app and choose or import a visual model."
          ],
          [
            "Set the persona",
            "Choose a conversational style and personality."
          ],
          [
            "Configure an AI",
            "Select an available provider and model. Set up access if using a cloud service."
          ],
          [
            "Try plain chat",
            "Start with a text message and check the response."
          ],
          [
            "Enable extras gradually",
            "Explore microphone, voice, memory, vision, and integrations as needed."
          ]
        ],
        "note": "Exact button labels can change between versions. This guide explains the general logic, not a screen-by-screen tutorial."
      },
      "faq": {
        "title": "Frequently asked questions",
        "items": [
          [
            "Do I need to know how to code?",
            "Not for regular chat and settings. Some external integrations may require mods or separate tools."
          ],
          [
            "Does it work offline?",
            "Local features can work with installed models and dependencies. Cloud providers and online integrations need an internet connection."
          ],
          [
            "Does changing the avatar change her personality?",
            "Not necessarily. Appearance, persona, AI model, and voice are distinct settings, though a profile can link them."
          ],
          [
            "Can it see everything on my screen?",
            "Not automatically. Capture must be enabled and supported by your selected model."
          ],
          [
            "Can the AI control any game?",
            "No. The game must have a compatible integration, and you must approve its actions."
          ]
        ]
      },
      "source": {
        "title": "About this documentation",
        "lead": "This guide helps you understand NekoGPT without needing to know its technical implementation.",
        "paragraphs": [
          "Explore how the app's features work together, including personalities, avatars, AI models, memory, voice, and integrations. The goal is to explain what each feature does and how it fits into everyday use.",
          "Available features may vary with your installed version, selected models, and enabled settings. This documentation will continue to grow as NekoGPT evolves."
        ],
        "note": "NekoGPT is not an open-source project. This guide explains how to use the application and how its features work; it does not provide its source code."
      }
    }
  }
});