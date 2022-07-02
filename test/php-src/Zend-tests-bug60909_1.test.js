// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60909_1.phpt
  it("Bug #60909 (custom error handler throwing Exception + fatal error = no shutdown function).", function () {
    expect(parser.parseCode("<?php\nregister_shutdown_function(function(){echo(\"\\n\\n!!!shutdown!!!\\n\\n\");});\nset_error_handler(function($errno, $errstr, $errfile, $errline){\n echo \"error($errstr)\";\n throw new Exception(\"Foo\");\n});\nrequire 'notfound.php';\n?>")).toMatchSnapshot();
  });
});
