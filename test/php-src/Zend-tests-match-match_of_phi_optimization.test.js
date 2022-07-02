// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/match_of_phi_optimization.phpt
  it("Unreachable code elimination when match argument is a phi node", function () {
    expect(parser.parseCode("<?php\n$x = true;\nmatch ($x and true or true) {\n    false => $x\n};\n?>")).toMatchSnapshot();
  });
});
