// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61767.phpt
  it("Bug #61767 (Shutdown functions not called in certain error situation)", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $msg, $file = null, $line = null) {\n    echo \"Error handler called ($msg)\\n\";\n    throw new \\ErrorException($msg, $code, 0, $file, $line);\n});\nregister_shutdown_function(function(){\n    echo \"Shutting down\\n\";\n    print_r(error_get_last());\n});\n//$undefined = null; // defined variable does not cause problems\n$undefined->foo();\n?>")).toMatchSnapshot();
  });
});
