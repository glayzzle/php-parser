// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varvars_by_ref.phpt
  it("Accessing variable variables using referenced names", function () {
    expect(parser.parseCode("<?php\n$name = 'var';\n$ref =& $name;\n$$name = 42;\nvar_dump(isset($$name));\nunset($$name);\nvar_dump(isset($$name));\n?>")).toMatchSnapshot();
  });
});
