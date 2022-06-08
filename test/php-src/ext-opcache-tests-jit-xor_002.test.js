// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/xor_002.phpt
  it("JIT XOR: 002", function () {
    expect(parser.parseCode("<?php\nfunction foo($var) {\n  $res = $var ^ $var;\n  var_dump($res);\n}\nfoo(5);\n?>")).toMatchSnapshot();
  });
});
