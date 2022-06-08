// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/throw-during-fiber-destruct.phpt
  it("Make sure exceptions are rethrown when throwing from fiber destructor", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function() {\n    try {\n        Fiber::suspend();\n    } finally {\n        throw new Exception(\"Exception 2\");\n    }\n});\n$fiber->start();\nunset($fiber);\nthrow new Exception(\"Exception 1\");\n?>")).toMatchSnapshot();
  });
});
