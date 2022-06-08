// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/jmpz_001.phpt
  it("JIT JMPZ: JMPZ may require code for \"smart branch\" and at the same time be a target of another JMP.", function () {
    expect(parser.parseCode("<?php\nnamespace A;\nfunction test() {\n    $modelData = array();\n    $ret = false ||\n        ((is_array($modelData) || $modelData instanceof \\Countable) && true) || false;\n    return $ret;\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
