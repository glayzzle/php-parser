// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/get-return-after-bailout.phpt
  it("Fiber::getReturn() after bailout", function () {
    expect(parser.parseCode("<?php\nregister_shutdown_function(static function (): void {\n    global $fiber;\n    var_dump($fiber->getReturn());\n});\n$fiber = new Fiber(static function (): void {\n    str_repeat('X', PHP_INT_MAX);\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
