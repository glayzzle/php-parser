// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_043.phpt
  it("JIT ASSIGN: Undef var notice promoted to exception", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $m) {\n    throw new Exception($m);\n});\ntry {\n    $a = $b;\n    NOT_REACHED;\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
