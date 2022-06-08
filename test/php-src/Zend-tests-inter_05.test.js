// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/inter_05.phpt
  it("Trying to inherit a class in an interface", function () {
    expect(parser.parseCode("<?php\ninterface a extends Exception { }\n?>")).toMatchSnapshot();
  });
});
