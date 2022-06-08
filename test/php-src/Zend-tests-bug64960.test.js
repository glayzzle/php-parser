// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64960.phpt
  it("Bug #64960 (Segfault in gc_zval_possible_root)", function () {
    expect(parser.parseCode("<?php\n// this makes ob_end_clean raise an error\nob_end_flush();\nclass ExceptionHandler {\n    public function __invoke (Exception $e)\n    {\n        // this triggers the custom error handler\n        ob_end_clean();\n    }\n}\n// this must be a class, closure does not trigger segfault\nset_exception_handler(new ExceptionHandler());\n// exception must be thrown from error handler.\nset_error_handler(function()\n{\n    $e = new Exception;\n    $e->_trace = debug_backtrace();\n    throw $e;\n});\n// trigger error handler\n$a['waa'];\n?>")).toMatchSnapshot();
  });
});
