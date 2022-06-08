// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug46109.phpt
  it("Bug #46109 (MySQLi::init - Memory leaks)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$mysqli = new mysqli();\n$mysqli->init();\n$mysqli->init();\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
