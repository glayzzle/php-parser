// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/039.phpt
  it("Handling of undef variable exception in JMP_NULL", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $m) {\n    throw new Exception($m);\n});\ntry {\n    $foo?->foo;\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
