// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_005.phpt
  it("Trying to throw exception of an interface", function () {
    expect(parser.parseCode("<?php\ninterface a { }\nthrow new a();\n?>")).toMatchSnapshot();
  });
});
