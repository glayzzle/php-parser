// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_025.phpt
  it("JIT ASSIGN: 025", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $arr[0][0] = $ref;\n    for($cnt=0;$cnt<6;$cnt++) {\n        $ref = 1;\n        $arr[0][0] = $ref;\n    }\n}\nfoo();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
