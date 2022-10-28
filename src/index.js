function main() {
  // const prompt = 'Write a tagline for a candy store';
  // const suggestions = new OpenAi();
  // suggestions.getSuggestions(prompt);
  // console.log('FROM MAIN: ', suggestions.results);
  const sheet = new SheetManager()
  const res = new OpenAi().removeNewLines(responseObj);
  sheet.insertNewResults(res);
};

class Notification {
  constructor() {
    this.ui = SpreadsheetApp.getUi();
  };

  send(event) {
    this.ui.alert(event.type, event.msg, this.ui.ButtonSet.OK);
  };
};