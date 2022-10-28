class BtnManager {
  loadingState(sheet) {
    const btns = sheet.getDrawings();
    btns.forEach(btn => {
      if (btn.getOnAction() === 'main') {
        btn.setWidth(1);
      };
    });
  };

  normalState(sheet) {
    const btns = sheet.getDrawings();
    btns.forEach(btn => {
      if (btn.getOnAction() === 'main') {
        btn.setWidth(152);
      };
    });
  };
};
