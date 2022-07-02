// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_005.phpt
  it("using multiple access modifiers (final methods)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    final final function foo() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
