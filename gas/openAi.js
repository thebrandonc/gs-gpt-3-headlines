class OpenAi {
  getSuggestions(textPrompt, tokens, creativity=0.9, numResults=2) {
    const params = {
      contentType: 'application/json',
      headers: { 'Authorization': `Bearer ${API.KEY}` },
      method: 'post',
      payload: JSON.stringify({
        model: API.MODEL,
        prompt: textPrompt,
        max_tokens: tokens,
        temperature: creativity,
        n: numResults,
        presence_penalty: API.PRESENCE_PENALTY,
        frequency_penalty: API.FREQUENCY_PENALTY,
        best_of: numResults + 1
      })
    };

    const rawResponse = UrlFetchApp.fetch(API.ENDPOINT, params).getContentText();
    const response = this.removeLineBreaks(JSON.parse(rawResponse));
    this.results = response;
  };

  removeLineBreaks(response) {
    const newResponse = {...response}
    newResponse.choices = newResponse.choices.map(choice => {
      choice.text = choice.text.replaceAll(/\n/g, '');
      return choice;
    });
    return newResponse;
  };
};