// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/debug_backtrace_with_include_and_this.phpt
  it("debug_backtrace segmentation fault with include and error handler", function () {
    expect(parser.parseCode("<?php\nclass CLWrapper {\n  function stream_open($path, $mode, $options, $opened_path) {\n    return false;\n  }\n}\nclass CL {\n  public function load($class) {\n    if (!include($class)) {\n      throw new Exception('Failed loading '.$class);\n    }\n  }\n}\nstream_wrapper_register('class', 'CLWrapper');\nset_error_handler(function($code, $msg, $file, $line) {\n  $bt= debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 2);\n  echo \"ERR#$code: $msg @ \", $bt[1]['function'], \"\\n\";\n});\ntry {\n  (new CL())->load('class://non.existent.Class');\n} catch (CLException $e) {\n  echo $e.\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
