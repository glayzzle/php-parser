// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/string_keys.phpt
  it("Argument unpacking does not work with string keys (forward compatibility for named args)", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($errno, $errstr) {\n    var_dump($errstr);\n});\ntry {\n    var_dump(...new ArrayIterator([1, 2, \"foo\" => 3, 4]));\n} catch (Error $ex) {\n    var_dump($ex->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
