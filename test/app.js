'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-arxivar-plugins:app', function () {

  var tempDir = 'testTmp';
  var commandName = 'Hodor';
  var mockedPrompts = {
    pluginname: commandName,
    description: 'hodor hodor hodor',
    author: 'Hodor',
    id: 'id',
    label: 'HODOR!',
    icon: 'fa fa-hodor',
    minVersion: '0.0.1',
    requireRefresh: true,
    dependencies: 'doorHolder'
  };

  var fs = require('fs');
  var deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(function (file) {
        var curPath = path + '/' + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };

  afterEach(() => {
    setTimeout(() => deleteFolderRecursive(path.join(__dirname, tempDir, commandName)), 500);
  });

  it('Plugin command: creates files', function () {
    return helpers.run(path.join(__dirname, '../generators/command'))
      .inDir(path.join(__dirname, tempDir))
      .withPrompts(mockedPrompts)
      .then(() => {
        assert.file([
          path.join(__dirname, tempDir, commandName, commandName + 'PluginCommand.js')
        ]);
      });
  });

  
  it('Plugin route: creates files', function () {
    return helpers.run(path.join(__dirname, '../generators/route'))
      .inDir(path.join(__dirname, tempDir))
      .withPrompts(mockedPrompts)
      .then(() => {
        assert.file([
          path.join(__dirname, tempDir, commandName, commandName + '.css'),
          path.join(__dirname, tempDir, commandName, commandName + '.html'),
          path.join(__dirname, tempDir, commandName, commandName + '.js'),
          path.join(__dirname, tempDir, commandName, commandName + 'Ctrl.js')
        ]);
      });
  });

  it('Plugin widget task: creates files', function () {
    return helpers.run(path.join(__dirname, '../generators/widget-task'))
      .inDir(path.join(__dirname, tempDir))
      .withPrompts(mockedPrompts)
      .then(() => {
        assert.file([
          path.join(__dirname, tempDir, commandName, commandName + '.css'),
          path.join(__dirname, tempDir, commandName, commandName + '.html'),
          path.join(__dirname, tempDir, commandName, commandName + '.js'),
          path.join(__dirname, tempDir, commandName, commandName + 'Directive.js')
        ]);
      });
  });

  it('Plugin widget desktop: creates files', function () {
    return helpers.run(path.join(__dirname, '../generators/widget-desktop'))
      .inDir(path.join(__dirname, tempDir))
      .withPrompts(mockedPrompts)
      .then(() => {
        assert.file([
          path.join(__dirname, tempDir, commandName, commandName + '.css'),
          path.join(__dirname, tempDir, commandName, commandName + '.html'),
          path.join(__dirname, tempDir, commandName, commandName + '.js'),
          path.join(__dirname, tempDir, commandName, commandName + 'Directive.js')
        ]);
      });
  });

});
