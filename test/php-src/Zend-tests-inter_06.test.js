// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/inter_06.phpt
  it("Trying use name of an internal class as interface name", function () {
    expect(parser.parseCode("<?php\ninterface stdClass { }\n?>")).toMatchSnapshot();
  });
});
