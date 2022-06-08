// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/type_hinting_005d.phpt
  it("Check type hint compatibility in overrides with array hints.", function () {
    expect(parser.parseCode("<?php\nClass C { function f($a) {} }\n// Array hint, should be nothing.\nClass D extends C { function f(array $a) {} }\n?>")).toMatchSnapshot();
  });
});
