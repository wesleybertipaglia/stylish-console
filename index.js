const colors = require('./src/colors');
const backgrounds = require('./src/backgrounds');
const modifiers = require('./src/modifiers');
const styles = require('./src/styles');

class StylishConsole {
    constructor() {
        this.colors = colors;
        this.backgrounds = backgrounds;
        this.modifiers = modifiers;
        this.styles = styles;
    }

    log(message, style) {
        style = style || this.styles.default;
        console.log(`${style}${message}${this.styles.reset}`);
    }

    error(message) {
        this.log(`[ERROR] ${message}`, this.styles.error);
    }

    warn(message) {
        this.log(`[WARNING] ${message}`, this.styles.warn);
    }

    success(message) {
        this.log(`[SUCCESS] ${message}`, this.styles.success);
    }

    info(message) {
        this.log(`[INFO] ${message}`, this.styles.info);
    }

    custom(message, style) {
        this.log(message, style);
    }
}

module.exports = StylishConsole;
