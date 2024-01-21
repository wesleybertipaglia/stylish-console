# Styled Console Logger

The Styled Console Logger is a light logging library that allows you to add style and formatting to your console output. With this logger, you can enhance the readability and visual appeal of your logs, making it easier to analyze and debug your applications.

Whether you are building a command-line interface (CLI) tool, a server-side application, or any other software project, the Styled Console Logger can be a valuable addition to your development toolkit.

## 📃 Introduction

In this README, you will find information on how to get started with the Styled Console Logger, its features, usage instructions, contribution guidelines, licensing details, acknowledgments, and top contributors.

Let's dive in and explore the capabilities of the Styled Console Logger!

### Features:

- ✅ Success loggs
- ✅ Info loggs
- ✅ Warning loggs
- ✅ Error loggs
- ✅ Default loggs
- ✅ Custom loggs

## 🤖 Getting Started

Clone this repository to get started.

```bash
git clone https://github.com/wesleybertipaglia/styled-console
```

That's it! You are now ready to enhance the readability and visual appeal of your console logs with the Styled Console Logger.

## 💻 Usage

1. To use the Styled Console Logger in your project, follow these simple steps:

```bash
npm install styled-console
```

2. Import the StyledConsole class in your code:

```bash
const StyledConsole = require('styled-console');
const logger = new StyledConsole();
```

3. Start using the logger to print styled logs:

```javascript
logger.success("This is a success message.");
logger.error("This is an error message.");
logger.warn("This is a warning message.");
logger.info("This is an info message.");
logger.log("This is a default log message.");
logger.custom("This is a custom log message.", logger.styles.red); // Use custom styles
```

## 🤝 Contributing

Contributions are welcome! Please check out our [contribution guidelines](CONTRIBUTING.md) to get started.

## 📜 License

This repository is licensed under the [MIT]. See the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

A big thank you to the open-source community for inspiring and supporting this project.

## 🏆 Top Contributors

<a href="https://github.com/wesleybertipaglia/styled-console/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=wesleybertipaglia/styled-console"/>
</a>

[Back to top](#styled-console)
