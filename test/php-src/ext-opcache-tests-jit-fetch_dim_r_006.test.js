// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_006.phpt
  it("JIT FETCH_DIM_R: 006", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n\t$a['x'][1] = true;\n\tfor ($i = 0; $i < 3; $i++) {\n\t\tvar_dump($a['x'][0]);\n\t}\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
