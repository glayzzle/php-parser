// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug79475.phpt
  it("Bug #79475 ([JIT] func_get_args() assertion violation)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $args = func_get_args();\n    $args[] = \"bar\";\n}\nfoo();\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
