// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/countable_class_basic1.phpt
  it("SPL: Test shape of interface Countable.", function () {
    expect(parser.parseCode("<?php\necho new ReflectionClass('Countable');\n?>")).toMatchSnapshot();
  });
});
