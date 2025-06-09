// 检查是否为移动设备
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// 初始化 Sakana Widget
function initSakanaWidget() {
  if (isMobileDevice()) {
    // 如果是手机端，退出函数不加载 Widget
    return;
  }

  // 获取角色
  const takina = SakanaWidget.getCharacter("takina");
  takina.initialState = {
    ...takina.initialState,
    i: 0.001,
  };

  const chisato = SakanaWidget.getCharacter("chisato");
  chisato.initialState = {
    ...chisato.initialState,
    i: 0.001,
  };

  // 随机选择角色
  const selectedCharacter =
    Math.floor(Math.random() * 2) === 0 ? takina : chisato;
  SakanaWidget.registerCharacter("custom", selectedCharacter);

  // 使用构造函数初始化 SakanaWidget
  new SakanaWidget({
    character: "custom",
    controls: false,
  }).mount("#sakana-widget");
}
if (!isMobileDevice()) {
  document.write(`
      <link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/sakana-widget@2.7.0/lib/sakana.min.css" />
      <div id="sakana-widget" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;"></div>
      <script async onload="initSakanaWidget()" src="https://fastly.jsdelivr.net/npm/sakana-widget@2.7.0/lib/sakana.min.js"><\/script>
    `);
}
