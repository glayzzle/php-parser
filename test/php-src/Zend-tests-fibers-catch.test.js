// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/catch.phpt
  it("Catch exception thrown into fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function () {\n    try {\n        Fiber::suspend('test');\n    } catch (Exception $exception) {\n        var_dump($exception->getMessage());\n    }\n});\n$value = $fiber->start();\nvar_dump($value);\n$fiber->throw(new Exception('test'));\n?>")).toMatchSnapshot();
  });
});
