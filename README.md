# AI Data Automation

A TypeScript-based AI data automation system for operational intelligence and hub performance analysis.

## Features

- 🤖 **AI-Powered Analysis**: Uses OpenAI GPT models to analyze operational data
- 📊 **Hub Performance Monitoring**: Tracks delivery conversions, backlogs, and SOP compliance
- 🎯 **Business Intelligence**: Identifies capital leakage risks and operational bottlenecks
- 📈 **OKR Reporting**: Generates summaries suitable for quarterly reviews

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MdMizanurVU/ai-data-automation.git
   cd ai-data-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

## Project Structure

```
├── index.ts          # Main application logic
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
├── .env              # Environment variables (not in repo)
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```

## Usage

The system analyzes hub performance data and generates AI-powered insights:

- Identifies hubs with highest capital leakage risk
- Suggests action plans for backlog reduction
- Provides operational intelligence for decision-making

## Technologies

- **TypeScript**: Type-safe JavaScript development
- **OpenAI API**: AI-powered data analysis
- **Node.js**: Runtime environment
- **dotenv**: Environment variable management

## License

ISC