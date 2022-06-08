// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_006.phpt
  it("JIT ADD: 006", function () {
    expect(parser.parseCode("<?php\nfunction foo($a, $b) {\n  $res = $a + $b;\n  var_dump($res);\n}\nfoo(3, 5);\nfoo(3.0, 5.0);\nfoo(3.0, 5);\nfoo(3, 5.0);\n?>")).toMatchSnapshot();
  });
});
