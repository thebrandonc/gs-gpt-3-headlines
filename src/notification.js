class Notification {
  send(type, msg) {
    const title = type === 'success'
      ? '🏆 Success!'
      : '😞 Something went wrong...';

    if (!DEBUG) {
      this.ui = SpreadsheetApp.getUi();
      this.ui.alert(title, msg, this.ui.ButtonSet.OK);
    } else {
      Logger.log(msg);
    };
  };
};
