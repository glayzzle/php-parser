// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/xor_003.phpt
  it("JIT XOR: 003", function () {
    expect(parser.parseCode("<?php\nfunction foo($a, $b) {\n  $res = $a ^ $b;\n  var_dump($res);\n}\nfoo(\"abc\", \"\\001\\002\\003\");\n?>")).toMatchSnapshot();
  });
});
