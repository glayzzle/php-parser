// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug25922.phpt
  it("Bug #25922 (SEGV in error_handler when context is destroyed)", function () {
    expect(parser.parseCode("<?php\nfunction my_error_handler($error, $errmsg='', $errfile='', $errline=0, $errcontext='')\n{\n    echo \"$errmsg\\n\";\n    $errcontext = '';\n}\nset_error_handler('my_error_handler');\nfunction test()\n{\n    echo \"Undefined index here: '{$data['HTTP_HEADER']}'\\n\";\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
