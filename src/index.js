class App {
  constructor() {
    this.sheet = new SheetManager();
    this.val = new InputValidator();
    this.req = new RequestManager();
    this.btn = new BtnManager(this.sheet.sheetTabs.results);
    this.msg = new Notification();
  };

  run() {
    try {
      this.btn.loadingState();
      this.val.validate(this.sheet.userInput);
      this.req.getSuggestions(this.sheet.userInput);
      this.sheet.clearOldResults();
      this.sheet.insertNewResults(this.req.results);
      this.sheet.addResponseToHistory(this.req.results);
      this.sheet.incrementTokensUsed(this.req.results);
      this.sheet.clearUserInput();
      this.btn.normalState();
      this.msg.send('success', 'Your AI generated results are ready 😁');
    } catch (err) {
      this.btn.normalState();
      this.msg.send('error', err);
    };
  };
};

function main() {
  new App().run();
};
