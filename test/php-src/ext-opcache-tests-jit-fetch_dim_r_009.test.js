// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_009.phpt
  it("JIT FETCH_DIM_R: 009", function () {
    expect(parser.parseCode("<?php\n$ary = [[0]];\nfor ($i = 2; $i < 5; $i++) {\n    var_dump($ary[0][$i>>1]);\n    $ary[0][$i] = 1;\n}\n?>")).toMatchSnapshot();
  });
});
