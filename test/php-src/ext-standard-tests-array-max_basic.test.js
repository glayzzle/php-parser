// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/max_basic.phpt
  it("Test return type and value for expected input max()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/array.c\n*/\necho \"\\n*** Testing sequences of numbers ***\\n\";\nvar_dump(max(2,1,2));\nvar_dump(max(-2,1,2));\nvar_dump(max(2.1,2.11,2.09));\nvar_dump(max(\"\", \"t\", \"b\"));\nvar_dump(max(false, true, false));\nvar_dump(max(true, false, true));\nvar_dump(max(1, true, false, true));\nvar_dump(max(0, true, false, true));\nvar_dump(max(0, 1, array(2,3)));\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
