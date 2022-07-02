// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/define_imported.phpt
  it("defining function with same name as imported should fail", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    use function foo\\bar;\n    function bar() {}\n}\n?>")).toMatchSnapshot();
  });
});
