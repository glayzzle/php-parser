// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unreachable_phi_cycle.phpt
  it("Unreachable phi cycle", function () {
    expect(parser.parseCode("<?php\n// The inner loop is dead, but SCCP reachability analysis doesn't realize this,\n// as this is determined based on type information.\nfunction test() {\n    for (; $i--;) {\n        for(; x;);\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
