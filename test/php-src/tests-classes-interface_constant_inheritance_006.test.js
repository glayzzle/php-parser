// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_constant_inheritance_006.phpt
  it("Ensure a interface can not have protected constants", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    protected const FOO = 10;\n}\n?>")).toMatchSnapshot();
  });
});
