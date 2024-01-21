const styles = {
    default: this.colors.white,
    error: `${this.backgrounds.red}${this.colors.white}`,
    warn: `${this.backgrounds.yellow}${this.colors.white}`,
    success: `${this.backgrounds.green}${this.colors.white}`,
    info: `${this.backgrounds.blue}${this.colors.white}`,
    reset: `\x1b[0m`
};

module.exports = styles;