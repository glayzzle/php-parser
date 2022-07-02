// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/require_once_warning_to_exception.phpt
  it("Promoting require_once warning to exception", function () {
    expect(parser.parseCode("<?php\nfunction exception_error_handler($errno, $errstr, $errfile, $errline ) {\n    throw new Exception($errstr);\n}\nset_error_handler(\"exception_error_handler\");\ntry {\n    $results = require_once 'does-not-exist.php';\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n};\n?>")).toMatchSnapshot();
  });
});
