// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants_001.phpt
  it("Defining and using constants", function () {
    expect(parser.parseCode("<?php\ndefine('foo', \t2);\ndefine('1', \t2);\ndefine(1, \t\t2);\ndefine('',\t\t1);\ndefine('1foo',\t3);\nvar_dump(constant('foo'));\nvar_dump(constant('1'));\nvar_dump(constant(1));\nvar_dump(constant(''));\nvar_dump(constant('1foo'));\n?>")).toMatchSnapshot();
  });
});
