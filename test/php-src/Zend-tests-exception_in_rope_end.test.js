// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_in_rope_end.phpt
  it("Exception during rope finalization", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() { throw new Exception; });\ntry {\n    $b = \"foo\";\n    $str = \"y$b$a\";\n} catch (Exception $e) {\n    echo \"Exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
