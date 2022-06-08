// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_constant_inheritance_007.phpt
  it("Ensure a interface can not have private constants", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    private const FOO = 10;\n}\n?>")).toMatchSnapshot();
  });
});
