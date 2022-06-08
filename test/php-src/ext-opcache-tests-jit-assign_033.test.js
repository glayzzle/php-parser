// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_033.phpt
  it("JIT ASSIGN: 033", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    $mode = 0;\n    $working = 0;\n    while ($mode == 0) {\n        $working = $mode = 1;\n    }\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
