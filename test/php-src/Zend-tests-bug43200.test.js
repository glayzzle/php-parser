// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43200.phpt
  it("Bug #43200 (Interface implementation / inheritance not possible in abstract classes)", function () {
    expect(parser.parseCode("<?php\ninterface a {\n    function foo();\n    function bar();\n}\ninterface b {\n    function foo();\n}\nabstract class c {\n    function bar() { }\n}\nclass x extends c implements a, b {\n    function foo() { }\n}\necho new ReflectionClass('x');\n?>")).toMatchSnapshot();
  });
});
