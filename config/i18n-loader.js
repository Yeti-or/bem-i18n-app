var fs = require('fs');
var path = require('path');
module.exports = function(context, request, callback) {
    //const callback = this.async();
    if (request.match(/i18n$/)) {
        var content = fs.readFileSync(path.join(path.resolve(context, request), `${process.env.L10N}.js`));

        var resolve = `
var core = require('bem-react-i18n-core');
${content}
module.exports = core(module.exports);`;

        console.log(resolve);
        callback(null, resolve);

    } else {
        callback();
    }
};
