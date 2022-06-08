// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44414.phpt
  it("Bug #44414 (incomplete reporting about abstract methods)", function () {
    expect(parser.parseCode("<?php\nabstract class A {\n  abstract function foo();\n}\ninterface B {\n  function bar();\n}\nclass C extends A implements B {\n}\n?>")).toMatchSnapshot();
  });
});
