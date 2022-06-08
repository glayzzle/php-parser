// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments/argument_count_incorrect_internal.phpt
  it("Call internal function with incorrect number of arguments", function () {
    expect(parser.parseCode("<?php\ntry {\n    substr(\"foo\");\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
