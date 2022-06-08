// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_constant_inheritance_004.phpt
  it("Ensure a class may implement two interfaces which include the same constant (due to inheritance).", function () {
    expect(parser.parseCode("<?php\ninterface IA {\n    const FOO = 10;\n}\ninterface IB extends IA {\n}\nclass C implements IA, IB {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
