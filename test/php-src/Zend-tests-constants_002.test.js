// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants_002.phpt
  it("Defining constants with non-scalar values", function () {
    expect(parser.parseCode("<?php\ndefine('foo', new stdClass);\nvar_dump(foo);\ndefine('bar', fopen(__FILE__, 'r'));\nvar_dump(bar);\n?>")).toMatchSnapshot();
  });
});
