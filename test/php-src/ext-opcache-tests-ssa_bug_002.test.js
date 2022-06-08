// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_002.phpt
  it("Incorrect NOP removal on jump to NOP", function () {
    expect(parser.parseCode("<?php\nfunction test(int $i) : int {\n    if ($i == 1) {\n        $x = $i + 1;\n    }\n    return $i;\n}\nvar_dump(test(42));\n?>")).toMatchSnapshot();
  });
});
