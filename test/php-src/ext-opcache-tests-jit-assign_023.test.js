// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_023.phpt
  it("JIT ASSIGN: 023", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array(1);\n    $a = $undef;\n    for($i=0; $i<6; $i++) {\n        $undef = 1;\n    }\n}\nfoo();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
