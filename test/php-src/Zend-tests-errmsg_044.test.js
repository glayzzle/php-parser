// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_044.phpt
  it("Trying use object of type stdClass as array", function () {
    expect(parser.parseCode("<?php\n$a[0] = new stdclass;\n$a[0][0] = new stdclass;\n?>")).toMatchSnapshot();
  });
});
