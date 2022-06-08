// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/send_var_ex_002.phpt
  it("JIT SEND_VAR_EX may leak with named args", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i < 3; $i++ ) {\n\t$x = 0;\n\ttest(a: $x);\n\tvar_dump($x);\n}\t\nfunction test(&$a = null, SomeType &$b = null) {\n    $a++;\n}\n?>")).toMatchSnapshot();
  });
});
