"use strict";
var fs = require("fs");
var yosay = require('yosay');
var generators = require('yeoman-generator');
var chalk = require('chalk');
/**
 * @module JSONUpdate [FireLoop]
 * @author Jonathan Casarrubias <t: johncasarrubias, gh:mean-expert-official>
 * @description
 * This module updates JSON Files
 */
module.exports = generators.extend({
    method: function () {
        var config = Object.assign(require(this.options.filePath), this.options.replace);
        fs.writeFileSync(this.options.filePath, JSON.stringify(config, null, 2));
        this.log(chalk.green('Updating: ', this.options.filePath));
    }
});
//# sourceMappingURL=C:/Users/bdarby/Desktop/fireloop.io/generator-fireloop/src/jsonupdate/index.js.map