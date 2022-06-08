// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_constant_inheritance_005.phpt
  it("Ensure a interface can have public constants", function () {
    expect(parser.parseCode("<?php\ninterface IA {\n    public const FOO = 10;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
