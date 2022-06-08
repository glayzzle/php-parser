// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/optimizer_register_pass.phpt
  it("Optimizer: Pass Registration", function () {
    expect(parser.parseCode("<?php\n?>")).toMatchSnapshot();
  });
});
