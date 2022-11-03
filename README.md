<!-- DESCRIPTION -->
## Use GPT-3 for Copywriting Ideas in Google Sheets

This repo contains a script that turns your Google Sheet into an AI-powered copywriting assistant. The script uses OpenAI's GPT-3 API to generate ideas for blog titles, social posts, image captions and more. Generate thousands of ideas for free. All that's required is an OpenAI account and your API key. The spreadsheet also keeps track of your requests to avoid potential account overages.

Check out the YouTube tutorial here: [Check out the Tutorial](https://youtu.be/aq-lkhG5Zpw)

## Getting Started

The easiest way to get started is by copying the following spreadsheet template to your Google Drive: [Spreadsheet Template](https://docs.google.com/spreadsheets/d/1LnOjc6wBexIrLe3LPPCKFbRgpptPLpjNQBVOqZDA-30/edit?usp=sharing). Once copied, run the script by clicking the "Generate Ideas" button located on the 'results' tab. Google will then ask that you authorize some permissions, and once they're authorized just paste your API key into the `settings.gs` file in the Apps Script editor.

Alternatively, you can get started by installing Google's Clasp CLI and cloning (or forking) this repo. Once cloned, rename the `settings.example.js` file to `settings.js`, paste in your OpenAI API key, and use the Clasp CLI to push the project to any Apps Script project bound to a Google Sheet.

After the project has been pushed to Apps Script, run the `main()` function to authorize the script permissions. This script will search for specific named ranges detailed in the `settings.js` file, so you'll need to update the ranges, or follow the example established in the [spreadsheet template](https://docs.google.com/spreadsheets/d/1LnOjc6wBexIrLe3LPPCKFbRgpptPLpjNQBVOqZDA-30/edit?usp=sharing).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.md` for more information.