import colors from "./src/styles/colors.js";
import backgrounds from "./src/styles/backgrounds.js";
import modifiers from "./src/styles/modifiers.js";
import styles from "./src/styles/styles.js";

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

    custom(message, styles) {
        this.log(message, styles);
    }
}

export { colors, backgrounds, modifiers, styles };
export default StylishConsole;