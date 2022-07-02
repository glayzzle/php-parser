// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_call_internal.phpt
  it("Closure::call() on internal method", function () {
    expect(parser.parseCode("<?php\nvar_dump(Closure::fromCallable([new DateTime(), 'getTimestamp'])->call(new DateTime('@123')));\n?>")).toMatchSnapshot();
  });
});
