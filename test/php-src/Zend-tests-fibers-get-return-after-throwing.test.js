// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/get-return-after-throwing.phpt
  it("Fiber::getReturn() after a fiber throws", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(fn() => throw new Exception('test'));\ntry {\n    $fiber->start();\n} catch (Exception $exception) {\n    echo $exception->getMessage(), \"\\n\";\n}\n$fiber->getReturn();\n?>")).toMatchSnapshot();
  });
});
