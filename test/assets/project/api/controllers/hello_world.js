'use strict';

var util = require('util');

module.exports = {
  hello: hello,
  hello_body: hello_body,
  hello_file: hello_file
};

function hello(req, res) {
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);
  res.json(hello);
}

function hello_body(req, res) {
  var name = req.swagger.params.nameRequest.value.name || 'stranger';
  var hello = util.format('Hello, %s!', name);
  res.json(hello);
}

function hello_file(req, res) {
  var name = req.swagger.params.name.value || 'stranger';
  var file = req.swagger.params.example_file.value;
  var hello = util.format('Hello, %s! Thanks for the %d byte file!', name, file.size);
  res.json(hello);
}
