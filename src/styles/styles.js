import colors from './colors.js';
import backgrounds from './backgrounds.js';

const styles = {
    default: colors.white,
    error: `${backgrounds.red}${colors.white}`,
    warn: `${backgrounds.yellow}${colors.white}`,
    success: `${backgrounds.green}${colors.white}`,
    info: `${backgrounds.blue}${colors.white}`,
    reset: `\x1b[0m`
};

export default styles;