// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/qm_assign_undef_exception.phpt
  it("QM_ASSIGN of undef var may throw exception", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $m) { throw new Exception($m); });\nfunction test() {\n    $a = $b;\n    X;\n}\ntry {\n    test();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
