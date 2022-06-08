// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/remove_predecessor_of_pi_node.phpt
  it("Regression test for incorrect update of pi node users when removing a predecessor block", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for (; $n--; )\n        C;\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
