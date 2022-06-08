// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/recv_005.phpt
  it("JIT RECV: 005", function () {
    expect(parser.parseCode("<?php\nfunction foo($var) {\n  var_dump($var);\n}\nfoo(1);\nfoo(1.0);\nfoo(\"hello\");\nfoo(array());\n?>")).toMatchSnapshot();
  });
});
