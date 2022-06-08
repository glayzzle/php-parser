// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_fiber_06.phpt
  it("Observer: Throwing fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend();\n});\n$fiber->start();\ntry {\n    $fiber->throw(new Exception);\n} catch (Exception $exception) {\n}\n?>")).toMatchSnapshot();
  });
});
