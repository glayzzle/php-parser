// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_coalesce_007.phpt
  it("Assign coalesce: \"$a[0] ??= $a\" should evaluate the right $a first", function () {
    expect(parser.parseCode("<?php\n$a[0] ??= $a;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
