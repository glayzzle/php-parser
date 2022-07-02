// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/validation/mixed_return_strict_error.phpt
  it("Test that the mixed return type is not compatible with a void return value in strict mode", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nfunction foo(): mixed\n{\n}\ntry {\n    foo();\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
