class BtnManager {
  constructor(sheet) {
    this.sheet = sheet;
  };

  loadingState() {
    const btns = this.sheet.getDrawings();
    btns.forEach(btn => {
      if (btn.getOnAction() === 'main') {
        btn.setWidth(1);
      };
    });
  };

  normalState() {
    const btns = this.sheet.getDrawings();
    btns.forEach(btn => {
      if (btn.getOnAction() === 'main') {
        btn.setWidth(152);
      };
    });
  };
};
