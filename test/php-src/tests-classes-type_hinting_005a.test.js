// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/type_hinting_005a.phpt
  it("Check type hint compatibility in overrides with array hints.", function () {
    expect(parser.parseCode("<?php\nClass C { function f(array $a) {} }\n// Compatible hint.\nClass D1 extends C { function f(array $a) {} }\n// Class hint, should be array.\nClass D2 extends C { function f(SomeClass $a) {} }\n?>")).toMatchSnapshot();
  });
});
