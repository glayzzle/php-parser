// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64135.phpt
  it("Bug #64135 (Exceptions from set_error_handler are not always propagated)", function () {
    expect(parser.parseCode("<?php\nfunction exception_error_handler() {\n        throw new Exception();\n}\nset_error_handler(\"exception_error_handler\");\ntry {\n   $undefined->undefined();\n} catch(Throwable $e) {\n    echo \"Exception is thrown\";\n}\n?>")).toMatchSnapshot();
  });
});
