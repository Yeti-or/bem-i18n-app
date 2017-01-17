module.exports = function(source) {
  const langs = this.query.slice(1).split(',');
  const match = source.match(/require\('(.*)\.i18n'\);/)
  if (match) {
    const replace = `(function() {
      const core = require('bem-react-i18n-core');
      ${ langs.map(lang => `
        const __${lang} = require('${match[1]}.i18n/${lang}');
        const _${lang} = Object.keys(__${lang})[0];
        core.decl(_${lang}, __${lang}[_${lang}], {lang: '${lang}'});
      `).join('\n') }
      return core;
    })()
    `;
    return source.replace(/require\('.*\.i18n'\);/, replace)
  } else {
    return source;
  }
};
