// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/case_sensivity.phpt
  it("importing const with same name but different case", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    use const foo\\bar;\n    use const foo\\BAR;\n}\n?>")).toMatchSnapshot();
  });
});
