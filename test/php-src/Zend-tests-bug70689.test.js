// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70689.phpt
  it("Bug #70689 (Exception handler does not work as expected)", function () {
    expect(parser.parseCode("<?php\nfunction foo($foo) {\n    echo \"Executing foo\\n\";\n}\nset_error_handler(function($errno, $errstr) {\n    throw new Exception($errstr);\n});\ntry {\n    foo();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
