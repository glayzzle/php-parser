// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_in_nested_rope.phpt
  it("Exception during nested rope", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() { throw new Exception; });\ntry {\n    $a = \"foo\";\n    $str = \"$a${\"y$a$a\"}y\";\n} catch (Exception $e) {\n    echo \"Exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
