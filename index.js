var path = require('path');

var initShouldPromised = function(files) {
    var shouldPromisedPath = path.dirname(require.resolve('should-promised')) + path.sep + 'should-promised.js';

    var createPattern = function(file) {
    	return {pattern: file, included: true, served: true, watched: false};
	};

    files.unshift(createPattern(shouldPromisedPath));
};

initShouldPromised.$inject = ['config.files'];

module.exports = {
    'framework:should-promised': ['factory', initShouldPromised]
};
