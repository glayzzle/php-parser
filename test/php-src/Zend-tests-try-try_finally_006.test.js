// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_006.phpt
  it("Try finally (with near goto)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n   $jmp = 1;\n   try {\n   } finally {\nprevious:\n       if ($jmp) {\n           goto label;\n           echo \"dummy\";\nlabel:\n           echo \"label\\n\";\n           $jmp = 0;\n           goto previous;\n       }\n       echo \"okey\";\n   }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
