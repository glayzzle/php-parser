// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/fiber-get-current.phpt
  it("Fiber::getCurrent()", function () {
    expect(parser.parseCode("<?php\nvar_dump(Fiber::getCurrent());\n$fiber = new Fiber(function (): void {\n    var_dump(Fiber::getCurrent());\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
