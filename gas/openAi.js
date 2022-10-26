class OpenAi {
  constructor(){ 
    this.endpoint = 'https://api.openai.com/v1/completions';
    this.results = null;
  };

  getSuggestions(textPrompt, creativity=0.9, numResults=2) {
    const params = {
      contentType: 'application/json',
      headers: { 'Authorization': `Bearer ${API_KEY}` },
      method: 'post',
      payload: JSON.stringify({
        model: 'text-davinci-002',
        prompt: textPrompt,
        max_tokens: 6,
        temperature: creativity,
        n: numResults,
        presence_penalty: 1,
        frequency_penalty: 1,
        best_of: numResults + 1
      })
    };

    const rawResponse = UrlFetchApp.fetch(this.endpoint, params);
    const response = JSON.parse(rawResponse.getContentText());
    console.log('FROM METHOD: ', response);
    this.results = response;
  };
};