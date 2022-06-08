// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/015.phpt
  it("Test nullsafe in binary op", function () {
    expect(parser.parseCode("<?php\n(new stdClass)->{null?->x}->y;\n?>")).toMatchSnapshot();
  });
});
