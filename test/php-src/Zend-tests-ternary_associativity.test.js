// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ternary_associativity.phpt
  it("Allowed nested ternary cases", function () {
    expect(parser.parseCode("<?php\n(1 ? 2 : 3) ? 4 : 5; // ok\n1 ? 2 : (3 ? 4 : 5); // ok\n1 ?: 2 ?: 3;   // ok\n(1 ?: 2) ?: 3; // ok\n1 ?: (2 ?: 3); // ok\n(1 ?: 2) ? 3 : 4; // ok\n1 ?: (2 ? 3 : 4); // ok\n(1 ? 2 : 3) ?: 4; // ok\n1 ? 2 : (3 ?: 4); // ok\n?>\n===DONE===")).toMatchSnapshot();
  });
});
