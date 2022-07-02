// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/nan-comparison-false.phpt
  it("Comparisons with NAN should yield false, even at compile-time", function () {
    expect(parser.parseCode("<?php\necho \"** CONST\\n\";\nvar_dump(0 < NAN);\nvar_dump(0 <= NAN);\nvar_dump(0 > NAN);\nvar_dump(0 >= NAN);\necho \"** VAR\\n\";\n$nan = NAN;\nvar_dump(0 < $nan);\nvar_dump(0 <= $nan);\nvar_dump(0 > $nan);\nvar_dump(0 >= $nan);\n?>")).toMatchSnapshot();
  });
});
