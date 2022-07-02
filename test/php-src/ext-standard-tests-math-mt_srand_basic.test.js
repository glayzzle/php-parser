// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/mt_srand_basic.phpt
  it("Test mt_srand() - basic function (return values) mt_srand()", function () {
    expect(parser.parseCode("<?php\n// Should return NULL if given anything that it can convert to long\n// This doesn't actually test what it does with the input :-\\\nvar_dump(mt_srand());\nvar_dump(mt_srand(500));\nvar_dump(mt_srand(500.1));\nvar_dump(mt_srand(\"500\"));\nvar_dump(mt_srand(\"500E3\"));\nvar_dump(mt_srand(true));\nvar_dump(mt_srand(false));\n?>")).toMatchSnapshot();
  });
});
