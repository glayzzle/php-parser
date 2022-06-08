// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/unstarted-fiber.phpt
  it("Not starting a fiber does not leak", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(fn() => null);\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
