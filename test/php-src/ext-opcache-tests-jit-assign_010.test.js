// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_010.phpt
  it("JIT ASSIGN: 010", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array();\n    $b =& $a;\n    $a = $b;\n}\nfoo();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
