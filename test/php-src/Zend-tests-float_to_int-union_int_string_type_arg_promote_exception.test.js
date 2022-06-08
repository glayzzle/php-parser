// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/union_int_string_type_arg_promote_exception.phpt
  it("Promote deprecation warning for int|string type into exception", function () {
    expect(parser.parseCode("<?php\nfunction test(int|string $arg) {}\nset_error_handler(function($_, $msg) {\n    throw new Exception($msg);\n});\ntry {\n    test(0.5);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
