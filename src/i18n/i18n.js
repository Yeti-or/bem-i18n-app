const langs = {};
let currentLang = 'ru';
module.exports = (keyset, key) => {
  console.log(langs[currentLang], langs[currentLang][keyset])
  return langs[currentLang][keyset][key]
}
module.exports.decl = (lang, keyset) => {
  langs[lang] = {
    ...langs[lang],
    ...keyset
  }
  console.log(langs[lang])
}
module.exports.setLang = lang => currentLang = lang

