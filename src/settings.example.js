const API = {
  KEY: 'INSERT_API_KEY_HERE',
  ENDPOINT: 'https://api.openai.com/v1/completions',
  MODEL: 'text-davinci-002',
  PRESENCE_PENALTY: 0.9,
  FREQUENCY_PENALTY: 0.9,
  MAX_TOKENS: 100
};

const TABS = {
  RESULTS: 'results',
  HISTORY: 'history',
};

const TABLES = {
  RESULTS: 'resultsHeader',
  HISTORY: 'historyHeader'
};

const INPUTS = {
  TEXT_PROMPT: 'textPrompt',
  NUM_RESULTS: 'numResults',
  WORD_COUNT: 'wordCount',
  CREATIVITY_LEVEL: 'creativityLevel',
};

const CREATIVITY = {
  HIGH: 0.9,
  MED: 0.5,
  LOW: 0.1,
  DIRECT: 0
};

const TOKENS_USED = 'tokensUsed';
const DEBUG = false;
