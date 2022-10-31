class RequestManager {
  getSuggestions(inputs) {
    this.inputs = inputs;
    this.getParams();
    this.sendRequest();
  };

  sendRequest() {
    try {
      if (!DEBUG) {
        const response = UrlFetchApp.fetch(API.ENDPOINT, this.params).getContentText();
        this.results = this.removeLineBreaks(JSON.parse(response));
      } else {
        this.results = this.removeLineBreaks(testResponse);
      };
    } catch (err) {
      throw new Error(`Error getting results from OpenAI. ${err}`);
    };
  };

  getParams() {
    try {
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
    } catch (err) {
      throw new Error(`Error creating request params. ${err}`);
    };
  };

  calculateTokens(wordCount) {
    try {
      return Math.ceil(wordCount / 0.75);
    } catch (err) {
      throw new Error(`Error calculating word count tokens. ${err}`);
    };
  };

  getTemeperature(creativity) {
    try {
      return CREATIVITY[creativity.toUpperCase()];
    } catch (err) {
      throw new Error(`Error getting creativity measure. ${err}`);
    };
  };

  removeLineBreaks(response) {
    try {
      const res = { ...response };
      res.choices = res.choices.map(choice => {
        choice.text = choice.text.replaceAll(/\n/g, '');
        return choice;
      });
      return res;
    } catch (err) {
      throw new Error(`Error removing line breaks from response. ${err}`);
    };
  };
};
