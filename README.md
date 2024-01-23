# Next.js Article Summarizer with OpenAI GPT-4 (RapidAPI) and Redux
Al article summarizer tool with NextJS and chatGPT(RapidAPI)

[nextjs ai Website](public/screen.png)

## Overview

This Next.js project utilizes the power of OpenAI GPT-4 through RapidAPI to create a simple article summarizer. With the combination of Next.js for the frontend, Redux for state management, and OpenAI GPT-4 for natural language processing, this project offers a seamless and efficient way to generate article summaries.

## Features

- **Article Summarization:** Leverage the capabilities of OpenAI GPT-4 to generate concise and informative summaries of articles.
- **Next.js Framework:** Utilize the benefits of server-side rendering, automatic code splitting, and a great developer experience provided by Next.js.
- **Redux State Management:** Manage application state efficiently with Redux, ensuring a predictable and centralized state container.
- **RapidAPI Integration:** Access OpenAI GPT-4 through RapidAPI, simplifying the integration process and allowing for easy scalability.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm: npm is the package manager for Node.js and comes bundled with the installation of Node.js.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/minhajhameed/nextjs-ai-summarizer.git
    cd nextjs-ai-summarizer
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a RapidAPI account and obtain an API key for OpenAI GPT-4.

4. Copy the `.env.example` file to a new file named `.env.local` and fill in your RapidAPI key:

    ```
    RAPIDAPI_KEY=your_rapidapi_key
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application in action.

## Usage

1. Enter the URL of the article you want to summarize.
2. Click the "Summarize" button.
3. The application will communicate with OpenAI GPT-4 via RapidAPI and display the generated summary.

## Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, please submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact:
For any questions or feedback, feel free to reach out to us at [minhajham@yahoo.com](mailto:minhajham@yahoo.com).