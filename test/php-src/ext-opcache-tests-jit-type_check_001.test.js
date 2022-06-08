// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/type_check_001.phpt
  it("JIT TYPE_CHECK: 001 exception handling", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($no, $msg) {\n    throw new Exception($msg);\n});\ntry {\n    if (!is_scalar($a)) {\n        undefined_function('Null');\n    }\n} catch (Exception $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
