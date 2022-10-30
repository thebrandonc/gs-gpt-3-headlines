class App {
  constructor() {
    this.sheet = new SheetManager();
    this.validator = new InputValidator();
    this.req = new RequestManager();
    this.btn = new BtnManager(this.sheet.sheetTabs.results);
  };

  run() {
    // loading state button
    // get sheet inputs
    // validate inputs
    // send request
    // insert results into sheet
    // insert res into history
    // increment tokens used
    // clear inputs
    // normal state button
    this.btn.loadingState();
    this.req.getSuggestions(this.sheet.userInput);
    this.btn.normalState();
  };
};

function main() {
  new App().run();
};

const notes = {
  3: 'validate user inputs',
  4: 'error handling'
}