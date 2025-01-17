const fs = require('fs');
const yaml = require('js-yaml');

const themesYml = fs.readFileSync('./lib/themes.yml', {flag: 'r'});
const allThemes = yaml.load(themesYml);
const themes = [...allThemes.material, ...allThemes.other];

const toTheme = (theme) => {
  return {
    name: theme.name,
    id: theme.className,
    primary: theme.attributes,
    primaryT: theme.attributes,
    accent: theme.accent,
    accentT: theme.accent,
    accent2: theme.keywords,
    accent2T: theme.keywords,
    bg: theme.background,
    fg: theme.foreground,
    text: theme.text,
    selectBg: theme.selectBg,
    selectFg: theme.selectFg,
    button: theme.button,
    secondBg: theme.second,
    disabled: theme.disabled,
    contrast: theme.contrast,
    active: theme.table,
    border: theme.misc1,
    hl: theme.misc2,
    tree: theme.tree,
    notif: theme.notif,
    excluded: theme.excluded,

    yellow: theme.attributes,
    green: theme.strings,
    cyan: theme.operators,
    blue: theme.functions,
    purple: theme.keywords,
    red: theme.tags,
    red2: theme.tags,
    orange: theme.numbers,
    orange2: theme.numbers,
    gray: theme.comments,
    silver: theme.vars,
    black: theme.contrast,
  };
};

let currentTheme = toTheme(themes[0]);

const generateCSS = (theme) => {
  return `
:root {
  /* Modify these to change your theme colors: */
  --primary: ${theme.primary};
  --primaryT: ${theme.primaryT};
  --accent: ${theme.accent};
  --accentT: ${theme.accentT};
  --accent2: ${theme.accent2};
  --accent2T: ${theme.accent2T};
  --bg: ${theme.bg};
  --fg: ${theme.fg};
  --text: ${theme.text};
  --selectBg: ${theme.selectBg};
  --selectFg: ${theme.selectFg};
  --button: ${theme.button};
  --secondBg: ${theme.secondBg};
  --disabled: ${theme.disabled};
  --contrast: ${theme.contrast};
  --active: ${theme.active};
  --border: ${theme.border};
  --hl: ${theme.hl};
  --tree: ${theme.tree};
  --notif: ${theme.notif};
  --excluded: ${theme.excluded};

  --yellow: ${theme.yellow};
  --green: ${theme.green};
  --cyan: ${theme.cyan};
  --blue: ${theme.blue};
  --purple: ${theme.purple};
  --red: ${theme.red};
  --red2: ${theme.red2};
  --orange: ${theme.orange};
  --orange2: ${theme.orange2};
  --gray: ${theme.gray};
  --silver: ${theme.silver};
  --black: ${theme.black};
}
`;
};

const changeTheme = (themeName) => {
  const rawTheme = themes.find(theme => theme.className === themeName) || themes[0];
  currentTheme = toTheme(rawTheme);
  console.log('current theme is now ' + currentTheme.name)
};

module.exports = {
  currentTheme,
  changeTheme,
  getCurrentTheme() {
    return currentTheme;
  },
  getThemeCSS() {
    console.log('current theme is ', currentTheme.name)
    return generateCSS(currentTheme);
  },
};

changeTheme();
