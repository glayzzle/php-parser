// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_004.phpt
  it("using multiple access modifiers (abstract methods)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    abstract abstract function foo() {\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
