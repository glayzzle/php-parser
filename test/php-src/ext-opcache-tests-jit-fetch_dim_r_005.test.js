// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_005.phpt
  it("JIT FETCH_DIM_R: 005", function () {
    expect(parser.parseCode("<?php\n$gens = [];\nfor ($i = 0; $i < 5; $i++) {\n    $gens[] = $gens[-1];\n}\nvar_dump($gens);\n?>")).toMatchSnapshot();
  });
});
