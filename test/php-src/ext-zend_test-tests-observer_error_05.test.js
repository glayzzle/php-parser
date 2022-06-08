// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_error_05.phpt
  it("Observer: End handlers fire after a userland fatal error", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function ($errno, $errstr, $errfile, $errline) {\n    trigger_error('Foo error', E_USER_ERROR);\n});\nfunction foo()\n{\n\treturn $x; // warning\n}\nfoo();\necho 'You should not see this.';\n?>")).toMatchSnapshot();
  });
});
