// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73987_3.phpt
  it("Bug #73987 (Method compatibility check looks to original definition and not parent - return types abstract)", function () {
    expect(parser.parseCode("<?php\nabstract class A {\n    abstract function example();\n}\nclass B extends A {\n    function example(): int  { }\n}\nclass C extends B {\n    function example(): string { }\n}\n?>")).toMatchSnapshot();
  });
});
