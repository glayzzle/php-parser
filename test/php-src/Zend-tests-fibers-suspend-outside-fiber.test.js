// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/suspend-outside-fiber.phpt
  it("Suspend outside fiber", function () {
    expect(parser.parseCode("<?php\n$value = Fiber::suspend(1);\n?>")).toMatchSnapshot();
  });
});
