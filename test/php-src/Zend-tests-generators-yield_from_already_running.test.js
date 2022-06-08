// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_already_running.phpt
  it("Yielding from the already running Generator should fail (bug #69458)", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield from yield;\n}\n($gen = gen())->send($gen);\n?>")).toMatchSnapshot();
  });
});
