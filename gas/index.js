function main() {
  const sheet = new SheetManager();
  const btn = new BtnManager();
  btn.loadingState(sheet.sheetTabs.results);
  btn.normalState(sheet.sheetTabs.results);
};

class Notification {
  constructor() {
    this.ui = SpreadsheetApp.getUi();
  };

  send(event) {
    this.ui.alert(event.type, event.msg, this.ui.ButtonSet.OK);
  };
};

const notes = {
  2: 'handle button states',
  3: 'format & validate user inputs',
  4: 'error handling'
}