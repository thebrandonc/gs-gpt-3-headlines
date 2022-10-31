class BtnManager {
  constructor(sheet) {
    this.sheet = sheet;
  };

  loadingState() {
    try {
      const btns = this.sheet.getDrawings();
      btns.forEach(btn => {
        if (btn.getOnAction() === 'main') {
          btn.setWidth(1);
        };
      });
    } catch (err) {
      throw new Error(`Error changing button state to "Loading". ${err}`);
    };
  };

  normalState() {
    try {
      const btns = this.sheet.getDrawings();
      btns.forEach(btn => {
        if (btn.getOnAction() === 'main') {
          btn.setWidth(152);
        };
      });
    } catch (err) {
      throw new Error(`Error changing button state to "Normal". ${err}`);
    };
  };
};
