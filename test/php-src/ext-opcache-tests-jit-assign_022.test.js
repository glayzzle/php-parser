// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_022.phpt
  it("JIT ASSIGN: 022", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array(1);\n    $a[0] = $undef;\n    for($i=0; $i<6; $i++) {\n        $undef = 1;\n    }\n}\nfoo();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
