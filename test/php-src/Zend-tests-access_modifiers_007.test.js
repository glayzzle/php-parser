// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_007.phpt
  it("abstract final methods errmsg", function () {
    expect(parser.parseCode("<?php\nclass test {\n    final abstract function foo();\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
