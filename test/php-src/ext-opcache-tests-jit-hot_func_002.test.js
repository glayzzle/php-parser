// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/hot_func_002.phpt
  it("JIT HOT_FUNC: 002", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  var_dump(\"hello\");\n}\nfoo();\nfoo();\nfoo();\n?>")).toMatchSnapshot();
  });
});
