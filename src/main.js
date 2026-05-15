const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const personality = document.querySelector("[data-personality]");
const hero = document.querySelector(".hero");
const canvas = document.querySelector("#particle-field");
const ctx = canvas.getContext("2d");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const installPlatformButtons = document.querySelectorAll("[data-install-platform]");
const installTerminalDownload = document.querySelector("[data-install-terminal-download]");
const installTerminalCommand = document.querySelector("[data-install-terminal-command]");
const installTerminalHint = document.querySelector("[data-install-terminal-hint]");
const installDownloadButton = document.querySelector(".install-download-button");
const installDownloadLabel = document.querySelector("[data-install-download-label]");
const languageSwitch = document.querySelector("[data-language-switch]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageCurrent = document.querySelector("[data-language-current]");

const personalities = ["Neko", "Luna", "Yumi", "aiko", "your custom persona"];
let personalityIndex = 0;
let personalityLetter = 0;
let personalityDeleting = false;
let currentLanguage = "pt";
let activeInstallPlatform = "windows";
const supportedLanguages = new Set(["pt", "en", "es", "fr"]);
const htmlLanguageMap = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  fr: "fr",
};
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const mouse = {
  x: 0.5,
  y: 0.5,
  targetX: 0.5,
  targetY: 0.5,
};

const translations = {
  pt: {
    metaTitle: "NekoGPT - App desktop de companhia com IA",
    metaDescription: "NekoGPT é um app desktop de companhia com IA, personagens Live2D, voz, memória e controles para criadores.",
    ogDescription: "Uma experiência de companhia com IA, personagens, voz, memória e integrações para criadores.",
    "nav.features": "Recursos",
    "nav.providers": "Provedores",
    "nav.pricing": "Preços",
    "nav.download": "Baixar",
    "nav.lifetimeAccess": "Obtenha acesso vitalício",
    "nav.blog": "Blog",
    "nav.primaryAria": "Navegação principal",
    "nav.homeAria": "Início do NekoGPT",
    "nav.menuAria": "Abrir menu",
    "nav.languageAria": "Selecionar idioma",
    "status.yes": "sim",
    "status.partial": "parcial",
    "status.no": "não",
    "hero.badge": "Companheira IA VTuber grátis para VTubers, artistas Live2D e você",
    "hero.title": 'Transforme seu modelo Live2D em <span class="gradient-text gradient-blue">Siri</span>, seu Pookie <span class="text-nowrap">com <span class="gradient-text gradient-pink">personalidade</span></span>',
    "hero.lede": "<strong>Instalação em um clique.</strong>",
    "hero.personaLabel": "Persona:",
    "hero.note": "Modelos Live2D grátis incluídos - Sem conta obrigatória - Funciona offline",
    "hero.microCopy": "Mova o mouse para interagir",
    "hero.loading": "Carregando Live2D",
    "hero.live2dAria": "Prévia interativa Live2D do NekoGPT",
    "hero.scrollAria": "Ir para recursos",
    "download.windowsTitle": "Windows v1.0.177",
    "download.windowsSub": "Windows 10+",
    "download.macTitle": "macOS v1.0.177",
    "download.macSub": "macOS 12+",
    "download.linuxTitle": "Linux v1.0.176",
    "download.linuxSub": "AppImage (limitado)",
    "features.heading": "Tudo o que você precisa para sua <span>companhia IA</span>",
    "features.subheading": "Com tecnologia de IA de ponta e belíssimas animações Live2D. Personalize cada detalhe para combinar com seu estilo.",
    "features.licenseTitle": "Personagens Live2D",
    "features.licenseText": "Lindas personagens 2D totalmente animadas, com sincronização labial em tempo real e emoções expressivas. Modelos gratuitos incluídos — traga os seus ou use os nossos.",
    "features.safeTag": "Feliz",
    "features.localTag": "Triste",
    "features.signedTag": "Surpresa",
    "features.voiceTitle": "Conversa por voz imersiva",
    "features.voiceText": "Fale com sua companhia em tempo real usando seu microfone.",
    "features.personaTitle": "Sistema de persona",
    "features.personaText": "Comportamento, lucidez, criatividade, temperamento e memória sobre você. Você terá a melhor imersão com sua companheira.",
    "features.storageTitle": "Privacidade em primeiro lugar",
    "features.storageText": "Funciona completamente offline. Suas conversas permanecem no seu dispositivo.",
    "features.encryptedTag": "token criptografado",
    "features.visionTitle": "Sua companheira com visão",
    "features.visionText": "Dê visão à sua companheira em qualquer monitor ou aplicativo específico. Você decide.",
    "features.integrationsPanelTitle": "Integrações poderosas",
    "features.integrationsPanelText": "Conecte-se ao Twitch, Discord, Obsidian, Google e muito mais. Sua assistente de IA funciona onde você estiver.",
    "features.integrationTwitchTitle": "Twitch",
    "features.integrationTwitchText": "Interações de live",
    "features.integrationDiscordTitle": "Discord",
    "features.integrationDiscordText": "Converse nos seus servidores",
    "features.integrationObsidianTitle": "Obsidian",
    "features.integrationObsidianText": "Acesse suas anotações",
    "features.integrationGoogleTitle": "Google",
    "features.integrationGoogleText": "Calendário e Drive",
    "integrations.heading": "Conecte seu <span>mundo</span>",
    "integrations.subheading": "Sua companhia IA integra com Discord, apps desktop e suas ferramentas favoritas de produtividade.",
    "integrations.mapAria": "Mapa de integrações do NekoGPT",
    "integrations.desktop": "Área de trabalho",
    "integrations.voiceTitle": "Voz em qualquer plataforma",
    "integrations.voiceText": "Converse com sua IA por canais de voz do Discord ou pelo app desktop.",
    "integrations.knowledgeTitle": "Acesse seu conhecimento",
    "integrations.knowledgeText": "Conecte Obsidian e Notion para dar contexto das suas notas para a IA.",
    "integrations.emailTitle": "Integração com email",
    "integrations.emailText": "Leia e rascunhe emails com a ajuda da sua assistente IA.",
    "providers.heading": "Todos os seus <span>provedores de IA favoritos</span>",
    "providers.subheading": "Preparado para APIs na nuvem, modelos locais e seu próprio backend compatível com OpenAI.",
    "providers.openaiText": "Modelos GPT e ferramentas compatíveis.",
    "providers.claudeText": "Fluxos fortes de raciocínio e escrita.",
    "providers.geminiText": "Caminho de suporte para modelos Google.",
    "providers.lmText": "Rode modelos locais na sua máquina.",
    "providers.ollamaText": "Fluxos com servidor local de modelos.",
    "providers.choiceTitle": "Sua escolha",
    "providers.choiceText": "Qualquer API compatível com OpenAI",
    "install.heading": "Comece em <span>segundos</span>",
    "install.subheading": "Instalação com um clique. Não é necessário criar uma conta. Comece a conversar imediatamente.",
    "install.platformWindows": "Windows",
    "install.platformMac": "macOS",
    "install.platformLinux": "Linux",
    "install.planned": "planejado",
    "install.terminalTitle": "Terminal",
    "install.windows.terminalDownload": "<span>$</span> https://inobushi3.itch.io/nekogptai-virtual-companion",
    "install.windows.terminalCommand": "→ Nekogpt-windows-Setup.exe",
    "install.windows.terminalHint": "✓ Clique duas vezes para instalar",
    "install.mac.terminalDownload": "<span>$</span> https://inobushi3.itch.io/nekogptai-virtual-companion",
    "install.mac.terminalCommand": "→ Nekogpt-macOS-planned.dmg",
    "install.mac.terminalHint": "✓ macOS planejado",
    "install.linux.terminalDownload": "<span>$</span> https://inobushi3.itch.io/nekogptai-virtual-companion",
    "install.linux.terminalCommand": "→ Nekogpt-linux-planned.AppImage",
    "install.linux.terminalHint": "✓ Linux planejado",
    "install.downloadButton": "Baixar",
    "install.plannedButton": "planejado",
    "install.stepDownloadTitle": "Download",
    "install.stepDownloadText": "Obtenha o instalador para sua plataforma",
    "install.stepInstallTitle": "Instalar",
    "install.stepInstallText": "Execute o instalador e siga as instruções",
    "install.stepChatTitle": "Bater papo",
    "install.stepChatText": "Comece a conversar com seu companheiro",
    "install.requirementsTitle": "Requisitos do sistema",
    "install.minimum": "Mínimo",
    "install.recommended": "Recomendado",
    "install.license": "Licença",
    "install.onlineOnce": "Online uma vez",
    "install.offlineDays": "30 dias",
    "install.gpuRequirement": "Opcional • 8 GB VRAM",
    "install.requirementsNote": "Usar provedores de IA na nuvem reduz o uso local de RAM. GPU só é necessária para inferência de modelo local.",
    "pricing.heading": "Acesso simples e <span>transparente</span>",
    "pricing.subheading": "Essa é apenas uma forma de apoiar nosso projeto, e podermos trazer coisas infinitamente melhores a cada atualização.",
    "pricing.freeTitle": "Free",
    "pricing.freePrice": "$0",
    "pricing.freeSub": "Limitado",
    "pricing.freeItem1": "Modelos AI locais e da Nuvem",
    "pricing.freeItem2": "Um modelo Live2D",
    "pricing.freeItem3": "Interação por voz",
    "pricing.freeItem4": "Visão imersiva",
    "pricing.freeItem5": "Predefinições básicas de personalidade",
    "pricing.freeItem6": "Não é necessário criar uma conta.",
    "pricing.freeButton": "Baixe gratuitamente",
    "pricing.itchTitle": "NekoGPT vitalício",
    "pricing.itchSub": "Tudo o que você precisa para começar",
    "pricing.current": "$ 9.99 <span class=\"old-price\">$15</span>",
    "pricing.itchItem1": "Modelos locais e da Nuvem",
    "pricing.itchItem2": "Chaves de API compatíveis com OpenAI",
    "pricing.itchItem3": "Vários modelos Live2D gratuitos",
    "pricing.itchItem4": "Animações de personagens Live2D",
    "pricing.itchItem5": "Interação por voz",
    "pricing.itchItem6": "Predefinições básicas de personalidade",
    "pricing.itchItem7": "Não é necessário criar uma conta.",
    "pricing.itchItem8": "Visão imersiva",
    "pricing.itchItem9": "Área especial para programação",
    "pricing.itchItem10": "Vote em novos designs de personagens",
    "pricing.itchItem11": "Integração com Discord e WhatsApp",
    "pricing.openItch": "Comprar agora",
    "pricing.premiumBadge": "Em breve",
    "pricing.premiumTitle": "Premium",
    "pricing.premiumPrice": "$25<span>/mês</span>",
    "pricing.premiumSub": "Para usuários avançados e VTubers",
    "pricing.premiumItem1": "Acesso ao nosso próprio provedor de IA ilimitado",
    "pricing.premiumItem2": "Tudo do NekoGPT vitalício",
    "pricing.premiumItem3": "NekoGPT direto no seu terminal",
    "pricing.premiumItem4": "Integração com Telegram, Obsidian e Notion",
    "pricing.premiumItem5": "Personalização avançada de personalidade",
    "pricing.premiumItem6": "Suporte prioritário",
    "pricing.premiumItem7": "Acesso antecipado a novos recursos",
    "pricing.premiumItem8": "Vote em novos designs de personagens",
    "pricing.premiumButton": "Em breve",
    "pricing.creatorTitle": "Criador",
    "pricing.creatorSub": "Plano futuro do site",
    "pricing.soon": "Em breve",
    "pricing.creatorItem1": "Páginas premium",
    "pricing.creatorItem2": "Painel de conta hospedado",
    "pricing.creatorItem3": "Gerenciamento de downloads",
    "pricing.creatorItem4": "Suporte e notas de lançamento",
    "pricing.creatorItem5": "Seções prontas para comunidade",
    "pricing.comingSoon": "Em breve",
    "compare.heading": "NekoGPT x <span>Outras companhias de desktop</span>",
    "compare.subheading": "Como o NekoGPT se compara a outras companhias de IA? Veja uma comparação lado a lado.",
    "compare.feature": "Recurso",
    "compare.other": "Outras companhias",
    "compare.team": "Equipe",
    "compare.teamNeko": "Equipe dedicada",
    "compare.teamOther": "Comunidade de código aberto",
    "compare.source": "Código fonte",
    "compare.sourceNeko": "Código fechado",
    "compare.sourceOther": "Código aberto",
    "compare.support": "Suporte",
    "compare.supportNeko": "Suporte rápido e direto",
    "compare.supportOther": "Apenas comunidade",
    "compare.installProcess": "Processo de instalação",
    "compare.installNeko": "Baixar e executar",
    "compare.installOther": "Pacotes Python, configuração manual",
    "compare.freeTier": "Plano gratuito",
    "compare.localLlms": "LLMs locais",
    "compare.localTts": "TTS local",
    "compare.cloud": "LLMs e TTS na nuvem (pago)",
    "compare.voiceChat": "Chat de voz completo",
    "compare.live2d": "Personagens Live2D",
    "compare.live2dNeko": "Integrado, sincronia labial e emoções",
    "compare.desktopApp": "App desktop",
    "compare.runsOffline": "Funciona offline",
    "compare.bringProvider": "Traga seu próprio provedor",
    "compare.bringProviderNeko": "OpenAI, Anthropic, Featherless,<br />LM Studio, qualquer compatível",
    "compare.integrations": "Integrações",
    "compare.integrationsNeko": "Twitch, Discord, Obsidian,<br />Google",
    "compare.customPersonas": "Personas personalizadas",
    "compare.vision": "Visão",
    "compare.visionNeko": "Vê sua tela, consegue ler e<br />reagir ao que você faz",
    "compare.adaptiveMemory": "Memória adaptativa",
    "compare.adaptiveMemoryNeko": "Aprende quem você é e se adapta<br />com o tempo",
    "compare.privacy": "Privacidade",
    "compare.privacyNeko": "Totalmente local, seus dados ficam<br />no dispositivo",
    "compare.privacyOther": "Depende da configuração",
    "compare.platformSupport": "Suporte de plataforma",
    "compare.platformSupportNeko": "Windows, macOS e Linux<br />(limitado)",
    "compare.platformSupportOther": "Apenas macOS (comandos<br />especiais), Windows e Linux<br />quebrados",
    "compare.limited": "Limitado",
    "compare.unknown": "Desconhecido",
    "footer.description": "Assistente virtual de IA gratuito para VTubers e Live2D com bate-papo por voz e memória adaptativa. Feito para criadores de conteúdo, streamers e VTubers.",
    "footer.product": "Produto",
    "footer.community": "Comunidade",
    "footer.release": "Lançamento",
    "footer.licenseWorker": "Servidor de licença",
    "footer.compare": "Comparar",
    "footer.legal": "Jurídico",
    "footer.privacy": "Política de privacidade",
    "footer.terms": "Termos de serviço",
    "footer.rights": "2026 NekoGPT. Todos os direitos reservados.",
    "footer.deployment": "Feito com <span class=\"footer-heart\">♡</span>",
  },
  en: {
    metaTitle: "NekoGPT - AI Companion Desktop App",
    metaDescription: "NekoGPT is an AI companion desktop app with Live2D-style characters, voice chat, memory, and creator-friendly controls.",
    ogDescription: "A polished AI companion experience with characters, voice, memory, and integrations for creators.",
    "nav.features": "Features",
    "nav.providers": "Providers",
    "nav.pricing": "Pricing",
    "nav.download": "Download",
    "nav.lifetimeAccess": "Get lifetime access",
    "nav.blog": "Blog",
    "nav.primaryAria": "Primary navigation",
    "nav.homeAria": "NekoGPT home",
    "nav.menuAria": "Toggle menu",
    "nav.languageAria": "Select language",
    "status.yes": "yes",
    "status.partial": "partial",
    "status.no": "no",
    "hero.badge": "Free AI VTuber companion for VTubers, Live2D artists, and you",
    "hero.title": 'Turn your Live2D model into <span class="gradient-text gradient-blue">Siri</span>, your Pookie with <span class="text-nowrap">a <span class="gradient-text gradient-pink">personality</span></span>',
    "hero.lede": "<strong>One-click install.</strong>",
    "hero.personaLabel": "Persona:",
    "hero.note": "Free Live2D models included - No account required - Runs offline",
    "hero.microCopy": "Move your mouse to interact",
    "hero.loading": "Loading Live2D",
    "hero.live2dAria": "Interactive NekoGPT Live2D preview",
    "hero.scrollAria": "Scroll to features",
    "download.windowsTitle": "Windows v1.0.177",
    "download.windowsSub": "Windows 10+",
    "download.macTitle": "macOS v1.0.177",
    "download.macSub": "macOS 12+",
    "download.linuxTitle": "Linux v1.0.176",
    "download.linuxSub": "AppImage (limited)",
    "features.heading": "Everything you need for your <span>AI companion</span>",
    "features.subheading": "Powered by cutting-edge AI and beautiful Live2D animations. Customize every detail to match your style.",
    "features.licenseTitle": "Live2D Characters",
    "features.licenseText": "Beautiful fully animated 2D characters with real-time lip sync and expressive emotions. Free models included — bring your own or use ours.",
    "features.safeTag": "Happy",
    "features.localTag": "Sad",
    "features.signedTag": "Surprised",
    "features.voiceTitle": "Immersive voice chat",
    "features.voiceText": "Talk to your companion in real time using your microphone.",
    "features.personaTitle": "Personality system",
    "features.personaText": "Behavior, lucidity, creativity, temperament, and memory about you. You will get the best immersion with your companion.",
    "features.storageTitle": "Privacy first",
    "features.storageText": "Runs completely offline. Your conversations stay on your device.",
    "features.encryptedTag": "encrypted token",
    "features.visionTitle": "Your companion with vision",
    "features.visionText": "Give your companion vision on whichever monitor or specific app you want, you decide.",
    "features.integrationsPanelTitle": "Powerful integrations",
    "features.integrationsPanelText": "Connect to Twitch, Discord, Obsidian, Google, and much more. Your AI assistant works wherever you are.",
    "features.integrationTwitchTitle": "Twitch",
    "features.integrationTwitchText": "Live interactions",
    "features.integrationDiscordTitle": "Discord",
    "features.integrationDiscordText": "Chat in your servers",
    "features.integrationObsidianTitle": "Obsidian",
    "features.integrationObsidianText": "Access your notes",
    "features.integrationGoogleTitle": "Google",
    "features.integrationGoogleText": "Calendar and Drive",
    "integrations.heading": "Connect your <span>world</span>",
    "integrations.subheading": "Your AI companion integrates with Discord, desktop apps, and your favorite productivity tools.",
    "integrations.mapAria": "NekoGPT integration map",
    "integrations.desktop": "Desktop",
    "integrations.voiceTitle": "Voice on Any Platform",
    "integrations.voiceText": "Talk to your AI through Discord voice channels or your desktop app.",
    "integrations.knowledgeTitle": "Access Your Knowledge",
    "integrations.knowledgeText": "Connect to Obsidian and Notion to give your AI context from your notes.",
    "integrations.emailTitle": "Email Integration",
    "integrations.emailText": "Read and draft emails with your AI assistant's help.",
    "providers.heading": "All your <span>favorite AI providers</span>",
    "providers.subheading": "Prepared for cloud APIs, local models, and your own OpenAI-compatible backend.",
    "providers.openaiText": "GPT models and compatible tools.",
    "providers.claudeText": "Strong reasoning and writing flows.",
    "providers.geminiText": "Google model support path.",
    "providers.lmText": "Run local models on your machine.",
    "providers.ollamaText": "Local model server workflows.",
    "providers.choiceTitle": "Your choice",
    "providers.choiceText": "Any OpenAI-compatible API",
    "install.heading": "Get started in <span>seconds</span>",
    "install.subheading": "One-click installation. No account required. Start chatting immediately.",
    "install.platformWindows": "Windows",
    "install.platformMac": "macOS",
    "install.platformLinux": "Linux",
    "install.planned": "planned",
    "install.terminalTitle": "Terminal",
    "install.windows.terminalDownload": "<span>$</span> https://inobushi3.itch.io/nekogptai-virtual-companion",
    "install.windows.terminalCommand": "→ Nekogpt-windows-Setup.exe",
    "install.windows.terminalHint": "✓ Double-click to install",
    "install.mac.terminalDownload": "<span>$</span> https://inobushi3.itch.io/nekogptai-virtual-companion",
    "install.mac.terminalCommand": "→ Nekogpt-macOS-planned.dmg",
    "install.mac.terminalHint": "✓ macOS planned",
    "install.linux.terminalDownload": "<span>$</span> https://inobushi3.itch.io/nekogptai-virtual-companion",
    "install.linux.terminalCommand": "→ Nekogpt-linux-planned.AppImage",
    "install.linux.terminalHint": "✓ Linux planned",
    "install.downloadButton": "Download",
    "install.plannedButton": "planned",
    "install.stepDownloadTitle": "Download",
    "install.stepDownloadText": "Get the installer for your platform",
    "install.stepInstallTitle": "Install",
    "install.stepInstallText": "Run the installer and follow prompts",
    "install.stepChatTitle": "Chat",
    "install.stepChatText": "Start talking to your companion",
    "install.requirementsTitle": "System requirements",
    "install.minimum": "Minimum",
    "install.recommended": "Recommended",
    "install.license": "License",
    "install.onlineOnce": "Online once",
    "install.offlineDays": "30 days",
    "install.gpuRequirement": "Optional • 8 GB VRAM",
    "install.requirementsNote": "Using cloud AI providers reduces local RAM usage. GPU is only needed for local model inference.",
    "pricing.heading": "Simple, <span>transparent</span> access",
    "pricing.subheading": "This is simply a way to support our project so we can bring infinitely better things with every update.",
    "pricing.freeTitle": "Free",
    "pricing.freePrice": "$0",
    "pricing.freeSub": "Limited",
    "pricing.freeItem1": "Local and cloud AI models",
    "pricing.freeItem2": "One Live2D model",
    "pricing.freeItem3": "Voice interaction",
    "pricing.freeItem4": "Immersive vision",
    "pricing.freeItem5": "Basic personality presets",
    "pricing.freeItem6": "No account required",
    "pricing.freeButton": "Download Free",
    "pricing.itchTitle": "NekoGPT lifetime",
    "pricing.itchSub": "Everything you need to get started",
    "pricing.current": "$9.99 <span class=\"old-price\">$15</span>",
    "pricing.itchItem1": "Local and cloud models",
    "pricing.itchItem2": "OpenAI-compatible API keys",
    "pricing.itchItem3": "Several free Live2D models",
    "pricing.itchItem4": "Live2D character animations",
    "pricing.itchItem5": "Voice interaction",
    "pricing.itchItem6": "Basic personality presets",
    "pricing.itchItem7": "No account required.",
    "pricing.itchItem8": "Immersive vision",
    "pricing.itchItem9": "Special programming area",
    "pricing.itchItem10": "Vote on new character designs",
    "pricing.itchItem11": "Discord and WhatsApp integration",
    "pricing.openItch": "Buy now",
    "pricing.premiumBadge": "Coming Soon",
    "pricing.premiumTitle": "Premium",
    "pricing.premiumPrice": "$25<span>/month</span>",
    "pricing.premiumSub": "For power users and VTubers",
    "pricing.premiumItem1": "Access to our own unlimited AI provider",
    "pricing.premiumItem2": "Everything in NekoGPT lifetime",
    "pricing.premiumItem3": "NekoGPT directly in your terminal",
    "pricing.premiumItem4": "Telegram, Obsidian, and Notion integration",
    "pricing.premiumItem5": "Advanced personality customization",
    "pricing.premiumItem6": "Priority support",
    "pricing.premiumItem7": "Early access to new features",
    "pricing.premiumItem8": "Vote on new character designs",
    "pricing.premiumButton": "Coming Soon",
    "pricing.creatorTitle": "Creator",
    "pricing.creatorSub": "Future website tier",
    "pricing.soon": "Soon",
    "pricing.creatorItem1": "Premium landing pages",
    "pricing.creatorItem2": "Hosted account dashboard",
    "pricing.creatorItem3": "Download management",
    "pricing.creatorItem4": "Support and release notes",
    "pricing.creatorItem5": "Community-ready sections",
    "pricing.comingSoon": "Coming soon",
    "compare.heading": "NekoGPT vs <span>Other desktop companions</span>",
    "compare.subheading": "How does NekoGPT compare to other AI companions? Here's a side-by-side breakdown.",
    "compare.feature": "Feature",
    "compare.other": "Other companions",
    "compare.team": "Team",
    "compare.teamNeko": "Dedicated team",
    "compare.teamOther": "Open source community",
    "compare.source": "Source",
    "compare.sourceNeko": "Closed source",
    "compare.sourceOther": "Open source",
    "compare.support": "Support",
    "compare.supportNeko": "Fast, direct support",
    "compare.supportOther": "Community only",
    "compare.installProcess": "Install Process",
    "compare.installNeko": "Download & run",
    "compare.installOther": "Python packages, manual setup",
    "compare.freeTier": "Free Tier",
    "compare.localLlms": "Local LLMs",
    "compare.localTts": "Local TTS",
    "compare.cloud": "Cloud LLMs & TTS (Paid)",
    "compare.voiceChat": "Full Voice Chat",
    "compare.live2d": "Live2D Characters",
    "compare.live2dNeko": "Built-in, lip sync & emotions",
    "compare.desktopApp": "Desktop App",
    "compare.runsOffline": "Runs Offline",
    "compare.bringProvider": "Bring Your Own Provider",
    "compare.bringProviderNeko": "OpenAI, Anthropic, Featherless,<br />LM Studio, any compatible",
    "compare.integrations": "Integrations",
    "compare.integrationsNeko": "Twitch, Discord, Obsidian,<br />Google",
    "compare.customPersonas": "Custom Personas",
    "compare.vision": "Vision",
    "compare.visionNeko": "Sees your screen, can read &amp;<br />react to what you do",
    "compare.adaptiveMemory": "Adaptive Memory",
    "compare.adaptiveMemoryNeko": "Learns who you are, adapts over<br />time",
    "compare.privacy": "Privacy",
    "compare.privacyNeko": "Fully local, your data stays on<br />device",
    "compare.privacyOther": "Depends on setup",
    "compare.platformSupport": "Platform Support",
    "compare.platformSupportNeko": "Windows, macOS &amp; Linux<br />(limited)",
    "compare.platformSupportOther": "macOS only (special<br />commands), Windows &amp; Linux<br />broken",
    "compare.limited": "Limited",
    "compare.unknown": "Unknown",
    "footer.description": "Free AI virtual assistant for VTubers and Live2D with voice chat and adaptive memory. Made for content creators, streamers, and VTubers.",
    "footer.product": "Product",
    "footer.community": "Community",
    "footer.release": "Release",
    "footer.licenseWorker": "License worker",
    "footer.compare": "Compare",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "2026 NekoGPT. All rights reserved.",
    "footer.deployment": "Made with <span class=\"footer-heart\">♡</span>",
  },
};

translations.es = {
  ...translations.en,
  metaTitle: "NekoGPT - App de escritorio con compañera IA",
  metaDescription: "NekoGPT es una app de escritorio con compañera IA, personajes Live2D, voz, memoria y controles para creadores.",
  ogDescription: "Una experiencia de compañera IA con personajes, voz, memoria e integraciones para creadores.",
  "nav.features": "Funciones",
  "nav.providers": "Proveedores",
  "nav.pricing": "Precios",
  "nav.download": "Descargar",
  "nav.lifetimeAccess": "Obtén acceso de por vida",
  "nav.blog": "Blog",
  "nav.primaryAria": "Navegación principal",
  "nav.homeAria": "Inicio de NekoGPT",
  "nav.menuAria": "Abrir menú",
  "nav.languageAria": "Seleccionar idioma",
  "status.yes": "sí",
  "status.partial": "parcial",
  "status.no": "no",
  "hero.badge": "Compañera IA VTuber gratis para VTubers, artistas Live2D y para ti",
  "hero.title": 'Convierte tu modelo Live2D en <span class="gradient-text gradient-blue">Siri</span>, tu Pookie <span class="text-nowrap">con <span class="gradient-text gradient-pink">personalidad</span></span>',
  "hero.lede": "<strong>Instalación con un clic.</strong>",
  "hero.personaLabel": "Persona:",
  "hero.note": "Modelos Live2D gratis incluidos - Sin cuenta obligatoria - Funciona sin conexión",
  "hero.microCopy": "Mueve el mouse para interactuar",
  "hero.loading": "Cargando Live2D",
  "hero.live2dAria": "Vista previa interactiva Live2D de NekoGPT",
  "hero.scrollAria": "Ir a funciones",
  "features.heading": "Todo lo que necesitas para tu <span>compañera IA</span>",
  "features.subheading": "Con IA de vanguardia y hermosas animaciones Live2D. Personaliza cada detalle para que combine con tu estilo.",
  "features.licenseTitle": "Personajes Live2D",
  "features.licenseText": "Hermosos personajes 2D totalmente animados, con sincronización labial en tiempo real y emociones expresivas. Modelos gratuitos incluidos: trae los tuyos o usa los nuestros.",
  "features.safeTag": "Feliz",
  "features.localTag": "Triste",
  "features.signedTag": "Sorpresa",
  "features.voiceTitle": "Conversación de voz inmersiva",
  "features.voiceText": "Habla con tu compañera en tiempo real usando tu micrófono.",
  "features.personaTitle": "Sistema de persona",
  "features.personaText": "Comportamiento, lucidez, creatividad, temperamento y memoria sobre ti. Tendrás una inmersión mucho mejor con tu compañera.",
  "features.storageTitle": "Privacidad primero",
  "features.storageText": "Funciona completamente sin conexión. Tus conversaciones permanecen en tu dispositivo.",
  "features.encryptedTag": "token cifrado",
  "features.visionTitle": "Tu compañera con visión",
  "features.visionText": "Dale visión a tu compañera en cualquier monitor o aplicación específica. Tú decides.",
  "features.integrationsPanelTitle": "Integraciones poderosas",
  "features.integrationsPanelText": "Conéctate a Twitch, Discord, Obsidian, Google y mucho más. Tu asistente de IA funciona donde estés.",
  "features.integrationTwitchText": "Interacciones en directo",
  "features.integrationDiscordText": "Conversa en tus servidores",
  "features.integrationObsidianText": "Accede a tus notas",
  "features.integrationGoogleText": "Calendario y Drive",
  "integrations.heading": "Conecta tu <span>mundo</span>",
  "integrations.subheading": "Tu compañera IA se integra con Discord, apps de escritorio y tus herramientas de productividad favoritas.",
  "integrations.mapAria": "Mapa de integraciones de NekoGPT",
  "integrations.desktop": "Escritorio",
  "integrations.voiceTitle": "Voz en cualquier plataforma",
  "integrations.voiceText": "Habla con tu IA por canales de voz de Discord o desde la app de escritorio.",
  "integrations.knowledgeTitle": "Accede a tu conocimiento",
  "integrations.knowledgeText": "Conecta Obsidian y Notion para darle contexto de tus notas a la IA.",
  "integrations.emailTitle": "Integración con correo",
  "integrations.emailText": "Lee y redacta correos con ayuda de tu asistente IA.",
  "providers.heading": "Todos tus <span>proveedores de IA favoritos</span>",
  "providers.subheading": "Preparado para APIs en la nube, modelos locales y tu propio backend compatible con OpenAI.",
  "providers.openaiText": "Modelos GPT y herramientas compatibles.",
  "providers.claudeText": "Flujos sólidos de razonamiento y escritura.",
  "providers.geminiText": "Ruta de soporte para modelos de Google.",
  "providers.lmText": "Ejecuta modelos locales en tu máquina.",
  "providers.ollamaText": "Flujos con servidor local de modelos.",
  "providers.choiceTitle": "Tu elección",
  "providers.choiceText": "Cualquier API compatible con OpenAI",
  "install.heading": "Empieza en <span>segundos</span>",
  "install.subheading": "Instalación con un clic. No necesitas crear una cuenta. Empieza a conversar inmediatamente.",
  "install.planned": "planeado",
  "install.windows.terminalHint": "✓ Haz doble clic para instalar",
  "install.mac.terminalHint": "✓ macOS planeado",
  "install.linux.terminalHint": "✓ Linux planeado",
  "install.downloadButton": "Descargar",
  "install.plannedButton": "planeado",
  "install.stepDownloadText": "Obtén el instalador para tu plataforma",
  "install.stepInstallTitle": "Instalar",
  "install.stepInstallText": "Ejecuta el instalador y sigue las instrucciones",
  "install.stepChatTitle": "Conversar",
  "install.stepChatText": "Empieza a hablar con tu compañera",
  "install.requirementsTitle": "Requisitos del sistema",
  "install.minimum": "Mínimo",
  "install.recommended": "Recomendado",
  "install.gpuRequirement": "Opcional • 8 GB VRAM",
  "install.requirementsNote": "Usar proveedores de IA en la nube reduce el uso local de RAM. La GPU solo es necesaria para inferencia de modelos locales.",
  "pricing.heading": "Acceso simple y <span>transparente</span>",
  "pricing.subheading": "Esta es una forma de apoyar nuestro proyecto para traer mejoras mucho mejores en cada actualización.",
  "pricing.freeTitle": "Free",
  "pricing.freePrice": "$0",
  "pricing.freeSub": "Limitado",
  "pricing.freeItem1": "Modelos de IA locales y en la nube",
  "pricing.freeItem2": "Un modelo Live2D",
  "pricing.freeItem3": "Interacción por voz",
  "pricing.freeItem4": "Visión inmersiva",
  "pricing.freeItem5": "Preajustes básicos de personalidad",
  "pricing.freeItem6": "No necesitas crear una cuenta",
  "pricing.freeButton": "Descargar gratis",
  "pricing.itchTitle": "NekoGPT de por vida",
  "pricing.itchItem1": "Modelos locales y en la nube",
  "pricing.itchItem2": "Claves de API compatibles con OpenAI",
  "pricing.itchItem3": "Varios modelos Live2D gratuitos",
  "pricing.itchItem4": "Animaciones de personajes Live2D",
  "pricing.itchItem5": "Interacción por voz",
  "pricing.itchItem6": "Preajustes básicos de personalidad",
  "pricing.itchItem7": "No necesitas crear una cuenta.",
  "pricing.itchItem8": "Visión inmersiva",
  "pricing.itchItem9": "Área especial para programación",
  "pricing.itchItem10": "Vota por nuevos diseños de personajes",
  "pricing.itchItem11": "Integración con Discord y WhatsApp",
  "pricing.openItch": "Comprar ahora",
  "pricing.premiumBadge": "Próximamente",
  "pricing.premiumSub": "Para usuarios avanzados y VTubers",
  "pricing.premiumItem1": "Acceso a nuestro propio proveedor de IA ilimitado",
  "pricing.premiumItem2": "Todo lo de NekoGPT de por vida",
  "pricing.premiumItem3": "NekoGPT directo en tu terminal",
  "pricing.premiumItem4": "Integración con Telegram, Obsidian y Notion",
  "pricing.premiumItem5": "Personalización avanzada de personalidad",
  "pricing.premiumItem6": "Soporte prioritario",
  "pricing.premiumItem7": "Acceso anticipado a nuevas funciones",
  "pricing.premiumItem8": "Vota por nuevos diseños de personajes",
  "pricing.premiumButton": "Próximamente",
  "compare.heading": "NekoGPT vs <span>otras compañeras de escritorio</span>",
  "compare.subheading": "¿Cómo se compara NekoGPT con otras compañeras de IA? Mira la comparación lado a lado.",
  "compare.feature": "Función",
  "compare.other": "Otras compañeras",
  "compare.team": "Equipo",
  "compare.teamNeko": "Equipo dedicado",
  "compare.teamOther": "Comunidad open source",
  "compare.source": "Código fuente",
  "compare.sourceNeko": "Código cerrado",
  "compare.sourceOther": "Open source",
  "compare.support": "Soporte",
  "compare.supportNeko": "Soporte rápido y directo",
  "compare.supportOther": "Solo comunidad",
  "compare.installProcess": "Proceso de instalación",
  "compare.installNeko": "Descargar y ejecutar",
  "compare.installOther": "Paquetes Python, configuración manual",
  "compare.freeTier": "Plan gratuito",
  "compare.localLlms": "LLMs locales",
  "compare.localTts": "TTS local",
  "compare.cloud": "LLMs y TTS en la nube (pago)",
  "compare.voiceChat": "Chat de voz completo",
  "compare.live2d": "Personajes Live2D",
  "compare.live2dNeko": "Integrado, lip sync y emociones",
  "compare.desktopApp": "App de escritorio",
  "compare.runsOffline": "Funciona sin conexión",
  "compare.bringProvider": "Trae tu propio proveedor",
  "compare.integrations": "Integraciones",
  "compare.customPersonas": "Personas personalizadas",
  "compare.vision": "Visión",
  "compare.visionNeko": "Ve tu pantalla, puede leer y<br />reaccionar a lo que haces",
  "compare.adaptiveMemory": "Memoria adaptativa",
  "compare.adaptiveMemoryNeko": "Aprende quién eres y se adapta<br />con el tiempo",
  "compare.privacy": "Privacidad",
  "compare.privacyNeko": "Totalmente local, tus datos se quedan<br />en el dispositivo",
  "compare.privacyOther": "Depende de la configuración",
  "compare.platformSupport": "Soporte de plataforma",
  "compare.platformSupportNeko": "Windows, macOS y Linux<br />(limitado)",
  "compare.limited": "Limitado",
  "compare.unknown": "Desconocido",
  "footer.description": "Asistente virtual de IA gratis para VTubers y Live2D con chat de voz y memoria adaptativa. Hecho para creadores de contenido, streamers y VTubers.",
  "footer.product": "Producto",
  "footer.community": "Comunidad",
  "footer.legal": "Legal",
  "footer.privacy": "Política de privacidad",
  "footer.terms": "Términos de servicio",
  "footer.rights": "2026 NekoGPT. Todos los derechos reservados.",
  "footer.deployment": "Hecho con <span class=\"footer-heart\">♡</span>",
};

translations.fr = {
  ...translations.en,
  metaTitle: "NekoGPT - App desktop avec compagne IA",
  metaDescription: "NekoGPT est une app desktop avec compagne IA, personnages Live2D, voix, mémoire et contrôles pour créateurs.",
  ogDescription: "Une expérience de compagne IA avec personnages, voix, mémoire et intégrations pour créateurs.",
  "nav.features": "Fonctionnalités",
  "nav.providers": "Fournisseurs",
  "nav.pricing": "Tarifs",
  "nav.download": "Télécharger",
  "nav.lifetimeAccess": "Obtenir l'accès à vie",
  "nav.blog": "Blog",
  "nav.primaryAria": "Navigation principale",
  "nav.homeAria": "Accueil NekoGPT",
  "nav.menuAria": "Ouvrir le menu",
  "nav.languageAria": "Choisir la langue",
  "status.yes": "oui",
  "status.partial": "partiel",
  "status.no": "non",
  "hero.badge": "Compagne IA VTuber gratuite pour VTubers, artistes Live2D et vous",
  "hero.title": 'Transformez votre modèle Live2D en <span class="gradient-text gradient-blue">Siri</span>, votre Pookie <span class="text-nowrap">avec une <span class="gradient-text gradient-pink">personnalité</span></span>',
  "hero.lede": "<strong>Installation en un clic.</strong>",
  "hero.personaLabel": "Persona :",
  "hero.note": "Modèles Live2D gratuits inclus - Aucun compte requis - Fonctionne hors ligne",
  "hero.microCopy": "Bougez la souris pour interagir",
  "hero.loading": "Chargement Live2D",
  "hero.live2dAria": "Aperçu Live2D interactif de NekoGPT",
  "hero.scrollAria": "Aller aux fonctionnalités",
  "features.heading": "Tout ce qu'il faut pour votre <span>compagne IA</span>",
  "features.subheading": "Avec une IA de pointe et de superbes animations Live2D. Personnalisez chaque détail selon votre style.",
  "features.licenseTitle": "Personnages Live2D",
  "features.licenseText": "De magnifiques personnages 2D entièrement animés, avec synchronisation labiale en temps réel et émotions expressives. Modèles gratuits inclus : importez les vôtres ou utilisez les nôtres.",
  "features.safeTag": "Heureuse",
  "features.localTag": "Triste",
  "features.signedTag": "Surprise",
  "features.voiceTitle": "Conversation vocale immersive",
  "features.voiceText": "Parlez avec votre compagne en temps réel avec votre micro.",
  "features.personaTitle": "Système de persona",
  "features.personaText": "Comportement, lucidité, créativité, tempérament et mémoire sur vous. Vous obtenez une immersion plus forte avec votre compagne.",
  "features.storageTitle": "Confidentialité d'abord",
  "features.storageText": "Fonctionne entièrement hors ligne. Vos conversations restent sur votre appareil.",
  "features.encryptedTag": "jeton chiffré",
  "features.visionTitle": "Votre compagne avec vision",
  "features.visionText": "Donnez la vision à votre compagne sur l'écran ou l'application de votre choix. Vous décidez.",
  "features.integrationsPanelTitle": "Intégrations puissantes",
  "features.integrationsPanelText": "Connectez Twitch, Discord, Obsidian, Google et bien plus. Votre assistante IA fonctionne où que vous soyez.",
  "features.integrationTwitchText": "Interactions live",
  "features.integrationDiscordText": "Discutez sur vos serveurs",
  "features.integrationObsidianText": "Accédez à vos notes",
  "features.integrationGoogleText": "Agenda et Drive",
  "integrations.heading": "Connectez votre <span>monde</span>",
  "integrations.subheading": "Votre compagne IA s'intègre à Discord, aux apps desktop et à vos outils de productivité préférés.",
  "integrations.mapAria": "Carte des intégrations NekoGPT",
  "integrations.desktop": "Bureau",
  "integrations.voiceTitle": "Voix sur toutes les plateformes",
  "integrations.voiceText": "Parlez à votre IA via les salons vocaux Discord ou l'app desktop.",
  "integrations.knowledgeTitle": "Accédez à vos connaissances",
  "integrations.knowledgeText": "Connectez Obsidian et Notion pour donner le contexte de vos notes à l'IA.",
  "integrations.emailTitle": "Intégration e-mail",
  "integrations.emailText": "Lisez et rédigez des e-mails avec l'aide de votre assistante IA.",
  "providers.heading": "Tous vos <span>fournisseurs IA favoris</span>",
  "providers.subheading": "Prêt pour les APIs cloud, les modèles locaux et votre backend compatible OpenAI.",
  "providers.openaiText": "Modèles GPT et outils compatibles.",
  "providers.claudeText": "Flux solides de raisonnement et d'écriture.",
  "providers.geminiText": "Chemin de support pour les modèles Google.",
  "providers.lmText": "Exécutez des modèles locaux sur votre machine.",
  "providers.ollamaText": "Flux avec serveur local de modèles.",
  "providers.choiceTitle": "Votre choix",
  "providers.choiceText": "Toute API compatible OpenAI",
  "install.heading": "Commencez en <span>quelques secondes</span>",
  "install.subheading": "Installation en un clic. Aucun compte requis. Commencez à discuter immédiatement.",
  "install.planned": "prévu",
  "install.windows.terminalHint": "✓ Double-cliquez pour installer",
  "install.mac.terminalHint": "✓ macOS prévu",
  "install.linux.terminalHint": "✓ Linux prévu",
  "install.downloadButton": "Télécharger",
  "install.plannedButton": "prévu",
  "install.stepDownloadText": "Obtenez l'installateur pour votre plateforme",
  "install.stepInstallTitle": "Installer",
  "install.stepInstallText": "Lancez l'installateur et suivez les instructions",
  "install.stepChatTitle": "Discuter",
  "install.stepChatText": "Commencez à parler avec votre compagne",
  "install.requirementsTitle": "Configuration requise",
  "install.minimum": "Minimum",
  "install.recommended": "Recommandé",
  "install.gpuRequirement": "Optionnel • 8 GB VRAM",
  "install.requirementsNote": "Utiliser des fournisseurs IA cloud réduit l'utilisation locale de RAM. Le GPU n'est nécessaire que pour l'inférence de modèles locaux.",
  "pricing.heading": "Accès simple et <span>transparent</span>",
  "pricing.subheading": "C'est une façon de soutenir notre projet afin d'apporter de meilleures nouveautés à chaque mise à jour.",
  "pricing.freeTitle": "Free",
  "pricing.freePrice": "$0",
  "pricing.freeSub": "Limité",
  "pricing.freeItem1": "Modèles IA locaux et cloud",
  "pricing.freeItem2": "Un modèle Live2D",
  "pricing.freeItem3": "Interaction vocale",
  "pricing.freeItem4": "Vision immersive",
  "pricing.freeItem5": "Préréglages de personnalité de base",
  "pricing.freeItem6": "Aucun compte requis",
  "pricing.freeButton": "Télécharger gratuitement",
  "pricing.itchTitle": "NekoGPT à vie",
  "pricing.itchItem1": "Modèles locaux et cloud",
  "pricing.itchItem2": "Clés API compatibles OpenAI",
  "pricing.itchItem3": "Plusieurs modèles Live2D gratuits",
  "pricing.itchItem4": "Animations de personnages Live2D",
  "pricing.itchItem5": "Interaction vocale",
  "pricing.itchItem6": "Préréglages de personnalité de base",
  "pricing.itchItem7": "Aucun compte requis.",
  "pricing.itchItem8": "Vision immersive",
  "pricing.itchItem9": "Espace spécial pour la programmation",
  "pricing.itchItem10": "Votez pour les prochains designs de personnages",
  "pricing.itchItem11": "Intégration Discord et WhatsApp",
  "pricing.openItch": "Acheter maintenant",
  "pricing.premiumBadge": "Bientôt",
  "pricing.premiumSub": "Pour utilisateurs avancés et VTubers",
  "pricing.premiumItem1": "Accès illimité à notre propre fournisseur IA",
  "pricing.premiumItem2": "Tout dans NekoGPT à vie",
  "pricing.premiumItem3": "NekoGPT directement dans votre terminal",
  "pricing.premiumItem4": "Intégration Telegram, Obsidian et Notion",
  "pricing.premiumItem5": "Personnalisation avancée de la personnalité",
  "pricing.premiumItem6": "Support prioritaire",
  "pricing.premiumItem7": "Accès anticipé aux nouvelles fonctionnalités",
  "pricing.premiumItem8": "Votez pour les prochains designs de personnages",
  "pricing.premiumButton": "Bientôt",
  "compare.heading": "NekoGPT vs <span>autres compagnes desktop</span>",
  "compare.subheading": "Comment NekoGPT se compare-t-il aux autres compagnes IA ? Voici une comparaison côte à côte.",
  "compare.feature": "Fonction",
  "compare.other": "Autres compagnes",
  "compare.team": "Équipe",
  "compare.teamNeko": "Équipe dédiée",
  "compare.teamOther": "Communauté open source",
  "compare.source": "Code source",
  "compare.sourceNeko": "Code fermé",
  "compare.sourceOther": "Open source",
  "compare.support": "Support",
  "compare.supportNeko": "Support rapide et direct",
  "compare.supportOther": "Communauté uniquement",
  "compare.installProcess": "Installation",
  "compare.installNeko": "Télécharger et lancer",
  "compare.installOther": "Paquets Python, configuration manuelle",
  "compare.freeTier": "Offre gratuite",
  "compare.localLlms": "LLMs locaux",
  "compare.localTts": "TTS local",
  "compare.cloud": "LLMs et TTS cloud (payant)",
  "compare.voiceChat": "Chat vocal complet",
  "compare.live2d": "Personnages Live2D",
  "compare.live2dNeko": "Intégré, lip sync et émotions",
  "compare.desktopApp": "App desktop",
  "compare.runsOffline": "Fonctionne hors ligne",
  "compare.bringProvider": "Apportez votre fournisseur",
  "compare.integrations": "Intégrations",
  "compare.customPersonas": "Personas personnalisées",
  "compare.vision": "Vision",
  "compare.visionNeko": "Voit votre écran, peut lire et<br />réagir à vos actions",
  "compare.adaptiveMemory": "Mémoire adaptative",
  "compare.adaptiveMemoryNeko": "Apprend qui vous êtes et s'adapte<br />avec le temps",
  "compare.privacy": "Confidentialité",
  "compare.privacyNeko": "Entièrement local, vos données restent<br />sur l'appareil",
  "compare.privacyOther": "Dépend de la configuration",
  "compare.platformSupport": "Support des plateformes",
  "compare.platformSupportNeko": "Windows, macOS et Linux<br />(limité)",
  "compare.limited": "Limité",
  "compare.unknown": "Inconnu",
  "footer.description": "Assistant virtuel IA gratuit pour VTubers et Live2D avec chat vocal et mémoire adaptative. Conçu pour créateurs de contenu, streamers et VTubers.",
  "footer.product": "Produit",
  "footer.community": "Communauté",
  "footer.legal": "Mentions légales",
  "footer.privacy": "Politique de confidentialité",
  "footer.terms": "Conditions d'utilisation",
  "footer.rights": "2026 NekoGPT. Tous droits réservés.",
  "footer.deployment": "Fait avec <span class=\"footer-heart\">♡</span>",
};

function readTranslation(key, language) {
  return translations[language]?.[key] ?? translations.en[key] ?? translations.pt[key] ?? "";
}

function setMetaContent(selector, content) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute("content", content);
  }
}

const installPlatforms = new Set(["windows", "mac", "linux"]);
const plannedInstallPlatforms = new Set(["mac", "linux"]);

function updateInstallPlatformContent(language = currentLanguage) {
  const platform = installPlatforms.has(activeInstallPlatform) ? activeInstallPlatform : "windows";
  const isPlanned = plannedInstallPlatforms.has(platform);

  installPlatformButtons.forEach((button) => {
    const isActive = button.dataset.installPlatform === platform;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (installTerminalDownload) {
    installTerminalDownload.innerHTML = readTranslation(`install.${platform}.terminalDownload`, language);
  }

  if (installTerminalCommand) {
    installTerminalCommand.textContent = readTranslation(`install.${platform}.terminalCommand`, language);
  }

  if (installTerminalHint) {
    installTerminalHint.textContent = readTranslation(`install.${platform}.terminalHint`, language);
  }

  if (installDownloadButton) {
    installDownloadButton.classList.toggle("planned", isPlanned);
    installDownloadButton.setAttribute("aria-disabled", String(isPlanned));
    if (isPlanned) {
      installDownloadButton.setAttribute("tabindex", "-1");
    } else {
      installDownloadButton.removeAttribute("tabindex");
    }
  }

  if (installDownloadLabel) {
    installDownloadLabel.textContent = readTranslation(isPlanned ? "install.plannedButton" : "install.downloadButton", language);
  }
}

function setLanguageMenuOpen(isOpen) {
  if (!languageSwitch || !languageToggle) return;

  languageSwitch.classList.toggle("open", isOpen);
  languageToggle.setAttribute("aria-expanded", String(isOpen));
}

function applyLanguage(language) {
  const activeLanguage = supportedLanguages.has(language) ? language : "pt";
  currentLanguage = activeLanguage;

  document.documentElement.lang = htmlLanguageMap[activeLanguage] ?? "en";
  document.title = readTranslation("metaTitle", activeLanguage);
  setMetaContent('meta[name="description"]', readTranslation("metaDescription", activeLanguage));
  setMetaContent('meta[property="og:title"]', readTranslation("metaTitle", activeLanguage));
  setMetaContent('meta[property="og:description"]', readTranslation("ogDescription", activeLanguage));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = readTranslation(element.dataset.i18n, activeLanguage);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = readTranslation(element.dataset.i18nHtml, activeLanguage);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", readTranslation(element.dataset.i18nAriaLabel, activeLanguage));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === activeLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-selected", String(isActive));
    if (isActive && languageCurrent) {
      languageCurrent.textContent = button.dataset.langLabel || activeLanguage.toUpperCase();
    }
  });

  updateInstallPlatformContent(activeLanguage);

  try {
    localStorage.setItem("nekogpt-language", activeLanguage);
  } catch {
    // Some embedded browsers can block localStorage; the switch still works for the current page.
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption);
    setLanguageMenuOpen(false);
    languageToggle?.focus();
  });
});

languageToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  setLanguageMenuOpen(!languageSwitch?.classList.contains("open"));
});

document.addEventListener("click", (event) => {
  if (!languageSwitch?.contains(event.target)) {
    setLanguageMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setLanguageMenuOpen(false);
    languageToggle?.focus();
  }
});

installPlatformButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeInstallPlatform = button.dataset.installPlatform;
    updateInstallPlatformContent(currentLanguage);
  });
});

if (installDownloadButton) {
  installDownloadButton.addEventListener("click", (event) => {
    if (plannedInstallPlatforms.has(activeInstallPlatform)) {
      event.preventDefault();
    }
  });
}

let savedLanguage = "pt";
try {
  savedLanguage = localStorage.getItem("nekogpt-language") || "pt";
} catch {
  savedLanguage = "pt";
}
applyLanguage(savedLanguage);

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

let particles = [];
let width = 0;
let height = 0;
let deviceRatio = 1;
let particleFrame = 0;
let particlesVisible = true;
let resizeFrame = 0;

function setPageState() {
  header.classList.toggle("scrolled", window.scrollY > 18);

  if (hero && canvas) {
    const heroHeight = Math.max(hero.offsetHeight, window.innerHeight);
    const fadeStart = heroHeight * 0.52;
    const fadeEnd = heroHeight * 0.92;
    const fadeProgress = clamp((window.scrollY - fadeStart) / (fadeEnd - fadeStart), 0, 1);
    const opacity = 0.95 * (1 - fadeProgress);
    canvas.style.opacity = opacity.toFixed(3);
    particlesVisible = fadeProgress <= 0.995;
    canvas.style.visibility = particlesVisible ? "visible" : "hidden";
    if (particlesVisible) {
      startParticles();
    } else {
      stopParticles(true);
    }
  }
}

window.addEventListener("scroll", setPageState, { passive: true });
setPageState();

window.addEventListener("pointermove", (event) => {
  mouse.targetX = event.clientX / Math.max(window.innerWidth, 1);
  mouse.targetY = event.clientY / Math.max(window.innerHeight, 1);
}, { passive: true });

window.addEventListener("pointerleave", () => {
  mouse.targetX = 0.5;
  mouse.targetY = 0.5;
});

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  navLinks.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
});

function typePersonality() {
  if (!personality) return;

  const currentText = personalities[personalityIndex];

  if (personalityDeleting) {
    personalityLetter -= 1;
  } else {
    personalityLetter += 1;
  }

  personality.textContent = currentText.slice(0, personalityLetter);

  if (!personalityDeleting && personalityLetter === currentText.length) {
    personalityDeleting = true;
    setTimeout(typePersonality, 1350);
    return;
  }

  if (personalityDeleting && personalityLetter === 0) {
    personalityDeleting = false;
    personalityIndex = (personalityIndex + 1) % personalities.length;
    setTimeout(typePersonality, 240);
    return;
  }

  setTimeout(typePersonality, personalityDeleting ? 34 : 68);
}

typePersonality();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -40px 0px" },
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 8, 5) * 70}ms`;
  revealObserver.observe(element);
});

if (finePointerQuery.matches && !reducedMotionQuery.matches) {
  document.querySelectorAll(".feature-card, .feature-integration-card, .provider-card, .price-card, .comparison-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });

  document.querySelectorAll("[data-tilt]").forEach((wrap) => {
    const card = wrap.querySelector(".showcase-card");
    wrap.addEventListener("pointermove", (event) => {
      const rect = wrap.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateY(${x * 7}deg) rotateX(${y * -5}deg)`;
    });
    wrap.addEventListener("pointerleave", () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  });
}

function resizeCanvas() {
  deviceRatio = Math.min(window.devicePixelRatio || 1, 1.5);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * deviceRatio);
  canvas.height = Math.floor(height * deviceRatio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0);

  const minCount = width < 700 ? 34 : 58;
  const maxCount = width < 700 ? 72 : 138;
  const count = reducedMotionQuery.matches ? 0 : clamp(Math.floor((width * height) / 18500), minCount, maxCount);
  particles = Array.from({ length: count }, () => createParticle(true));
}

function createParticle(randomY = false) {
  const palette = [
    "rgba(102, 112, 255,",
    "rgba(255, 114, 182,",
    "rgba(145, 91, 255,",
    "rgba(200, 75, 150,",
  ];

  return {
    x: Math.random() * width,
    y: randomY ? Math.random() * height : height + Math.random() * 80,
    radius: Math.pow(Math.random(), 1.35) * 5.2 + 1.15,
    vx: (Math.random() - 0.5) * 0.11,
    vy: -(Math.random() * 0.18 + 0.035),
    alpha: Math.random() * 0.45 + 0.16,
    depth: Math.random() * 1.7 + 0.35,
    pulse: Math.random() * Math.PI * 2,
    spin: Math.random() * Math.PI * 2,
    spinSpeed: (Math.random() - 0.5) * 0.004,
    color: palette[Math.floor(Math.random() * palette.length)],
  };
}

function drawCatParticle(particle, x, y, radius, alpha) {
  const hasEars = radius > 2.05;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(Math.sin(particle.spin) * 0.08);
  ctx.fillStyle = `${particle.color}${alpha})`;

  if (hasEars) {
    ctx.beginPath();
    ctx.moveTo(-radius * 0.88, -radius * 0.24);
    ctx.lineTo(-radius * 0.6, -radius * 1.34);
    ctx.lineTo(-radius * 0.08, -radius * 0.66);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(radius * 0.88, -radius * 0.24);
    ctx.lineTo(radius * 0.6, -radius * 1.34);
    ctx.lineTo(radius * 0.08, -radius * 0.66);
    ctx.closePath();
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawParticles() {
  particleFrame = 0;
  if (!shouldAnimateParticles()) return;

  ctx.clearRect(0, 0, width, height);
  ctx.globalCompositeOperation = "lighter";
  mouse.x += (mouse.targetX - mouse.x) * 0.055;
  mouse.y += (mouse.targetY - mouse.y) * 0.055;

  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.pulse += 0.015;
    particle.spin += particle.spinSpeed;

    if (particle.y < -20 || particle.x < -20 || particle.x > width + 20) {
      Object.assign(particle, createParticle(false));
    }

    const alpha = particle.alpha + Math.sin(particle.pulse) * 0.12;
    const radius = particle.radius + Math.sin(particle.pulse) * 0.45;
    const parallaxX = (mouse.x - 0.5) * particle.depth * 58;
    const parallaxY = (mouse.y - 0.5) * particle.depth * 38;

    drawCatParticle(
      particle,
      particle.x + parallaxX,
      particle.y + parallaxY,
      Math.max(radius, 0.5),
      Math.max(alpha, 0.08),
    );
  }

  particleFrame = requestAnimationFrame(drawParticles);
}

function shouldAnimateParticles() {
  return Boolean(canvas && ctx && particlesVisible && !document.hidden && !reducedMotionQuery.matches && particles.length);
}

function startParticles() {
  if (!particleFrame && shouldAnimateParticles()) {
    particleFrame = requestAnimationFrame(drawParticles);
  }
}

function stopParticles(clear = false) {
  if (particleFrame) {
    cancelAnimationFrame(particleFrame);
    particleFrame = 0;
  }

  if (clear) {
    ctx.clearRect(0, 0, width, height);
  }
}

resizeCanvas();
startParticles();
window.addEventListener("resize", () => {
  if (resizeFrame) cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => {
    resizeFrame = 0;
    resizeCanvas();
    setPageState();
  });
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopParticles();
  } else {
    startParticles();
  }
});

reducedMotionQuery.addEventListener?.("change", () => {
  resizeCanvas();
  setPageState();
});

const scriptLoadCache = new Map();

function loadScriptOnce(src) {
  if (scriptLoadCache.has(src)) return scriptLoadCache.get(src);

  const existingScript = document.querySelector(`script[src="${src}"]`);
  if (existingScript?.dataset.loaded === "true") return Promise.resolve();

  const promise = new Promise((resolve, reject) => {
    const script = existingScript || document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.loaded = script.dataset.loaded || "false";
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });

    if (!existingScript) {
      document.body.appendChild(script);
    }
  });

  scriptLoadCache.set(src, promise);
  return promise;
}

async function loadLive2DDependencies() {
  if (window.PIXI?.live2d?.Live2DModel) return;

  await loadScriptOnce("./assets/vendor/pixi/pixi.min.js");
  await loadScriptOnce("./assets/vendor/pixi/pixi-sound.js");
  await loadScriptOnce("./assets/vendor/live2d/live2dcubismcore.min.js");
  await loadScriptOnce("./assets/vendor/live2d/cubism.min.js");
}

function runWhenIdle(callback, timeout = 1200) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout });
    return;
  }

  window.setTimeout(callback, 180);
}

async function initHeroLive2D() {
  const stage = document.querySelector("[data-live2d-stage]");
  const loader = document.querySelector("[data-live2d-loader]");
  const live2dCanvas = document.querySelector("[data-live2d-canvas]");
  const fallback = document.querySelector("[data-live2d-fallback]");

  if (!stage || !live2dCanvas) {
    stage?.classList.add("failed");
    return;
  }

  try {
    await loadLive2DDependencies();
    const Live2DModel = window.PIXI?.live2d?.Live2DModel;
    if (!window.PIXI || !Live2DModel) {
      throw new Error("Live2D runtime unavailable");
    }

    if (window.PIXI.live2d.configureCubismSDK) {
      window.PIXI.live2d.configureCubismSDK({ logLevel: window.PIXI.live2d.LogLevel?.WARNING ?? 3 });
    }

    if (window.PIXI.settings && window.PIXI.SCALE_MODES?.LINEAR) {
      window.PIXI.settings.SCALE_MODE = window.PIXI.SCALE_MODES.LINEAR;
    }
    if (window.PIXI.TextureStyle?.defaultOptions) {
      window.PIXI.TextureStyle.defaultOptions.scaleMode = "linear";
    }

    const app = new window.PIXI.Application();
    await app.init({
      canvas: live2dCanvas,
      width: Math.max(stage.clientWidth, 1),
      height: Math.max(stage.clientHeight, 1),
      backgroundAlpha: 0,
      antialias: true,
      autoDensity: true,
      clearBeforeRender: true,
      resolution: Math.min(Math.max(window.devicePixelRatio || 1, 2), 3),
      preference: "webgl",
      powerPreference: "high-performance",
      eventMode: "none",
      eventFeatures: {
        move: false,
        globalMove: false,
        click: false,
        wheel: false,
      },
    });
    app.ticker.maxFPS = 60;
    app.ticker.minFPS = 30;
    if (app.renderer) {
      app.renderer.roundPixels = false;
      if (app.renderer.view?.style) app.renderer.view.style.imageRendering = "auto";
      if (app.renderer.canvas?.style) app.renderer.canvas.style.imageRendering = "auto";
    }
    app.stage.sortableChildren = true;

    const heroCharacters = [
      {
        src: "./assets/live2d/catgpt/catgpt.model3.json",
        label: "NekoGPT",
        scale: 2.08,
        anchorY: 0.35,
        offsetX: 0.12,
        offsetY: 0.04,
        zIndex: 2,
        idlePhase: 1.4,
        followX: 12,
        followY: 5,
        rotate: 0.045,
        lookOffsetY: -0.03,
      },
      {
        src: "./assets/live2d/cirno/cirno_live2d.model3.json",
        label: "Cirno",
        scale: 1.42,
        anchorY: 0.29,
        offsetX: -0.16,
        offsetY: -0.2,
        zIndex: 1,
        idlePhase: 2.6,
        followX: 28,
        followY: 8,
        rotate: 0.08,
        lookOffsetY: -0.04,
      },
    ];

    const loadCharacter = async (character) => {
      const model = await Live2DModel.from(character.src, {
        autoFocus: false,
        autoHitTest: false,
        autoUpdate: false,
        textureOptions: {
          lod: false,
          scaleMode: "linear",
          mipmap: true,
        },
      });

      model.eventMode = "none";
      model.interactive = false;
      model.interactiveChildren = false;
      model.anchor.set(0.5, character.anchorY);
      model.cullable = false;
      model.zIndex = character.zIndex;
      improveTextureQuality(model);
      enhanceModelFocus(model, character);
      app.stage.addChild(model);
      const entry = {
        model,
        character,
        baseScale: 1,
        baseX: 0,
        baseY: 0,
        focusDx: 0,
        focusDy: 0,
        visualX: 0,
        visualY: 0,
        visualRotation: 0,
      };
      model.internalModel?.on?.("beforeModelUpdate", () => applyLive2DPose(entry));
      return entry;
    };

    const loadCharacterWithRetry = async (character, attempts = 2) => {
      let lastError;
      for (let attempt = 1; attempt <= attempts; attempt += 1) {
        try {
          return await loadCharacter(character);
        } catch (error) {
          lastError = error;
          await new Promise((resolve) => window.setTimeout(resolve, 180 * attempt));
        }
      }

      throw lastError;
    };

    const loadedCharacters = [];
    const focusTarget = {
      x: Math.max(stage.clientWidth, 1) * 0.5,
      y: Math.max(stage.clientHeight, 1) * 0.45,
    };
    const focusCurrent = { ...focusTarget };

    function improveTextureQuality(model) {
      const textures = [
        ...(Array.isArray(model.textures) ? model.textures : []),
        ...(Array.isArray(model.internalModel?.textures) ? model.internalModel.textures : []),
      ];

      textures.forEach((texture) => {
        if (texture?.baseTexture) {
          if (window.PIXI.SCALE_MODES?.LINEAR !== undefined) {
            texture.baseTexture.scaleMode = window.PIXI.SCALE_MODES.LINEAR;
          }
          if (window.PIXI.MIPMAP_MODES?.ON !== undefined) {
            texture.baseTexture.mipmap = window.PIXI.MIPMAP_MODES.ON;
          }
        }

        if (texture?.source?.style) {
          texture.source.style.scaleMode = "linear";
          texture.source.autoGenerateMipmaps = true;
        }
      });
    }

    function setModelParameter(model, id, value, weight = 1) {
      const internalModel = model.internalModel;
      const coreModel = internalModel?.coreModel;
      if (!coreModel || model.destroyed) return;

      try {
        const parameterId = typeof internalModel.getIdSafe === "function" ? internalModel.getIdSafe(id) : id;
        let didSetParameter = false;

        if (typeof coreModel.getParameterIndex === "function" && typeof coreModel.setParameterValueByIndex === "function") {
          const candidates = parameterId === id ? [parameterId] : [parameterId, id];
          for (const candidate of candidates) {
            const index = coreModel.getParameterIndex(candidate);
            if (index >= 0) {
              coreModel.setParameterValueByIndex(index, value, weight);
              didSetParameter = true;
              break;
            }
          }
        }

        if (!didSetParameter && typeof coreModel.setParameterValueById === "function") {
          coreModel.setParameterValueById(parameterId, value, weight);
        }
      } catch {
        // Some community Live2D models omit standard tracking parameters.
      }
    }

    function setModelParameters(model, ids, value, weight = 1) {
      ids.forEach((id) => setModelParameter(model, id, value, weight));
    }

    function addModelParameter(model, id, value, weight = 1) {
      const internalModel = model.internalModel;
      const coreModel = internalModel?.coreModel;
      if (!coreModel || model.destroyed) return;

      try {
        const parameterId = typeof internalModel.getIdSafe === "function" ? internalModel.getIdSafe(id) : id;

        if (typeof coreModel.addParameterValueById === "function") {
          coreModel.addParameterValueById(parameterId, value, weight);
        }
      } catch {
        // Community models can omit optional physics/tracking parameters.
      }
    }

    function enhanceModelFocus(model, character) {
      const internalModel = model.internalModel;
      if (!internalModel || internalModel.__nekogptFocusEnhanced || typeof internalModel.updateFocus !== "function") return;

      const nativeUpdateFocus = internalModel.updateFocus.bind(internalModel);
      internalModel.__nekogptFocusEnhanced = true;
      internalModel.updateFocus = () => {
        nativeUpdateFocus();

        const focusX = internalModel.focusController?.x || 0;
        const focusY = internalModel.focusController?.y || 0;
        const idle = Math.sin(pulseTime * 0.5 + (character.idlePhase || 0));

        addModelParameter(model, "ParamAngleX", focusX * 8, 0.3);
        addModelParameter(model, "ParamAngleY", focusY * 6, 0.3);
        addModelParameter(model, "ParamAngleZ", -focusX * focusY * 10 + idle * 0.4, 0.3);
        addModelParameter(model, "ParamBodyAngleX", focusX * 6, 0.46);
        addModelParameter(model, "ParamBodyAngleY", -focusY * 5, 0.5);
        addModelParameter(model, "ParamBodyAngleZ", -focusX * 6 + idle * 0.55, 0.5);

        if (character.label === "NekoGPT") {
          addModelParameter(model, "Param169", focusX * 22, 0.52);
          addModelParameter(model, "Param252", focusY * 16, 0.52);
          addModelParameter(model, "Param253", -focusX * focusY * 18 + idle * 0.8, 0.46);
          addModelParameter(model, "Paramqq", -focusY * 7 + idle * 1.0, 0.42);
        }

        if (character.label === "Cirno") {
          addModelParameter(model, "ParamAngleX", focusX * 12, 0.48);
          addModelParameter(model, "ParamAngleY", focusY * 9, 0.48);
          addModelParameter(model, "ParamBodyAngleX", focusX * 8, 0.5);
          addModelParameter(model, "ParamBodyAngleZ", -focusX * 8 + idle * 0.7, 0.5);
        }
      };
    }

    function updateLive2DFocus(entry, rect) {
      const { model, character } = entry;
      const segmentWidth = rect.width / heroCharacters.length;
      const lookX = entry.baseX || model.x;
      const lookY = (entry.baseY || model.y) + rect.height * (character.lookOffsetY || 0);
      const dx = clamp((focusCurrent.x - lookX) / Math.max(segmentWidth * 0.2, 1), -1, 1);
      const dy = clamp((focusCurrent.y - lookY) / Math.max(rect.height * 0.22, 1), -1, 1);

      entry.focusDx += (dx - entry.focusDx) * 0.16;
      entry.focusDy += (dy - entry.focusDy) * 0.16;
      if (typeof model.focus === "function") {
        model.focus(focusCurrent.x, focusCurrent.y, false);
        return;
      }

      const focusController = model.internalModel?.focusController;
      if (focusController && typeof focusController.focus === "function") {
        focusController.focus(entry.focusDx, -entry.focusDy, false);
      }
    }

    function applyLive2DPose(entry) {
      const { model, character, focusDx: dx = 0, focusDy: dy = 0 } = entry;
      const phase = character.idlePhase || 0;
      const idle = Math.sin(pulseTime * 0.72 + phase);
      const idleSlow = Math.sin(pulseTime * 0.38 + phase);
      const headX = dx * 44 + idleSlow * 2;
      const headY = -dy * 36 + Math.cos(pulseTime * 0.34 + phase) * 1.2;
      const headZ = -dx * 9 + idle * 1;

      setModelParameters(model, ["ParamAngleX", "Param169", "Paramhbx"], headX);
      setModelParameters(model, ["ParamAngleY", "Param252", "Paramhby"], headY);
      setModelParameters(model, ["ParamAngleZ", "Param253"], headZ);
      setModelParameter(model, "ParamBodyAngleX", dx * 12 + idleSlow * 0.8);
      setModelParameter(model, "ParamBodyAngleY", -dy * 6);
      setModelParameter(model, "ParamBodyAngleZ", -dx * 4 + idle * 0.6);
      setModelParameter(model, "ParamEyeBallX", dx * 1.2);
      setModelParameter(model, "ParamEyeBallY", -dy * 1.15);

      setModelParameter(model, "ParamBreath", 0.5 + idleSlow * 0.5, 0.65);
      setModelParameters(model, ["ParamHairFront", "ParamHairSide", "ParamHairBack"], idle * 8, 0.35);

      if (character.label === "NekoGPT") {
        const earSway = dx * 7 + idle * 1.8;
        const armSway = dx * 5 + idleSlow * 2.2;
        const softLean = -dy * 6 + idleSlow * 1.1;

        setModelParameter(model, "Paramqq", softLean, 0.55);
        setModelParameters(model, ["Param20", "Param22"], earSway, 0.42);
        setModelParameters(model, ["Param21", "Param23"], -earSway * 0.72, 0.38);
        setModelParameters(model, ["Param24", "Param25"], earSway * 0.52, 0.32);
        setModelParameter(model, "Param27", dx * 8 + idle * 2, 0.35);
        setModelParameters(model, ["Param28", "Param47"], -armSway, 0.34);
        setModelParameters(model, ["Param29", "Param48"], armSway * 0.82, 0.34);
      }

      if (character.label === "Cirno") {
        const skirtSway = dx * 7 + idle * 2.8;
        const ribbonSway = -dx * 6 + idleSlow * 2.2;

        setModelParameter(model, "ParamAngleX", dx * 62 + idleSlow * 1.6, 0.98);
        setModelParameter(model, "ParamAngleY", -dy * 42 + Math.cos(pulseTime * 0.34 + phase), 0.94);
        setModelParameter(model, "ParamAngleZ", -dx * 12 + idle, 0.9);
        setModelParameter(model, "ParamBodyAngleX", dx * 18 + idleSlow, 0.82);
        setModelParameter(model, "ParamBodyAngleZ", -dx * 9 + idle * 0.7, 0.8);
        setModelParameter(model, "ParamEyeBallX", dx * 1.7, 0.96);
        setModelParameter(model, "ParamEyeBallY", -dy * 1.45, 0.96);
        setModelParameter(model, "sukaato", skirtSway, 0.4);
        setModelParameter(model, "himoribon", ribbonSway, 0.4);
        setModelParameter(model, "himoribonsita", ribbonSway * 0.72, 0.38);
      }
    }

    function commitLive2DPose(model) {
      try {
        model.internalModel?.coreModel?.update?.();
      } catch {
        // Some exported models keep the core update private; the normal model update still handles them.
      }
    }

    function applyVisualFollow(entry) {
      const { model, character, focusDx: dx = 0, focusDy: dy = 0 } = entry;
      const phase = character.idlePhase || 0;
      const idleX = Math.sin(pulseTime * 0.5 + phase) * 1.4;
      const idleY = Math.cos(pulseTime * 0.42 + phase) * 0.9;
      const targetX = dx * (character.followX || 10) + idleX;
      const targetY = dy * (character.followY || 5) + idleY;
      const targetRotation = dx * (character.rotate || 0.025);

      entry.visualX += (targetX - entry.visualX) * 0.14;
      entry.visualY += (targetY - entry.visualY) * 0.14;
      entry.visualRotation += (targetRotation - entry.visualRotation) * 0.12;

      model.position.set(entry.baseX + entry.visualX, entry.baseY + entry.visualY);
      model.rotation = entry.visualRotation;
    }

    let stageRect = stage.getBoundingClientRect();
    let resizeLive2DFrame = 0;
    let scrollLive2DFrame = 0;

    function fitModel() {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      stageRect = rect;
      const segmentWidth = rect.width / heroCharacters.length;

      app.renderer.resize(rect.width, rect.height);

      loadedCharacters.forEach((entry, index) => {
        if (!entry) return;
        const { model, character } = entry;
        model.scale.set(1);
        const baseWidth = Math.max(model.width, 1);
        const baseHeight = Math.max(model.height, 1);
        const scale = Math.min(segmentWidth / baseWidth, rect.height / baseHeight) * character.scale;
        const baseX = segmentWidth * index + segmentWidth / 2 + segmentWidth * character.offsetX;
        const baseY = rect.height / 2 + rect.height * character.offsetY;

        entry.baseScale = scale;
        entry.baseX = baseX;
        entry.baseY = baseY;
        entry.visualX = entry.visualX || 0;
        entry.visualY = entry.visualY || 0;
        entry.visualRotation = entry.visualRotation || 0;
        model.scale.set(scale);
        model.position.set(baseX + entry.visualX, baseY + entry.visualY);
      });
    }

    function setFocusFromClientPoint(clientX, clientY, instant = false) {
      const rect = stage.getBoundingClientRect();
      stageRect = rect;
      const x = clamp(clientX - rect.left, 0, rect.width);
      const y = clamp(clientY - rect.top, 0, rect.height);
      focusTarget.x = x;
      focusTarget.y = y;
      if (instant) {
        focusCurrent.x = x;
        focusCurrent.y = y;
      }
    }

    let pulseTime = 0;
    const modelUpdatePriority = window.PIXI.UPDATE_PRIORITY?.HIGH ?? 50;
    app.ticker.add((ticker) => {
      const deltaMS = ticker?.deltaMS ?? app.ticker.deltaMS ?? 16.67;
      pulseTime += Math.min(deltaMS, 33.34) / 833.5;
      const rect = stageRect;
      const pulse = 1 + Math.sin(pulseTime) * 0.005;
      focusCurrent.x += (focusTarget.x - focusCurrent.x) * 0.18;
      focusCurrent.y += (focusTarget.y - focusCurrent.y) * 0.18;

      loadedCharacters.filter(Boolean).forEach((entry) => {
        if (!entry.model.destroyed) {
          updateLive2DFocus(entry, rect);
          entry.model.scale.set(entry.baseScale * pulse);
          applyVisualFollow(entry);
          if (typeof entry.model.update === "function") {
            entry.model.update(deltaMS);
          }
        }
      });
    }, undefined, modelUpdatePriority);

    const handlePointerMove = (event) => setFocusFromClientPoint(event.clientX, event.clientY);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    stage.addEventListener("pointerdown", (event) => {
      const rect = stageRect.width ? stageRect : stage.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      loadedCharacters.filter(Boolean).forEach(({ model }) => {
        model.tap(x, y);
      });
    });

    const live2dResizeObserver = new ResizeObserver(() => {
      if (resizeLive2DFrame) cancelAnimationFrame(resizeLive2DFrame);
      resizeLive2DFrame = requestAnimationFrame(() => {
        resizeLive2DFrame = 0;
        fitModel();
      });
    });
    live2dResizeObserver.observe(stage);

    window.addEventListener("scroll", () => {
      if (scrollLive2DFrame) return;
      scrollLive2DFrame = requestAnimationFrame(() => {
        scrollLive2DFrame = 0;
        stageRect = stage.getBoundingClientRect();
      });
    }, { passive: true });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        app.ticker.stop();
      } else {
        app.ticker.start();
      }
    });

    const characterEntries = await Promise.all(heroCharacters.map((character) => loadCharacterWithRetry(character, 3)));
    characterEntries.forEach((entry, index) => {
      loadedCharacters[index] = entry;
    });

    fitModel();
    setFocusFromClientPoint(
      stage.getBoundingClientRect().left + stage.clientWidth * 0.5,
      stage.getBoundingClientRect().top + stage.clientHeight * 0.45,
      true,
    );
    stage.classList.add("loaded");
    loader?.setAttribute("aria-hidden", "true");
  } catch (error) {
    console.warn("Live2D preview failed to load", error);
    if (fallback?.dataset.src && !fallback.getAttribute("src")) {
      fallback.setAttribute("src", fallback.dataset.src);
    }
    stage.classList.add("failed");
  }
}

function scheduleHeroLive2D() {
  const stage = document.querySelector("[data-live2d-stage]");
  if (!stage) return;

  let started = false;
  const start = () => {
    if (started) return;
    started = true;
    initHeroLive2D();
  };

  start();
}

scheduleHeroLive2D();
