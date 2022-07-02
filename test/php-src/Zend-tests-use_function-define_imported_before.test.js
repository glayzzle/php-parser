// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/define_imported_before.phpt
  it("using function with same name as defined should fail", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    function bar() {}\n    use function foo\\bar;\n}\nnamespace {\n    echo \"Done\";\n}\n?>")).toMatchSnapshot();
  });
});
