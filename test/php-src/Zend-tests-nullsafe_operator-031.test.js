// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/031.phpt
  it("Nullsafe operator on referenced value", function () {
    expect(parser.parseCode("<?php\n$val = null;\n$ref =& $val;\nvar_dump($ref?->foo);\n$val = new stdClass;\nvar_dump($ref?->foo);\n?>")).toMatchSnapshot();
  });
});
