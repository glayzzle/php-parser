// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_constant_inheritance_001.phpt
  it("Ensure an interface may not shadow an inherited constant.", function () {
    expect(parser.parseCode("<?php\ninterface I1 {\n    const FOO = 10;\n}\ninterface I2 extends I1 {\n    const FOO = 10;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
