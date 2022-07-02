// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33802.phpt
  it("Bug #33802 (throw Exception in error handler causes crash)", function () {
    expect(parser.parseCode("<?php\nset_error_handler('errorHandler', E_USER_ERROR);\ntry{\n    test();\n}catch(Exception $e){\n}\nrestore_error_handler();\nfunction test(){\n    trigger_error(\"error\", E_USER_ERROR);\n}\nfunction errorHandler($errno, $errstr, $errfile, $errline) {\n    throw new Exception();\n}\n?>\nok")).toMatchSnapshot();
  });
});
