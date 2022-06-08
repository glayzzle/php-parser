// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/025.phpt
  it("Nullsafe chains in variable variables", function () {
    expect(parser.parseCode("<?php\n$a = null;\nvar_dump(${$a?->b}->c);\n?>")).toMatchSnapshot();
  });
});
