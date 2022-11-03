class InputValidator {
  validate(inputs) {
    this.inputs = inputs;
    this.validatePrompt();
    this.validateNumResults();
    this.validateWordCount();
    this.validateCreativity();
    this.validateTokenCount();
  };

  validatePrompt() {
    const prompt = this.inputs.textPrompt.getValue();

    if (prompt.length === 0) {
      throw new Error('Prompt is missing.');
    };
    this.tokens = { prompt: prompt.length / 4 };
  };

  validateNumResults() {
    const numResults = this.inputs.numResults.getValue();

    if (!Number.isInteger(numResults)) {
      throw new Error('Number of Results must be an integer');
    };
    this.tokens = { ...this.tokens, numResults };
  };

  validateWordCount() {
    const wordCount = this.inputs.wordCount.getValue();

    if (!Number.isInteger(wordCount)) {
      throw new Error('Max Word Count must be an integer');
    };
    this.tokens = { ...this.tokens, wordCount: wordCount / 0.75 };
  };

  validateCreativity() {
    const creativityLevel = this.inputs.creativityLevel.getValue();
    const validValues = Object.keys(CREATIVITY);

    if (!validValues.includes(creativityLevel.toUpperCase().replace(' ', '_'))) {
      throw new Error('Invalid creativity level.');
    };
  };

  validateTokenCount() {
    const { prompt, numResults, wordCount } = this.tokens;
    const totalTokens = Math.ceil(prompt + (numResults * wordCount));

    if (totalTokens > API.MAX_TOKENS) {
      throw new Error('Max tokens exceeded');
    };
  };
};
