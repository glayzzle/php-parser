// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_026.phpt
  it("JIT ASSIGN: 026", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array(1,2,3);\n    $b=&$a;\n    $b=1;\n    $a = new stdClass;\n    $a->a=1;\n    $a->b=2;\n    $b=&$a;\n}\nfoo();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
