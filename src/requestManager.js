class RequestManager {
  getSuggestions(inputs) {
    this.inputs = inputs;
    this.getParams();
    // this.sendRequest();
  };

  sendRequest() {
    const response = UrlFetchApp.fetch(API.ENDPOINT, this.params).getContentText();
    this.results = this.removeLineBreaks(JSON.parse(response));
  };

  getParams() {
    this.params = {
      contentType: 'application/json',
      headers: { 'Authorization': `Bearer ${API.KEY}` },
      method: 'post',
      payload: JSON.stringify({
        model: API.MODEL,
        prompt: this.inputs.textPrompt.getValue(),
        max_tokens: this.calculateTokens(this.inputs.wordCount.getValue()),
        temperature: this.getTemeperature(this.inputs.creativityLevel.getValue()),
        n: this.inputs.numResults.getValue(),
        presence_penalty: API.PRESENCE_PENALTY,
        frequency_penalty: API.FREQUENCY_PENALTY,
        best_of: this.inputs.numResults.getValue() + 1
      })
    };
  };

  calculateTokens(wordCount) {
    return Math.ceil(wordCount/0.75);
  };

  getTemeperature(creativity) {
    return CREATIVITY[creativity.toUpperCase()];
  };

  removeLineBreaks(response) {
    const res = {...response};
    return res.choices.map(choice => {
      choice.text = choice.text.replaceAll(/\n/g, '');
      return choice;
    });
  };
};
