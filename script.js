
let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.setText("🚀 Открыть AI Сетевик");
tg.MainButton.onClick(() => {
  alert("Добро пожаловать в AI Сетевик!");
});

tg.MainButton.show();
