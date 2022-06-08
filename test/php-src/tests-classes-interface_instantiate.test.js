// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_instantiate.phpt
  it("ZE2 An interface cannot be instantiated", function () {
    expect(parser.parseCode("<?php\ninterface if_a {\n    function f_a();\n}\n$t = new if_a();\n?>")).toMatchSnapshot();
  });
});
