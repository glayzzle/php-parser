// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_009.phpt
  it("ZE2 Late Static Binding interface name \"static\"", function () {
    expect(() => parser.parseCode("<?php\ninterface static {\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
