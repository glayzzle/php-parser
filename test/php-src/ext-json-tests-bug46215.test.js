// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug46215.phpt
  it("Bug #46215 (json_encode mutates its parameter and has some class-specific state)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    protected $a = array();\n}\n$a = new foo;\n$x = json_encode($a);\nprint_r($a);\n?>")).toMatchSnapshot();
  });
});
