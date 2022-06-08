// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/case_insensivity.phpt
  it("importing function with same name but different case should fail", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    use function foo\\bar;\n    use function foo\\BAR;\n}\n?>")).toMatchSnapshot();
  });
});
