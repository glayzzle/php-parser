// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/017.phpt
  it("Test return nullsafe as ref", function () {
    expect(parser.parseCode("<?php\nfunction &get_bar_ref($foo) {\n    return $foo?->bar;\n}\n?>")).toMatchSnapshot();
  });
});
