// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/catch-then-suspend.phpt
  it("Catch exception thrown into fiber, then suspend again", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function () {\n    try {\n        Fiber::suspend('in try');\n    } catch (Exception $exception) {\n    }\n    Fiber::suspend('after catch');\n});\nvar_dump($fiber->start());\nvar_dump($fiber->throw(new Exception));\nvar_dump($fiber->resume());\n?>")).toMatchSnapshot();
  });
});
