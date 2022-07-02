// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/out-of-memory-in-recursive-fiber.phpt
  it("Out of Memory from recursive fiber creation", function () {
    expect(parser.parseCode("<?php\nfunction create_fiber(): Fiber\n{\n    $fiber = new Fiber('create_fiber');\n    $fiber->start();\n    return $fiber;\n}\n$fiber = new Fiber('create_fiber');\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
