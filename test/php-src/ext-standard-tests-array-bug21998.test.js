// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug21998.phpt
  it("Bug #21998 (array_pop() does not reset the current array position)", function () {
    expect(parser.parseCode("<?php\n$a = array(\"a\", \"b\", \"c\");\nvar_dump(key($a));\nvar_dump(array_pop($a));\nvar_dump(key($a));\nvar_dump(array_pop($a));\nvar_dump(key($a));\nvar_dump(array_pop($a));\nvar_dump(key($a));\n?>")).toMatchSnapshot();
  });
});
