import StylishConsole, { backgrounds, colors, modifiers } from "../../index.js";

const stylishConsole = new StylishConsole();

stylishConsole.log("Hello, world!");
stylishConsole.error("This is an error!");
stylishConsole.warn("This is a warning!");
stylishConsole.success("This is a success!");
stylishConsole.info("This is info!");
stylishConsole.custom("This is custom!", `${colors.red}${modifiers.bold}${backgrounds.white}`);
stylishConsole.custom("This is another custom log!", colors.green + modifiers.underline + backgrounds.black);