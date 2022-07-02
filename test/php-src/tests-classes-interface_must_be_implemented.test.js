// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_must_be_implemented.phpt
  it("ZE2 An interface must be implemented", function () {
    expect(parser.parseCode("<?php\ninterface if_a {\n    function f_a();\n}\nclass derived_a implements if_a {\n}\n?>")).toMatchSnapshot();
  });
});
