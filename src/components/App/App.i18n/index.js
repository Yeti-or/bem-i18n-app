var core = require('bem-react-i18n-core');
var content = require('./' + process.env.L10N);

//process.env.L10N.split(',').forEach(l10n => {
//    content = require('./' + l10n);
//});
module.exports = core(content);
