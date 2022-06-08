// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_014.phpt
  it("JIT FETCH_DIM_R: 014", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $s =+ $y;\n    $tokenthiss[$i=$s][] = $y = $y;\n    $tokenthiss[$i][$i] + $y;\n}\n@foo();\n?>\nDONE")).toMatchSnapshot();
  });
});
