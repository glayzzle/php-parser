// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35634.phpt
  it("Bug #35634 (Erroneous \"Class declarations may not be nested\" error raised)", function () {
    expect(parser.parseCode("<?php\nif (defined(\"pass3\")) {\n  class ErrorClass {\n  }\n} else if (defined(\"pass2\")) {\n  class TestClass {\n    function __construct() {\n    }\n    function TestClass() {\n      $this->__construct();\n    }\n  }\n} else {\n  function errorHandler($errorNumber, $errorMessage, $fileName, $lineNumber) {\n    define(\"pass3\", 1);\n    include(__FILE__);\n    die(\"Error: $errorMessage ($fileName:$lineNumber)\\n\");\n  }\n  set_error_handler('errorHandler');\n  define(\"pass2\", 1);\n  include(__FILE__);\n  print \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
