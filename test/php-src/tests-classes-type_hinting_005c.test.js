// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/type_hinting_005c.phpt
  it("Check type hint compatibility in overrides with array hints.", function () {
    expect(parser.parseCode("<?php\nClass C { function f(SomeClass $a) {} }\n// Array hint, should be class.\nClass D extends C { function f(array $a) {} }\n?>")).toMatchSnapshot();
  });
});
