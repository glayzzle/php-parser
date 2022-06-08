// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/cmp_007.phpt
  it("JIT CMP: 007 Wrong comparison skip", function () {
    expect(parser.parseCode("<?php\nfunction test($a) {\n    var_dump(1 - $a != 0);\n}\nfor ($i = 0; $i < 5; $i++) {\n\ttest(null);\n}\n?>")).toMatchSnapshot();
  });
});
