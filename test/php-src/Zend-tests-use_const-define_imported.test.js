// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/define_imported.phpt
  it("defining const with same name as imported should fail", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    use const foo\\bar;\n    const bar = 42;\n}\n?>")).toMatchSnapshot();
  });
});
