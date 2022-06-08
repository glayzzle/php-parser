// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments/argument_count_incorrect_internal_strict.phpt
  it("Call internal function with incorrect number of arguments with strict types", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\ntry {\n    substr(\"foo\");\n} catch (ArgumentCountError $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    array_diff();\n} catch (ArgumentCountError $e) {\n    echo get_class($e) . PHP_EOL;\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
