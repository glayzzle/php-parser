// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/callable_param_exception_leak.phpt
  it("Make sure is_callable error does not leak if an exception is also thrown", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n    throw new Exception(\"Failed\");\n});\ntry {\n    array_map('A::b', []);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
