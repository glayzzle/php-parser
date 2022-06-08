// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_error_004.phpt
  it("A redeclared class constant must have the same or higher visibility", function () {
    expect(parser.parseCode("<?php\nclass A {\n    protected const protectedConst = 0;\n}\nclass B extends A {\n    private const protectedConst = 1;\n}\n?>")).toMatchSnapshot();
  });
});
