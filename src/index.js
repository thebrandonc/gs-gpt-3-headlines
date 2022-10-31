class App {
  constructor() {
    this.sheet = new SheetManager();
    this.validator = new InputValidator();
    this.req = new RequestManager();
    this.btn = new BtnManager(this.sheet.sheetTabs.results);
  };

  run() {
    try {
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
      this.validator.validate(this.sheet.userInput);
      console.log(this.validator.tokens);
      this.btn.normalState();
    } catch(err) {
      this.btn.normalState();
      console.error(err);
    }
  };
};

function main() {
  new App().run();
};

const notes = {
  3: 'validate user inputs',
  4: 'error handling'
}