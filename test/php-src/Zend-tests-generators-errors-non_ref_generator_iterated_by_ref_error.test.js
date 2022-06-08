// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/non_ref_generator_iterated_by_ref_error.phpt
  it("Non-ref generators cannot be iterated by-ref", function () {
    expect(parser.parseCode("<?php\nfunction gen() { yield; }\n$gen = gen();\nforeach ($gen as &$value) { }\n?>")).toMatchSnapshot();
  });
});
