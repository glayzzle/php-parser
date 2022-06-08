// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75218.phpt
  it("Bug #75218: Change remaining uncatchable fatal errors for parsing into ParseError", function () {
    expect(parser.parseCode("<?php\nfunction try_eval($code) {\n    try {\n        eval($code);\n    } catch (CompileError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\ntry_eval('if (false) {class C { final final function foo($fff) {}}}');\ntry_eval('if (false) {class C { private protected $x; }}');\ntry_eval('if (true) { __HALT_COMPILER(); }');\ntry_eval('declare(encoding=[]);');\n?>")).toMatchSnapshot();
  });
});
