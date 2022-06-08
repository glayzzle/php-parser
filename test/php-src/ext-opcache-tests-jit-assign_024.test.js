// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_024.phpt
  it("JIT ASSIGN: 024", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = $undef;\n    for($i=0; $i<6; $i++) {\n        $undef = 1;\n    }\n}\nfoo();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
