'use strict';
require('../../modules/es.string.repeat');
require('../../modules/es.regexp.escape');
require('../../modules/es.string.pad-start');

var getBuiltInStaticMethod = require('../../internals/get-built-in-static-method');

module.exports = getBuiltInStaticMethod('RegExp', 'escape');
