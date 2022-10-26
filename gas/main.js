function main() {
  const prompt = 'Write a tagline for a candy store';
  const suggestions = new OpenAi();
  suggestions.getSuggestions(prompt);
  console.log('FROM MAIN: ', suggestions.results);
}
