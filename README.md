# Stylish Console

The Stylish Console is a light logging library that allows you to add style and formatting to your console output. With this logger, you can enhance the readability and visual appeal of your logs, making it easier to analyze and debug your applications.

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

Install the package to get started:

```bash
npm install stylish-console
```

That's it! You are now ready to enhance the readability and visual appeal of your console logs with the Stylish Console.

## 💻 Usage

1. Import the StyledConsole class in your code:

```bash
const StylishConsole = require('stylish-console');
const logger = new StylishConsole();
```

2. Start using the logger to print styled logs:

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
