// add params as instance variable, remove from arguments

class RequestManager {
  getSuggestions(inputs) {
    Logger.log(this.getParams(inputs).payload);
  };

  sendRequest(params) {
    const response = UrlFetchApp.fetch(API.ENDPOINT, params).getContentText();
    this.results = this.removeLineBreaks(JSON.parse(response));
  };

  getParams(inputs) {
    return {
      contentType: 'application/json',
      headers: { 'Authorization': `Bearer ${API.KEY}` },
      method: 'post',
      payload: JSON.stringify({
        model: API.MODEL,
        prompt: inputs.textPrompt.getValue(),
        max_tokens: this.calculateTokens(inputs.wordCount.getValue()),
        temperature: this.getTemeperature(inputs.creativityLevel.getValue()),
        n: inputs.numResults.getValue(),
        presence_penalty: API.PRESENCE_PENALTY,
        frequency_penalty: API.FREQUENCY_PENALTY,
        best_of: inputs.numResults.getValue() + 1
      })
    };
  };

  calculateTokens(wordCount) {
    return Math.ceil(wordCount/0.75);
  };

  getTemeperature(creativity) {
    const temp = {
      'High': 0.9,
      'Medium': 0.5,
      'Low': 0.1,
      'Direct Answer': 0
    };
    return temp[creativity];
  };

  removeLineBreaks(response) {
    const res = {...response};
    return res.choices.map(choice => {
      choice.text = choice.text.replaceAll(/\n/g, '');
      return choice;
    });
  };
};
