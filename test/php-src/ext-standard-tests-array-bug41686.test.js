// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug41686.phpt
  it("Bug #41686 (Omitting length param in array_slice not possible)", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$b = array('a'=>1,'b'=>1,'c'=>2);\nvar_dump(\n        array_slice($a, 1),\n        array_slice($a, 1, 2, TRUE),\n        array_slice($a, 1, NULL, TRUE),\n        array_slice($b, 1),\n        array_slice($b, 1, 2, TRUE),\n        array_slice($b, 1, NULL, TRUE)\n);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
