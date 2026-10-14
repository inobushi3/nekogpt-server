/* Supplementary guide locales; untranslated technical paragraphs use English fallback. */
(() => {
 const base = window.NEKO_3D_GUIDE.en;
 const ui = {"ru":{"back":"К документации","site":"На сайт","lang":"Язык","search":"Поиск в руководстве...","empty":"Разделы не найдены.","note":"Важно","next":"Также смотрите","related":"Обзор NekoGPT"},"zh":{"back":"返回文档","site":"返回网站","lang":"语言","search":"搜索本指南...","empty":"未找到相关章节。","note":"提示","next":"另请参阅","related":"NekoGPT 概览"},"ja":{"back":"ドキュメントに戻る","site":"サイトに戻る","lang":"言語","search":"ガイドを検索...","empty":"該当するセクションはありません。","note":"ヒント","next":"関連ガイド","related":"NekoGPTの概要"}};
 const titles = {"ru":["Что такое 3D-модель?","Добавление VRM","Анимации VRMA","Выражения и движения","3D в разговоре","Взаимодействие с персонажем","Скины и внешний вид","Решение проблем"],"zh":["什么是 3D 模型？","添加 VRM 模型","VRMA 动画","表情与自然动作","对话中的 3D 角色","与角色互动","皮肤与其他外观","故障排查"],"ja":["3Dモデルとは？","VRMモデルを追加する","VRMAアニメーション","表情と自然な動き","会話中の3Dモデル","キャラクターとの交流","スキンと外見","トラブルシューティング"]};
 const headings = {"ru":["3D-ПЕРСОНАЖИ","Как работает 3D в NekoGPT","VRM-модели и VRMA-анимации для вашего компаньона."],"zh":["3D 角色","NekoGPT 的 3D 功能","使用 VRM 模型和 VRMA 动画。"],"ja":["3Dキャラクター","NekoGPTの3Dの仕組み","VRMモデルとVRMAアニメーションを利用できます。"]};
 for (const code of Object.keys(ui)) {
   const data = JSON.parse(JSON.stringify(base));
   data.ui = { ...data.ui, ...ui[code], eyebrow:headings[code][0], heroTitle:headings[code][1], heroLead:headings[code][2] };
   data.sections.forEach((section,i)=>{ section.title=titles[code][i]; });
   window.NEKO_3D_GUIDE[code] = data;
 }
})();