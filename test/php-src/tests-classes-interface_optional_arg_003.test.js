// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_optional_arg_003.phpt
  it("default argument value in and in implementing class with interface in included file", function () {
    expect(parser.parseCode("<?php\ninclude 'interface_optional_arg_003.inc';\nclass C implements I {\n  function f($a = 2) {\n    var_dump($a);\n  }\n}\n$c = new C;\n$c->f();\n?>")).toMatchSnapshot();
  });
});
