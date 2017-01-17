module.exports = function(source) {
  const langs = this.query.slice(1).split(',');
  const match = source.match(/require\('(.*)\.i18n'\);/)
  if (match) {
    const replace = `(function() {
      const core = require('bem-react-i18n-core');
      ${ langs.map(lang => `
        const _${lang} = require('${match[1]}.i18n/${lang}');
        core.decl('${lang}', _${lang});
      `).join('\n') }
      return core;
    })()
    `;
    return source.replace(/require\('.*\.i18n'\);/, replace)
  } else {
    return source;
  }
};
