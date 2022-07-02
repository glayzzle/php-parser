// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/strlen_deprecation_to_exception.phpt
  it("strlen() null deprecation warning promoted to exception", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $msg) {\n    throw new Exception($msg);\n});\ntry {\n    strlen(null);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
