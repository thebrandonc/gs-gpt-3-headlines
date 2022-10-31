class SheetManager {
  constructor() {
    this.doc = SpreadsheetApp.getActiveSpreadsheet();
    this.sheetTabs = this.getSheetTabs();
    this.userInput = this.getUserInput();
  };

  getSheetTabs() {
    const tabs = {};
    Object.keys(TABS).forEach(key => {
      const sheetName = TABS[key];
      tabs[sheetName] = this.doc.getSheetByName(sheetName);
    });
    return tabs;
  };

  getUserInput() {
    const inputs = {};
    Object.keys(INPUTS).forEach(key => {
      const inputName = INPUTS[key];
      inputs[inputName] = this.doc.getRange(inputName);
    });
    return inputs;
  };

  clearUserInput() {
    Object.keys(this.userInput).forEach(key => {
      this.userInput[key].setValue('');
    });
  };

  clearOldResults() {
    try {
      const prevResults = this.sheetTabs.results
      const header = prevResults.getRange(TABLES.RESULTS).getLastRow();
      const height = prevResults.getDataRange().getHeight();
      if (height > header) {
        prevResults.getRange(header+1, 1, height, 8).setValue('');
      };
    } catch(err) {
      throw new Error(`Could not clear results. ${err}`);
    };
  };

  insertNewResults({ id, choices }) {
    const tab = this.sheetTabs.results;
    const firstRow = tab.getRange(TABLES.RESULTS).getLastRow()+1;
    const results = choices.map(choice => (
      [id, this.userInput.textPrompt.getValue(), choice.text]
    ));
    tab.getRange(firstRow, 1, results.length, 3).setValues(results);
  };

  addResponseToHistory({ usage }) {
    const { textPrompt, numResults, creativityLevel, wordCount } = this.userInput;
    const tab = this.sheetTabs.history
    const row = tab.getDataRange().getHeight()+1;
    const newRow = [new Date()];
    newRow.push(
      textPrompt.getValue(),
      numResults.getValue(),
      wordCount.getValue(),
      creativityLevel.getValue(),
      usage.prompt_tokens,
      usage.completion_tokens,
      usage.total_tokens
    );
    tab.getRange(row, 1, 1, 8).setValues([newRow]);
  };

  incrementTokensUsed({ usage }) {
    const tokens = this.doc.getRange(TOKENS_USED);
    tokens.setValue(tokens.getValue() + usage.total_tokens);
  };
};
