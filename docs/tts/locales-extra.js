/* Supplementary guide locales; untranslated technical paragraphs use English fallback. */
(() => {
 const base = window.NEKO_TTS_GUIDE.en;
 const ui = {"ru":{"back":"К документации","site":"На сайт","lang":"Язык","search":"Поиск в руководстве...","empty":"Разделы не найдены.","note":"Важно","next":"Также смотрите","related":"Обзор NekoGPT"},"zh":{"back":"返回文档","site":"返回网站","lang":"语言","search":"搜索本指南...","empty":"未找到相关章节。","note":"提示","next":"另请参阅","related":"NekoGPT 概览"},"ja":{"back":"ドキュメントに戻る","site":"サイトに戻る","lang":"言語","search":"ガイドを検索...","empty":"該当するセクションはありません。","note":"ヒント","next":"関連ガイド","related":"NekoGPTの概要"}};
 const titles = {"ru":["Что такое TTS?","Как текст становится голосом","Выбор голосового движка","Настройка TTS","Голоса, языки и клонирование","Озвучивание в чате","TTS и режим ASMR","Если голос не работает"],"zh":["什么是 TTS？","回答如何变成语音","选择语音引擎","设置 TTS","声音、语言与声音克隆","聊天中的语音播放","TTS 与 ASMR 模式","语音无法工作时"],"ja":["TTSとは？","返答が音声になるまで","音声エンジンを選ぶ","TTSの設定","声・言語・音声クローン","チャット中の読み上げ","TTSとASMRモード","音声が出ないとき"]};
 const headings = {"ru":["ГОЛОС ПЕРСОНАЖА","Как работает TTS в NekoGPT","Настройте голос вашего компаньона."],"zh":["角色语音","NekoGPT 的 TTS 功能","设置你的伙伴如何说话。"],"ja":["キャラクターの声","NekoGPTのTTSの仕組み","キャラクターの話し方を設定できます。"]};
 for (const code of Object.keys(ui)) {
   const data = JSON.parse(JSON.stringify(base));
   data.ui = { ...data.ui, ...ui[code], eyebrow:headings[code][0], heroTitle:headings[code][1], heroLead:headings[code][2] };
   data.sections.forEach((section,i)=>{ section.title=titles[code][i]; });
   window.NEKO_TTS_GUIDE[code] = data;
 }
})();