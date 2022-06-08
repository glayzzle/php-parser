// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_008.phpt
  it("ZE2 Late Static Binding class name \"static\"", function () {
    expect(() => parser.parseCode("<?php\nclass static {\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
