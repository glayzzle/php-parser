// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/srand_basic.phpt
  it("Test srand() - basic function test for srand()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing srand() : basic functionality ***\\n\";\n// Should return NULL if given anything that it can convert to long\n// This doesn't actually test what it does with the input :-\\\nvar_dump(srand());\nvar_dump(srand(500));\nvar_dump(srand(500.1));\nvar_dump(srand(\"500\"));\nvar_dump(srand(\"500E3\"));\nvar_dump(srand(true));\nvar_dump(srand(false));\n?>")).toMatchSnapshot();
  });
});
