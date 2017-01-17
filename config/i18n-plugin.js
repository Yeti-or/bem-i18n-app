var path = require('path');

function HelloWorldPlugin(options) {
  // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    console.log('Hello World!'); 
  });
  compiler.plugin('normal-module-factory', function(nmf) {
      nmf.plugin('before-resolve', function(data, callback) {
        var request = data.request;
        var context = data.context;
        if (request.match(/i18n$/)) {
            data.request = path.join(path.resolve(context, request), `${process.env.L10N}.js`)
        }
          callback(null, data);
      });
      //nmf.plugin('after-resolve', function(data, callback) {
      //  var request = data.rawRequest;
      //  //var context = data.context;
      //  if (request.match(/\.i18n\/[a-z]+\.js$/)) {
      //      console.log('____');
      //      console.log(data.resource);
      //  }
      //    callback(null, data);
      //});
  });
  compiler.plugin('compilation', function(compilation) {
      compilation.plugin('build-module', function(module){
              console.log('build module');
                  console.log(module);
      });
      compilation.moduleTemplate.plugin('startup', function(source, module, hash) {
          //console.log(source);
          console.log(module.name);
          return source;
      });
      //compilation.plugin('normal-module-loader', function(loaderContext, module) {
      //  //if (request.match(/i18n$/)) {
      //    //console.log('____');
      //    //console.log(loaderContext.resource);
      //    //console.log('____');
      //  //}
      //});
  });

};

module.exports = HelloWorldPlugin;
